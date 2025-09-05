"use client";

import { useMemo } from "react";
import { ArrowUpRight } from "lucide-react";

function CardShell(props: React.HTMLAttributes<HTMLDivElement>) {
  const { className = "", ...rest } = props;
  return (
    <div
      className={[
        "rounded-xl border border-border/60 bg-card/70 backdrop-blur shadow-sm",
        className,
      ].join(" ")}
      {...rest}
    />
  );
}

function Kpi({
  label,
  value,
  delta,
}: {
  label: string;
  value: string;
  delta: string;
}) {
  return (
    <CardShell className="p-5">
      <div className="text-xs font-medium text-muted-foreground">{label}</div>
      <div className="mt-3 text-2xl font-semibold tracking-tight">{value}</div>
      <div className="mt-2 inline-flex items-center gap-1 text-xs text-emerald-400">
        <ArrowUpRight className="h-3.5 w-3.5" />
        {delta}
      </div>
    </CardShell>
  );
}

export default function AnalyticsPage() {
  // Faux data for the bars (Top Performing Posts)
  const bars = useMemo(() => [62, 58, 57, 56, 58], []);
  // Sparkline points represented with CSS heights
  const spark = useMemo(() => [40, 32, 36, 28, 60, 22, 38], []);

  return (
    <section className="mx-auto max-w-7xl px-6 py-8 md:py-10">
      <h1 className="text-2xl font-bold">Analytics</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Track social media performance across all platforms.
      </p>

      {/* Tabs (visual only) */}
      <div className="mt-6 flex items-center gap-6 border-b border-border/60">
        {["Overview", "Posts", "Reports"].map((t, i) => (
          <button
            key={t}
            className={[
              "relative -mb-px pb-3 text-sm",
              i === 0
                ? "font-semibold text-foreground after:absolute after:inset-x-0 after:-bottom-[1px] after:h-[2px] after:rounded-full after:bg-foreground"
                : "text-muted-foreground hover:text-foreground",
            ].join(" ")}
            type="button"
          >
            {t}
          </button>
        ))}
      </div>

      {/* Key Metrics */}
      <div className="mt-6">
        <div className="text-sm font-semibold">Key Metrics</div>
        <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Kpi label="Reach" value="12.5K" delta="+12%" />
          <Kpi label="Engagement" value="8.2K" delta="+8%" />
          <Kpi label="Click-Through Rate" value="3.5%" delta="+2%" />
        </div>
      </div>

      {/* Post Performance */}
      <div className="mt-8">
        <div className="text-sm font-semibold">Post Performance</div>
        <div className="mt-3 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {/* Engagement Over Time (sparkline) */}
          <CardShell className="p-5">
            <div className="flex items-baseline justify-between">
              <div>
                <div className="text-sm font-medium">Engagement Over Time</div>
                <div className="mt-1 text-2xl font-semibold">+15%</div>
                <div className="text-xs text-emerald-400">Last 30 Days +15%</div>
              </div>
            </div>

            {/* Sparkline */}
            <div className="mt-6 h-32 rounded-lg border border-border/60 bg-background/40 p-3">
              <div className="flex h-full items-end gap-1.5">
                {spark.map((h, i) => (
                  <div
                    key={i}
                    className="w-full max-w-[16px] flex-1 rounded-sm bg-foreground/20"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Axis labels */}
            <div className="mt-3 grid grid-cols-7 text-center text-[11px] text-muted-foreground">
              {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"].map((m) => (
                <div key={m}>{m}</div>
              ))}
            </div>
          </CardShell>

          {/* Top Performing Posts (bars) */}
          <CardShell className="p-5">
            <div className="text-sm font-medium">Top Performing Posts</div>
            <div className="mt-1 text-2xl font-semibold">+10%</div>
            <div className="text-xs text-emerald-400">Last 30 Days +10%</div>

            <div className="mt-6 h-40 rounded-lg border border-border/60 bg-background/40 p-4">
              <div className="flex h-full items-end justify-between gap-3">
                {bars.map((v, i) => (
                  <div key={i} className="flex w-full flex-col items-center gap-2">
                    <div
                      className="w-8 rounded-md bg-foreground/25"
                      style={{ height: `${v}%` }}
                      aria-hidden
                    />
                    <div className="text-[11px] text-muted-foreground">
                      {`Post ${i + 1}`}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardShell>
        </div>
      </div>

      {/* Trending Content */}
      <div className="mt-10">
        <div className="text-sm font-semibold">Trending Content</div>

        {/* Top Performing Post */}
        <div className="mt-3 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div>
            <div className="text-sm font-medium">Top Performing Post</div>
            <p className="mt-1 text-sm text-muted-foreground">
              This post received the highest engagement rate this month.
            </p>
            <button
              type="button"
              className="mt-3 rounded-lg border border-border/60 bg-muted px-3 py-2 text-xs font-medium text-foreground/90 hover:bg-muted/60"
            >
              View Post
            </button>
          </div>

          {/* Thumb 1 */}
          <CardShell className="overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1615397349754-cfa2066a18b2?q=80&w=1200&auto=format&fit=crop"
              alt="Top post"
              className="h-36 w-full object-cover"
            />
          </CardShell>
        </div>

        {/* Trending Hashtags */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div>
            <div className="text-sm font-medium">Trending Hashtags</div>
            <p className="mt-1 text-sm text-muted-foreground">
              These hashtags are currently trending in your industry.
            </p>
            <button
              type="button"
              className="mt-3 rounded-lg border border-border/60 bg-muted px-3 py-2 text-xs font-medium text-foreground/90 hover:bg-muted/60"
            >
              View Hashtags
            </button>
          </div>

          {/* Thumb 2 */}
          <CardShell className="overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop"
              alt="Hashtags card"
              className="h-36 w-full object-cover"
            />
          </CardShell>
        </div>
      </div>
    </section>
  );
}
