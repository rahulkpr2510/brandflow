"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  PlayCircle,
  ShieldCheck,
  Gauge,
  Users,
  BarChart3,
  Zap,
  CalendarClock,
  Wand2,
  Stars,
  Rocket,
  MessageSquare,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import { FEATURES, TESTIMONIALS } from "@/lib/data";
import GlowBlob from "@/components/GlowBlob";
import TiltCard from "@/components/TiltCard";
import Pill from "@/components/Pill";
import GlassStat from "@/components/GlassStat";
import BadgeTitle from "@/components/BadgeTitle";
import Li from "@/components/Li";
import LiCheck from "@/components/LiCheck";
import DemoStep from "@/components/DemoStep";
import PriceCard from "@/components/PriceCard";
import FaqItem from "@/components/FaqItem";
import LogoPill from "@/components/LogoPill";
import Marquee from "@/components/Marquee";
import PricingSlider from "@/components/PricingSlider";
import FloatingCTA from "@/components/FloatingCTA";
import { useParallax } from "@/hooks/useParallax";
import Header from "@/components/header";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function LandingPage() {
  const y = useParallax(0.12);

  // Keyboard shortcut G scrolls to #get-started
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key.toLowerCase() === "g") {
        const el = document.querySelector("#get-started");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      {/* Floating CTA */}
      <FloatingCTA />
      <Header />
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Gradient auras */}
        <GlowBlob className="top-[-200px] left-[-100px] h-[440px] w-[440px] bg-primary/30" />
        <GlowBlob className="bottom-[-200px] right-[-120px] h-[520px] w-[520px] bg-purple-500/30" />

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="space-y-6"
            >
              <motion.div variants={item}>
                <Pill>AI for high-velocity brand teams</Pill>
              </motion.div>
              <motion.h1
                variants={item}
                className="text-5xl font-extrabold leading-[1.1] md:text-6xl"
              >
                Create, orchestrate & scale{" "}
                <span className="bg-gradient-to-r from-primary to-fuchsia-500 bg-clip-text text-transparent">
                  on-brand content
                </span>{" "}
                at lightspeed.
              </motion.h1>
              <motion.p
                variants={item}
                className="max-w-xl text-lg text-muted-foreground"
              >
                BrandFlow is your AI-powered content studio: ideate, design,
                approve, schedule, and learn — all in one seamless flow.
              </motion.p>
              <motion.div variants={item} className="flex gap-3 pt-2">
                <Button size="lg" asChild>
                  <a href="#get-started">
                    Try it free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#demo">
                    Watch demo
                    <PlayCircle className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
              <motion.div className="flex items-center gap-4 pt-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  SSO & GDPR-ready
                </div>
                <div className="flex items-center gap-1">
                  <Gauge className="h-4 w-4 text-primary" />
                  2.4× avg. engagement lift
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Parallax visual */}
          <div className="relative">
            <motion.div style={{ y }} className="relative">
              <TiltCard className="rounded-2xl border bg-card/70 p-4 shadow-2xl backdrop-blur">
                <div className="grid gap-4 sm:grid-cols-2">
                  <GlassStat
                    icon={Zap}
                    label="Posts generated"
                    value="18,420"
                  />
                  <GlassStat icon={Users} label="Collaborators" value="128" />
                  <GlassStat
                    icon={BarChart3}
                    label="Engagement ↑"
                    value="+142%"
                  />
                  <GlassStat icon={CalendarClock} label="Queued" value="312" />
                </div>

                <div className="mt-6 rounded-xl border bg-background p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span className="text-sm text-muted-foreground">
                        Live preview
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      @brandflow • draft
                    </span>
                  </div>
                  <div className="rounded-lg bg-muted p-6">
                    <div className="mb-2 text-sm text-muted-foreground">
                      AI caption
                    </div>
                    <div className="text-sm">
                      “Launching our new template gallery ✨ Generate, remix,
                      and schedule — all in one flow.”
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MARQUEE SOCIAL PROOF */}
      <Marquee className="border-y bg-muted/40 py-3 text-xs text-muted-foreground">
        <LogoPill>Driftwear</LogoPill>
        <LogoPill>Finlytics</LogoPill>
        <LogoPill>NovaCreative</LogoPill>
        <LogoPill>AirBits</LogoPill>
        <LogoPill>Studio K</LogoPill>
        <LogoPill>Loop Labs</LogoPill>
        <LogoPill>Omniflow</LogoPill>
      </Marquee>

      {/* PROBLEM → SOLUTION */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2">
        <div>
          <BadgeTitle icon={Stars} label="The old way is broken" />
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Too many tools. Too much chaos. Not enough flow.
          </h2>
          <ul className="mt-6 space-y-3 text-muted-foreground">
            <Li>Brief → Copy → Design → Review across 6 tabs and 4 tools</Li>
            <Li>Endless approvals and no single source of truth</Li>
            <Li>Analytics siloed, no feedback into creation</Li>
          </ul>
        </div>
        <div>
          <BadgeTitle icon={Rocket} label="The BrandFlow way" />
          <h3 className="mt-3 text-2xl font-semibold">
            One canvas. One AI. One flow.
          </h3>
          <ul className="mt-6 space-y-3">
            <LiCheck>Generate on-brand content + visuals instantly</LiCheck>
            <LiCheck>Real-time collaboration & approvals</LiCheck>
            <LiCheck>Closed-loop learning from performance data</LiCheck>
          </ul>
          <div className="mt-6">
            <Button asChild>
              <a href="#demo">See the loop in action</a>
            </Button>
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section id="features" className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <BadgeTitle icon={Wand2} label="Features" />
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Everything you need to move at creative warp speed
            </h2>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {FEATURES.map((f, i) => (
              <motion.div key={i} variants={item}>
                <TiltCard className="h-full">
                  <div className="h-full border bg-card/80 shadow-md backdrop-blur transition hover:shadow-xl">
                    <div className="p-6">
                      <f.icon className="h-6 w-6 text-primary" />
                      <h3 className="mt-3 text-lg font-semibold">{f.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {f.desc}
                      </p>
                      <a
                        href="#"
                        className="mt-4 inline-flex items-center text-sm text-primary hover:underline"
                      >
                        Learn more <ChevronRight className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DEMO REEL */}
      <section id="demo" className="relative overflow-hidden py-24">
        <GlowBlob className="left-[-180px] top-[-120px] h-[420px] w-[420px] bg-primary/25" />
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <BadgeTitle icon={PlayCircle} label="Live demo" />
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              From idea → post → insights in one continuous motion
            </h2>
            <p className="mt-3 text-muted-foreground">
              Watch the loop: generate concepts, design variations, schedule,
              and learn from results.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            <DemoStep
              step="1"
              title="Brief the AI"
              desc="Describe a goal and tone. BrandFlow drafts captions and visuals."
            />
            <DemoStep
              step="2"
              title="Remix & approve"
              desc="Remix variations, apply brand kit, and route to approvers."
            />
            <DemoStep
              step="3"
              title="Schedule & learn"
              desc="Auto-post at peak times and feed results back into the model."
            />
          </div>
        </div>
      </section>

      {/* PRICING – DYNAMIC SLIDER */}
      <section id="pricing" className="border-y bg-muted/30 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <BadgeTitle icon={Gauge} label="Pricing" />
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Simple, credit-based pricing that scales with you
            </h2>
          </div>
          <div className="mx-auto mt-10 max-w-3xl">
            <PricingSlider />
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
            <PriceCard
              plan="Starter"
              price="$0"
              tagline="For individuals testing the waters"
              features={[
                "100 credits / mo",
                "1 workspace",
                "Basic templates",
                "Community support",
              ]}
              cta="Start free"
              highlight={false}
            />
            <PriceCard
              plan="Growth"
              price="$29"
              tagline="For teams shipping weekly"
              features={[
                "1,000 credits / mo",
                "Unlimited projects",
                "Brand kits & approvals",
                "Priority support",
              ]}
              cta="Choose Growth"
              highlight
            />
            <PriceCard
              plan="Enterprise"
              price="Custom"
              tagline="For orgs at scale"
              features={[
                "Unlimited credits",
                "SSO & audit logs",
                "Custom fine-tuning",
                "Dedicated CSM",
              ]}
              cta="Talk to sales"
              highlight={false}
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <BadgeTitle icon={Users} label="What teams say" />
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              “Feels like a full creative team in one tool.”
            </h2>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3"
          >
            {TESTIMONIALS.map((t, i) => (
              <motion.div key={i} variants={item}>
                <div className="border bg-card/70 shadow-sm backdrop-blur transition hover:shadow-lg rounded-xl p-6">
                  <p className="text-sm italic leading-relaxed">“{t.quote}”</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
                      {t.initial}
                    </div>
                    <div className="text-sm">
                      <div className="font-medium">{t.name}</div>
                      <div className="text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-muted/40 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <BadgeTitle icon={MessageSquare} label="FAQ" />
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Answers to common questions
            </h2>
          </div>

          <div className="mx-auto mt-10 max-w-3xl space-y-3">
            <FaqItem q="How do credits work?">
              Every AI action—like generating captions, carousel variations, or
              long-form rewrites— uses a credit. Unused credits roll over for 30
              days, so your balance is never wasted.
            </FaqItem>

            <FaqItem q="Can BrandFlow match our brand voice?">
              Yes. Upload brand guidelines, past campaigns, or even sample
              posts, and BrandFlow instantly adapts tone, style, and
              vocabulary—so every output feels 100% you.
            </FaqItem>

            <FaqItem q="Do you support team collaboration and approvals?">
              Absolutely. Assign roles, set up approval gates, and comment in
              real time on drafts— replacing endless email chains with a single
              streamlined flow.
            </FaqItem>

            <FaqItem q="Which platforms does BrandFlow integrate with?">
              We connect natively with Instagram, LinkedIn, X (Twitter),
              Facebook, and TikTok. More channels (like YouTube Shorts &
              Pinterest) are coming soon.
            </FaqItem>

            <FaqItem q="Is our data secure?">
              Yes. All content is encrypted at rest and in transit. Enterprise
              plans add SSO, audit logs, and region-specific data residency for
              full compliance peace of mind.
            </FaqItem>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="get-started" className="relative overflow-hidden py-28">
        <GlowBlob className="right-[-160px] top-[-80px] h-[380px] w-[380px] bg-fuchsia-500/30" />
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-4xl font-extrabold md:text-5xl">
            Ready to build unforgettable brands?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Join creators, teams, and enterprises shipping content at the speed
            of thought.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" className="px-8" asChild>
              <a href="/sign-up">Start free</a>
            </Button>
            <Button size="lg" variant="outline" className="px-8" asChild>
              <a href="/contact">Talk to sales</a>
            </Button>
          </div>
          <div className="mt-6 text-xs text-muted-foreground">
            Press <kbd className="rounded border px-1.5 py-0.5">G</kbd> to get
            started anywhere on the page
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t bg-background py-10 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} BrandFlow — Built for modern brand teams.
      </footer>
    </div>
  );
}
