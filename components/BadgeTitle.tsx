import React from "react";

export default function BadgeTitle({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<any>;
  label: string;
}) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
      <Icon className="h-3.5 w-3.5" />
      {label}
    </div>
  );
}
