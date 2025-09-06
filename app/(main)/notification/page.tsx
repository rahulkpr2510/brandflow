"use client";

import { CheckCircle2 } from "lucide-react";

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

type Notice = {
  id: string;
  title: string;
  desc: string;
};

function NoticeItem({ n }: { n: Notice }) {
  return (
    <div className="flex items-start gap-4 rounded-xl px-3 py-3 hover:bg-muted/40">
      <div className="grid h-10 w-10 place-content-center rounded-lg border border-border/60 bg-muted">
        <CheckCircle2 className="h-5 w-5 text-emerald-400" />
      </div>
      <div>
        <div className="text-sm font-semibold">{n.title}</div>
        <div className="text-sm text-muted-foreground">{n.desc}</div>
      </div>
    </div>
  );
}

export default function NotificationsPage() {
  const today: Notice[] = [
    {
      id: "t1",
      title: "Post Published",
      desc:
        "Your post ‘7 Tips for Effective Social Media Marketing’ has been successfully published on Instagram.",
    },
    {
      id: "t2",
      title: "Post Published",
      desc:
        "Your post ‘7 Tips for Effective Social Media Marketing’ has been successfully published on Facebook.",
    },
    {
      id: "t3",
      title: "Post Published",
      desc:
        "Your post ‘7 Tips for Effective Social Media Marketing’ has been successfully published on LinkedIn.",
    },
    {
      id: "t4",
      title: "Post Published",
      desc:
        "Your post ‘7 Tips for Effective Social Media Marketing’ has been successfully published on X.",
    },
  ];

  const yesterday: Notice[] = [
    {
      id: "y1",
      title: "Post Approved",
      desc:
        "Your post ‘7 Tips for Effective Social Media Marketing’ has been approved and scheduled for publishing.",
    },
    {
      id: "y2",
      title: "Post Approved",
      desc:
        "Your post ‘7 Tips for Effective Social Media Marketing’ has been approved and scheduled for publishing.",
    },
    {
      id: "y3",
      title: "Post Approved",
      desc:
        "Your post ‘7 Tips for Effective Social Media Marketing’ has been approved and scheduled for publishing.",
    },
    {
      id: "y4",
      title: "Post Approved",
      desc:
        "Your post ‘7 Tips for Effective Social Media Marketing’ has been approved and scheduled for publishing.",
    },
  ];

  const lastWeek: Notice[] = [
    {
      id: "w1",
      title: "Payment Confirmation",
      desc:
        "Your subscription payment of $49.99 has been successfully processed.",
    },
  ];

  return (
    <section className="mx-auto max-w-5xl px-6 py-8 md:py-10">
      <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>

      <div className="mt-8 space-y-10">
        {/* Today */}
        <div>
          <div className="mb-3 text-sm font-semibold">Today</div>
          <CardShell>
            <ul className="divide-y divide-border/60">
              {today.map((n) => (
                <li key={n.id}>
                  <NoticeItem n={n} />
                </li>
              ))}
            </ul>
          </CardShell>
        </div>

        {/* Yesterday */}
        <div>
          <div className="mb-3 text-sm font-semibold">Yesterday</div>
          <CardShell>
            <ul className="divide-y divide-border/60">
              {yesterday.map((n) => (
                <li key={n.id}>
                  <NoticeItem n={n} />
                </li>
              ))}
            </ul>
          </CardShell>
        </div>

        {/* Last Week */}
        <div>
          <div className="mb-3 text-sm font-semibold">Last Week</div>
          <CardShell>
            <ul className="divide-y divide-border/60">
              {lastWeek.map((n) => (
                <li key={n.id}>
                  <NoticeItem n={n} />
                </li>
              ))}
            </ul>
          </CardShell>
        </div>
      </div>
    </section>
  );
}
