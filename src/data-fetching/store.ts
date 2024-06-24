import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { usersApi } from "./users/users.api";

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

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
