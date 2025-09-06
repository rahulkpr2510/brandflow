"use client";

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

function BadgePaid() {
  return (
    <span className="inline-flex items-center justify-center rounded-md bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-400 ring-1 ring-inset ring-emerald-500/30">
      Paid
    </span>
  );
}

export default function BillingPage() {
  const usage = { used: 600, quota: 1000 };
  const pct = Math.round((usage.used / usage.quota) * 100);

  const rows = [
    { date: "July 15, 2024", desc: "Pro Plan Subscription", amount: "$49.99" },
    { date: "June 15, 2024", desc: "Pro Plan Subscription", amount: "$49.99" },
    { date: "May 15, 2024", desc: "Pro Plan Subscription", amount: "$49.99" },
    { date: "April 15, 2024", desc: "Pro Plan Subscription", amount: "$49.99" },
    { date: "March 15, 2024", desc: "Pro Plan Subscription", amount: "$49.99" },
  ];

  return (
    <section className="mx-auto max-w-5xl px-6 py-8 md:py-10">
      <h1 className="text-2xl font-bold">Billing</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Manage your current plan, usage, and billing history.
      </p>

      {/* Current Plan */}
      <div className="mt-8">
        <div className="text-sm font-semibold">Current Plan</div>
        <CardShell className="mt-3 grid grid-cols-1 items-center gap-6 p-5 sm:grid-cols-3">
          <div className="sm:col-span-2">
            <div className="text-sm font-semibold">Pro Plan</div>
            <p className="mt-1 text-sm text-muted-foreground">
              Manage your current plan, usage, and billing history.
            </p>
            <div className="mt-3">
              <button
                type="button"
                className="rounded-lg border border-primary/30 bg-primary/15 px-3 py-2 text-xs font-medium text-primary hover:bg-primary/20"
              >
                Manage Plan
              </button>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border/60">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1610963239440-9215391fdcfd?q=80&w=1200&auto=format&fit=crop"
              alt="Plan artwork"
              className="h-28 w-full object-cover"
            />
          </div>
        </CardShell>
      </div>

      {/* Usage */}
      <div className="mt-8">
        <div className="text-sm font-semibold">Usage</div>
        <div className="mt-3">
          <div className="mb-2 flex items-center justify-between text-xs text-foreground/80">
            <span>Posts Used This Month</span>
            <span>{pct}%</span>
          </div>
          <div className="h-2 rounded-full bg-muted">
            <div
              className="h-2 rounded-full bg-foreground/70"
              style={{ width: `${pct}%` }}
            />
          </div>
          <div className="mt-2 text-xs text-muted-foreground">
            {usage.used} out of {usage.quota} posts
          </div>
        </div>
      </div>

      {/* Billing History */}
      <div className="mt-8">
        <div className="text-sm font-semibold">Billing History</div>
        <CardShell className="mt-3 overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-12 bg-muted/50 px-5 py-3 text-sm font-medium text-foreground/80">
            <div className="col-span-3">Date</div>
            <div className="col-span-5">Description</div>
            <div className="col-span-2">Amount</div>
            <div className="col-span-2 text-right">Status</div>
          </div>

          {/* Rows */}
          <ul className="divide-y divide-border/60">
            {rows.map((r, i) => (
              <li
                key={`${r.date}-${i}`}
                className="grid grid-cols-12 items-center bg-card/60 px-5 py-4"
              >
                <div className="col-span-3 text-sm text-foreground/90">{r.date}</div>
                <div className="col-span-5 text-sm text-foreground/90">{r.desc}</div>
                <div className="col-span-2 text-sm text-foreground/90">{r.amount}</div>
                <div className="col-span-2 flex justify-end">
                  <BadgePaid />
                </div>
              </li>
            ))}
          </ul>
        </CardShell>
      </div>
    </section>
  );
}
