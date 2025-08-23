import React from "react";

export default function Li({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-sm text-muted-foreground">
      <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-foreground/50" />
      {children}
    </li>
  );
}
