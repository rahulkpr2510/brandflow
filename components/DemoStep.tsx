import React from "react";
import TiltCard from "./TiltCard";
import { Card, CardContent } from "@/components/ui/card";

export default function DemoStep({
  step,
  title,
  desc,
}: {
  step: string;
  title: string;
  desc: string;
}) {
  return (
    <TiltCard>
      <Card className="h-full border bg-card/80 shadow-sm backdrop-blur">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border bg-background font-semibold">
              {step}
            </span>
            <span>Step</span>
          </div>
          <h4 className="mt-3 text-lg font-semibold">{title}</h4>
          <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
          <div className="mt-4 rounded-lg border bg-muted p-4 text-xs text-muted-foreground">
            <span className="opacity-80">AI:</span> Generating…
          </div>
        </CardContent>
      </Card>
    </TiltCard>
  );
}
