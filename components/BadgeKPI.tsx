import React from "react";

export default function BadgeKPI({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<any>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-lg border bg-background/70 px-3 py-2">
      <Icon className="h-4 w-4 text-primary" />
      <span className="text-xs">{label}:</span>
      <span className="text-xs font-semibold">{value}</span>
    </div>
  );
}
