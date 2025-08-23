"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function TiltCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [xy, setXy] = useState({ x: 0, y: 0 });
  const max = 10;
  return (
    <motion.div
      onMouseMove={(e) => {
        const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        setXy({ x: (px - 0.5) * 2, y: (py - 0.5) * 2 });
      }}
      onMouseLeave={() => setXy({ x: 0, y: 0 })}
      style={{
        rotateX: -xy.y * max,
        rotateY: xy.x * max,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
