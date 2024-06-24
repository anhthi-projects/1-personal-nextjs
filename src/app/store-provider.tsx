"use client";
import { FC, ReactNode, useRef } from "react";

import { Provider } from "react-redux";

import { AppStore, makeStore } from "@/data-fetching/store";

interface StoryProviderProps {
  children: ReactNode;
}

const StoryProvider: FC<StoryProviderProps> = ({ children }) => {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoryProvider;
