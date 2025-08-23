"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Marquee({
  children,
  className,
  speed = 20,
  direction = "left",
  repeatCount = 4,
}: {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: "left" | "right";
  repeatCount?: number;
}) {
  const xFrom = direction === "left" ? "0%" : "-50%";
  const xTo = direction === "left" ? "-50%" : "0%";

  // Duplicate children enough times to overfill the screen
  const items = Array.from({ length: repeatCount }, (_, i) => (
    <div key={i} className="flex items-center">
      {children}
    </div>
  ));

  return (
    <div
      className={["relative overflow-hidden w-full", className || ""].join(" ")}
    >
      <motion.div
        className="flex whitespace-nowrap will-change-transform"
        animate={{ x: [xFrom, xTo] }}
        transition={{
          repeat: Infinity,
          duration: speed,
          ease: "linear",
        }}
      >
        {items}
      </motion.div>
    </div>
  );
}
