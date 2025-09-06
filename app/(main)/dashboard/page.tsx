"use client";
import { useUser } from "@clerk/nextjs";
import { motion } from "framer-motion";
import { Facebook, Instagram, Youtube } from "lucide-react";

// export const metadata: Metadata = {
//   title: "Dashboard • Brandflow",
// };


const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};
const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

type UpcomingPost = {
  id: string;
  platform: "instagram" | "facebook" | "youtube";
  title: string;
  subtitle?: string;
  time: string;
  status: "Scheduled";
};

const KPIS = [
  { label: "Total Scheduled Posts", value: "120" },
  { label: "Upcoming Posts", value: "35" },
  { label: "Engagement Summary", value: "2,500" },
] as const;

const UPCOMING: UpcomingPost[] = [
  {
    id: "1",
    platform: "instagram",
    title: "Excited to share our new product launch!",
    subtitle: "Stay tuned for updates.",
    time: "July 20, 2024, 10:00 AM",
    status: "Scheduled",
  },
  {
    id: "2",
    platform: "facebook",
    title:
      "Check out our latest blog post on boosting your social media engagement.",
      time: "July 21, 2024, 2:00 PM",
      status: "Scheduled",
    },
    {
    id: "3",
    platform: "youtube",
    title:
      "Join our webinar on AI in social media marketing. Register now!",
    time: "July 22, 2024, 11:00 AM",
    status: "Scheduled",
  },
];

function CardShell(props: React.HTMLAttributes<HTMLDivElement>) {
  const { className = "", ...rest } = props;
  return (
    <div
      className={[
        "rounded-xl border bg-card/70 backdrop-blur shadow-sm",
        "border-border/60",
        className,
      ].join(" ")}
      {...rest}
    />
  );
}

function PillBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md bg-muted px-3 py-1 text-xs font-medium text-foreground/80 ring-1 ring-inset ring-border/60">
      {children}
    </span>
  );
}

function PlatformAvatar({ platform }: { platform: UpcomingPost["platform"] }) {
  const base =
  "inline-flex h-10 w-10 items-center justify-center rounded-full text-white shadow-inner";
  if (platform === "instagram")
    return (
      <span className={`${base} bg-gradient-to-tr from-pink-500 via-rose-500 to-amber-400`}>
        <Instagram className="h-5 w-5" />
      </span>
    );
  if (platform === "facebook")
    return (
      <span className={`${base} bg-[#1877F2]`}>
        <Facebook className="h-5 w-5" />
      </span>
    );
    return (
    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-200">
      <span className="relative inline-flex items-center justify-center">
        <span className="h-6 w-8 rounded-md bg-red-600" />
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-l-8 border-y-[6px] border-y-transparent border-l-white" />
      </span>
    </span>
  );
}

export default function DashboardPage() {
  const {  user } = useUser();
  console.log(useUser)

  return (
    <section className="mx-auto max-w-7xl px-6 py-10 md:py-12">
      {/* Header copy */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-2"
      >
        <motion.h1 variants={item as any} className="text-4xl font-extrabold leading-tight md:text-5xl">
          Welcome back, <span className="bg-gradient-to-r from-primary to-fuchsia-500 bg-clip-text text-transparent">{user?.firstName}</span>!
        </motion.h1>
        <motion.p variants={item as any} className="text-muted-foreground">
          Here’s a snapshot of current social performance and scheduled activity.
        </motion.p>
      </motion.div>

      {/* KPI cards */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {KPIS.map((k) => (
          <motion.div key={k.label} variants={item as any}>
            <CardShell className="p-5">
              <div className="text-sm font-medium text-foreground/80">{k.label}</div>
              <div className="mt-3 text-3xl font-semibold tracking-tight">{k.value}</div>
            </CardShell>
          </motion.div>
        ))}
      </motion.div>

      {/* Upcoming Posts */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold">Upcoming Posts</h2>
        <CardShell className="mt-4 overflow-hidden">
          {/* table header */}
          <div className="grid grid-cols-12 bg-muted/50 px-6 py-3 text-sm font-medium text-foreground/80">
            <div className="col-span-3">Platform</div>
            <div className="col-span-5">Content</div>
            <div className="col-span-3">Scheduled Time</div>
            <div className="col-span-1 text-right">Status</div>
          </div>

          {/* rows */}
          <ul className="divide-y divide-border/60">
            {UPCOMING.map((row) => (
              <li
                key={row.id}
                className="grid grid-cols-12 items-center bg-card/60 px-6 py-4"
              >
                <div className="col-span-3 flex items-center gap-3">
                  <PlatformAvatar platform={row.platform} />
                  <span className="hidden text-sm capitalize text-foreground/90 sm:inline">
                    {row.platform}
                  </span>
                </div>

                <div className="col-span-5">
                  <p className="text-sm font-medium text-foreground/90">{row.title}</p>
                  {row.subtitle ? (
                    <p className="text-sm text-muted-foreground">{row.subtitle}</p>
                  ) : null}
                </div>

                <div className="col-span-3 text-sm text-foreground/80">{row.time}</div>

                <div className="col-span-1 flex justify-end">
                  <PillBadge>{row.status}</PillBadge>
                </div>
              </li>
            ))}
          </ul>
        </CardShell>
      </div>
    </section>
  );
}

