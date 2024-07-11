"use client";
import { FC, ReactNode, useRef } from "react";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { Provider } from "react-redux";

import { usersApi } from "@/client-apis/users/users.api";

interface StoryProviderProps {
  children: ReactNode;
}

const rootReducer = combineReducers({
  [usersApi.reducerPath]: usersApi.reducer,
});

export const makeStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    preloadedState,
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([usersApi.middleware]),
  });

  setupListeners(store.dispatch);
  return store;
};

export const StoreProvider: FC<StoryProviderProps> = ({ children }) => {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
