"use client";

import { useMemo, useState } from "react";
import { addMonths, format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isToday } from "date-fns";
import { ChevronLeft, ChevronRight, Plus, Check } from "lucide-react";
import { motion } from "framer-motion";

type PlatformKey = "instagram" | "facebook" | "linkedin" | "x";

const platformsDefault: Record<PlatformKey, boolean> = {
  instagram: true,
  facebook: true,
  linkedin: true,
  x: true,
};

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

function ToggleRow({
  checked,
  label,
  onChange,
}: {
  checked: boolean;
  label: string;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className="group flex w-full items-center gap-3 rounded-lg px-2 py-2 text-left hover:bg-muted/40"
    >
      <span
        className={[
          "grid h-5 w-5 place-content-center rounded border",
          checked
            ? "border-primary/30 bg-primary/20 text-primary"
            : "border-border/70 bg-background/60 text-transparent",
        ].join(" ")}
      >
        <Check className="h-3.5 w-3.5" />
      </span>
      <span className="text-sm text-foreground/90">{label}</span>
    </button>
  );
}

export default function CalendarPage() {
  const [viewDate, setViewDate] = useState<Date>(new Date(2024, 9, 5)); // October 2024 (0-indexed)
  const [selected, setSelected] = useState<Date>(new Date(2024, 9, 5));
  const [platforms, setPlatforms] = useState(platformsDefault);

  const monthLabel = format(viewDate, "MMMM yyyy");

  // Build 6x7 grid for month view
  const days = useMemo(() => {
    const start = startOfWeek(startOfMonth(viewDate), { weekStartsOn: 0 });
    const end = endOfWeek(endOfMonth(viewDate), { weekStartsOn: 0 });
    const out: Date[] = [];
    let cur = start;
    while (cur <= end) {
      out.push(cur);
      cur = addDays(cur, 1);
    }
    return out;
  }, [viewDate]);

  return (
    <section className="mx-auto max-w-[1200px] px-6 py-8 md:py-10">
      {/* Top row: page title + Today button */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">{monthLabel}</h1>
        <button
          onClick={() => {
            const now = new Date();
            setViewDate(now);
            setSelected(now);
          }}
          className="rounded-lg border border-primary/30 bg-primary/15 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/20"
        >
          Today
        </button>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left rail */}
        <div className="lg:col-span-3 space-y-6">
          {/* Month mini-picker */}
          <CardShell className="p-4">
            <div className="mb-2 flex items-center justify-between">
              <button
                className="rounded-md p-2 hover:bg-muted/40"
                onClick={() => setViewDate(addMonths(viewDate, -1))}
                aria-label="Previous month"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <div className="text-sm font-medium">{format(viewDate, "MMMM yyyy")}</div>
              <button
                className="rounded-md p-2 hover:bg-muted/40"
                onClick={() => setViewDate(addMonths(viewDate, 1))}
                aria-label="Next month"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <div className="grid grid-cols-7 gap-y-2 text-center text-xs text-muted-foreground">
              {["S", "M", "T", "W", "F"].map((d) => (
                <div key={d}>{d}</div>
              ))}
            </div>
            <div className="mt-2 grid grid-cols-7 gap-2">
              {days.map((d) => {
                const inMonth = isSameMonth(d, viewDate);
                const active = format(d, "yyyy-MM-dd") === format(selected, "yyyy-MM-dd");
                const today = isToday(d);
                return (
                  <button
                    key={d.toISOString()}
                    onClick={() => setSelected(d)}
                    className={[
                      "aspect-square rounded-lg text-sm",
                      inMonth ? "text-foreground/90" : "text-muted-foreground/60",
                      active
                        ? "bg-primary text-white"
                        : today
                        ? "ring-1 ring-primary/40"
                        : "hover:bg-muted/40",
                    ].join(" ")}
                  >
                    {format(d, "d")}
                  </button>
                );
              })}
            </div>
          </CardShell>

          {/* Platforms filter */}
          <CardShell className="p-4">
            <div className="text-sm font-semibold">Platforms</div>
            <div className="mt-3 space-y-1.5">
              <ToggleRow
                checked={platforms.instagram}
                label="Instagram"
                onChange={(v) => setPlatforms((p) => ({ ...p, instagram: v }))}
              />
              <ToggleRow
                checked={platforms.facebook}
                label="Facebook"
                onChange={(v) => setPlatforms((p) => ({ ...p, facebook: v }))}
              />
              <ToggleRow
                checked={platforms.linkedin}
                label="LinkedIn"
                onChange={(v) => setPlatforms((p) => ({ ...p, linkedin: v }))}
              />
              <ToggleRow
                checked={platforms.x}
                label="X"
                onChange={(v) => setPlatforms((p) => ({ ...p, x: v }))}
              />
            </div>
          </CardShell>
        </div>

        {/* Month grid */}
        <div className="lg:col-span-9">
          <CardShell className="overflow-hidden">
            {/* Weekday header */}
            <div className="grid grid-cols-7 border-b border-border/60 bg-muted/40 text-sm text-foreground/80">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                <div key={d} className="px-4 py-3">
                  {d}
                </div>
              ))}
            </div>

            {/* Dates */}
            <div className="grid grid-cols-7">
              {days.map((d, idx) => {
                const inMonth = isSameMonth(d, viewDate);
                const today = isToday(d);
                const sameAsSelected = format(d, "yyyy-MM-dd") === format(selected, "yyyy-MM-dd");

                return (
                  <div
                    key={d.toISOString()}
                    className={[
                      "min-h-[92px] border-r border-b border-border/60 p-3",
                      (idx + 1) % 7 === 0 ? "border-r-0" : "",
                      inMonth ? "bg-card/60" : "bg-background/40",
                    ].join(" ")}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={[
                          "text-sm",
                          inMonth ? "text-foreground/90" : "text-muted-foreground/60",
                        ].join(" ")}
                      >
                        {format(d, "d")}
                      </span>
                      {today && (
                        <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-medium text-primary ring-1 ring-primary/30">
                          Today
                        </span>
                      )}
                    </div>

                    {/* Example chip for scheduled posts (placeholder) */}
                    {sameAsSelected ? (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 truncate rounded-md bg-primary/15 px-2 py-1 text-xs text-primary ring-1 ring-primary/30"
                      >
                        2 scheduled posts
                      </motion.div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </CardShell>
        </div>
      </div>

      {/* Floating add button */}
      <button
        className="fixed bottom-8 right-8 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg ring-1 ring-primary/40 hover:brightness-110"
        aria-label="New post"
      >
        <Plus className="h-5 w-5" />
      </button>
    </section>
  );
}
