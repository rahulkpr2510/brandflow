"use client";
import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function FaqItem({
  q,
  children,
}: {
  q: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-xl border bg-card/70 backdrop-blur">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between px-4 mt-5"
      >
        <span className="text-sm font-medium">{q}</span>
        <ChevronRight
          className={[
            "h-4 w-4 transition",
            open ? "rotate-90 text-primary" : "text-muted-foreground",
          ].join(" ")}
        />
      </button>
      <div
        className={[
          "grid transition-all duration-300 ease-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        ].join(" ")}
      >
        <div className="overflow-hidden px-4 pt-2 pb-4 text-sm text-muted-foreground">
          {children}
        </div>
      </div>
    </div>
  );
}
