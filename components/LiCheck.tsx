import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function LiCheck({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-sm">
      <CheckCircle2 className="mt-1 h-4 w-4 text-emerald-500" />
      <span>{children}</span>
    </li>
  );
}
