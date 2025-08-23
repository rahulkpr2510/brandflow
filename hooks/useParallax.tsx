"use client";
import { useScroll, useTransform } from "framer-motion";

export function useParallax(multiplier = 0.15) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, -800 * multiplier]);
  return y;
}
