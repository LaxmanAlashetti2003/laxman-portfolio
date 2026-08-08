"use client";

import { createContext, useContext } from "react";
import { MotionValue } from "framer-motion";

const ScrollContext = createContext<MotionValue<number> | null>(null);

export const ScrollProvider = ScrollContext.Provider;

export function useCanvasScroll() {
  const value = useContext(ScrollContext);
  if (!value) {
    throw new Error("useCanvasScroll must be used within ScrollyCanvas");
  }
  return value;
}
