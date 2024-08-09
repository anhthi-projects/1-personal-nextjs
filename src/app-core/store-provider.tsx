"use client";
import { FC, ReactNode, useRef } from "react";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { Provider } from "react-redux";

import { authApi } from "@/client-apis/auth/auth.api";
import { socialNetworksApi } from "@/client-apis/social-networks/social-networks.api";
import { usersApi } from "@/client-apis/users/users.api";

interface StoryProviderProps {
  children: ReactNode;
}

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [usersApi.reducerPath]: usersApi.reducer,
  [socialNetworksApi.reducerPath]: socialNetworksApi.reducer,
});

const rootMiddlewares = [
  authApi.middleware,
  usersApi.middleware,
  socialNetworksApi.middleware,
];

export const makeStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    preloadedState,
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(rootMiddlewares),
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
