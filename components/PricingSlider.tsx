"use client";
import React, { useMemo, useState } from "react";
import { Sparkles, CalendarClock, LayoutGrid, ShieldCheck } from "lucide-react";
import BadgeKPI from "./BadgeKPI";

export default function PricingSlider() {
  const [posts, setPosts] = useState(30);
  const price = useMemo(() => {
    if (posts <= 30) return 0;
    const calc = 9 + Math.pow(posts, 0.85) * 0.8;
    return Math.round(calc);
  }, [posts]);

  const credits = posts * 10;

  return (
    <div className="rounded-2xl border bg-card/70 p-6 shadow-sm backdrop-blur">
      <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
        <div className="text-left">
          <div className="text-sm text-muted-foreground">Posts per month</div>
          <div className="text-3xl font-bold">{posts}</div>
        </div>
        <input
          type="range"
          min={10}
          max={300}
          step={10}
          value={posts}
          onChange={(e) => setPosts(parseInt(e.target.value))}
          className="w-full accent-primary md:max-w-md"
        />
        <div className="text-right">
          <div className="text-sm text-muted-foreground">Est. price</div>
          <div className="text-3xl font-bold">${price}/mo</div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-muted-foreground md:grid-cols-4">
        <BadgeKPI icon={Sparkles} label="Credits/mo" value={`${credits}`} />
        <BadgeKPI icon={CalendarClock} label="Scheduler" value="Included" />
        <BadgeKPI icon={LayoutGrid} label="Templates" value="Unlimited" />
        <BadgeKPI icon={ShieldCheck} label="SSO" value="Pro+" />
      </div>
    </div>
  );
}
