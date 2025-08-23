import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PriceCard({
  plan,
  price,
  tagline,
  features,
  cta,
  highlight,
}: {
  plan: string;
  price: string;
  tagline: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}) {
  return (
    <Card
      className={[
        "h-full border bg-card/80 backdrop-blur transition",
        highlight ? "shadow-xl ring-2 ring-primary" : "shadow-sm",
      ].join(" ")}
    >
      <CardContent className="p-6">
        <div className="flex items-baseline justify-between">
          <h3 className="text-xl font-semibold">{plan}</h3>
          <span className="text-2xl font-bold">{price}</span>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">{tagline}</p>
        <ul className="mt-4 space-y-2 text-sm">
          {features.map((f, i) => (
            <li key={i} className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              {f}
            </li>
          ))}
        </ul>
        <Button
          className="mt-6 w-full"
          variant={highlight ? "default" : "outline"}
        >
          {cta}
        </Button>
      </CardContent>
    </Card>
  );
}
