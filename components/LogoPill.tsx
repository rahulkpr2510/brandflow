import React from "react";

export default function LogoPill({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-4 inline-flex items-center rounded-full border bg-background/70 px-3 py-1 text-[11px] backdrop-blur">
      {children}
    </div>
  );
}
