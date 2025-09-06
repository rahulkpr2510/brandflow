"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ImageIcon, Wand2, Hash, Calendar, Clock, Upload } from "lucide-react";

type Brand = "Tech Solutions Inc." | "EcoLiving" | "FashionForward" | "FitLife Studio";

const BRANDS: Brand[] = [
  "Tech Solutions Inc.",
  "EcoLiving",
  "FashionForward",
  "FitLife Studio",
];

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

function FieldLabel({
  step,
  children,
}: {
  step?: number;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-2 flex items-center gap-2">
      {typeof step === "number" ? (
        <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-muted text-[11px] font-semibold text-foreground/80 ring-1 ring-border/60">
          {step}
        </span>
      ) : null}
      <div className="text-sm font-semibold">{children}</div>
    </div>
  );
}

function SoftButton({
  children,
  icon: Icon,
  onClick,
}: {
  children: React.ReactNode;
  icon?: any;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/15 px-3 py-2 text-xs font-medium text-primary hover:bg-primary/20"
      type="button"
    >
      {Icon ? <Icon className="h-4 w-4" /> : null}
      {children}
    </button>
  );
}

export default function NewPostPage() {
  const [brand, setBrand] = useState<Brand | null>(BRANDS);
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [platforms, setPlatforms] = useState({
    instagram: false,
    facebook: false,
    linkedin: false,
    x: false,
  });
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [hashtagQuery, setHashtagQuery] = useState("");

  const suggested = ["#tech", "#innovation", "#future", "#gadget", "#techlife"];

  return (
    <section className="mx-auto max-w-5xl px-6 py-8 md:py-10">
      <div className="mb-6 text-sm text-muted-foreground">Content / New Post</div>
      <h1 className="text-2xl font-bold">Create a new post</h1>

      <div className="mt-8 space-y-8">
        {/* 1. Select a brand */}
        <div>
          <FieldLabel step={1}>Select a brand</FieldLabel>
          <div className="flex flex-wrap gap-2">
            {BRANDS.map((b) => {
              const active = brand === b;
              return (
                <button
                  key={b}
                  onClick={() => setBrand(b)}
                  className={[
                    "rounded-md px-3 py-1.5 text-sm ring-1 ring-inset",
                    active
                      ? "bg-primary/15 text-primary ring-primary/30"
                      : "bg-muted text-foreground/80 ring-border/60 hover:bg-muted/60",
                  ].join(" ")}
                >
                  {b}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Generate caption */}
        <div>
          <FieldLabel step={2}>Generate caption</FieldLabel>
          <CardShell className="p-0">
            <textarea
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              rows={5}
              placeholder="Write or generate a caption..."
              className="w-full resize-none rounded-xl bg-transparent p-4 outline-none placeholder:text-muted-foreground"
            />
          </CardShell>
          <div className="mt-3">
            <SoftButton icon={Wand2}>Generate with AI</SoftButton>
          </div>
        </div>

        {/* 3. Generate image */}
        <div>
          <FieldLabel step={3}>Generate image</FieldLabel>
          <CardShell className="p-0">
            <div className="grid min-h-[140px] place-content-center rounded-xl">
              {image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={image}
                  alt="Generated"
                  className="h-48 w-full rounded-xl object-cover"
                />
              ) : (
                <div className="flex flex-col items-center gap-2 py-10 text-muted-foreground">
                  <ImageIcon className="h-6 w-6" />
                  <div className="text-sm">No image yet</div>
                </div>
              )}
            </div>
          </CardShell>
          <div className="mt-3 flex gap-2">
            <SoftButton icon={Wand2}>Generate with AI</SoftButton>
            <label className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-border/60 bg-muted px-3 py-2 text-xs font-medium hover:bg-muted/60">
              <Upload className="h-4 w-4" />
              Upload
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const f = e.target.files;
              
                
                  if (f) {
                    const url = URL.createObjectURL(f);
                    setImage(url);
                  }
              
              
                }}
              />
            </label>
          </div>
        </div>

        {/* 4. Select platforms */}
        <div>
          <FieldLabel step={4}>Select platforms</FieldLabel>
          <div className="space-y-2">
            {[
              ["instagram", "Instagram"],
              ["facebook", "Facebook"],
              ["linkedin", "LinkedIn"],
              ["x", "X"],
            ].map(([key, label]) => {
              const k = key as keyof typeof platforms;
              return (
                <label key={key} className="flex items-center gap-3 text-sm">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-border/60 bg-background text-primary focus:ring-0"
                    checked={platforms[k]}
                    onChange={(e) =>
                      setPlatforms((p) => ({ ...p, [k]: e.target.checked }))
                    }
                  />
                  {label}
                </label>
              );
            })}
          </div>
        </div>

        {/* 5. Preview */}
        <div>
          <FieldLabel step={5}>Preview</FieldLabel>
          <div className="grid gap-6 md:grid-cols-2">
            <CardShell className="overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={
                  image ??
                  "https://images.unsplash.com/photo-1592840496694-26d035b62f74?q=80&w=1200&auto=format&fit=crop"
                }
                alt="Preview"
                className="h-64 w-full object-cover"
              />
            </CardShell>
            <div className="text-sm text-muted-foreground">
              <div className="font-semibold text-foreground/90">Post Preview</div>
              Your post will look like this on selected platforms. This is a preview of your post.
            </div>
          </div>
        </div>

        {/* 6. Schedule */}
        <div>
          <FieldLabel step={6}>Schedule</FieldLabel>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
              </span>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full rounded-lg border border-border/60 bg-muted px-9 py-2 text-sm outline-none placeholder:text-muted-foreground"
                placeholder="Select date"
              />
            </div>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                <Clock className="h-4 w-4" />
              </span>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full rounded-lg border border-border/60 bg-muted px-9 py-2 text-sm outline-none placeholder:text-muted-foreground"
                placeholder="Select time"
              />
            </div>
          </div>
        </div>

        {/* 7. Hashtag & emoji suggestions */}
        <div>
          <FieldLabel step={7}>Hashtag & emoji suggestions</FieldLabel>
          <div className="relative">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              <Hash className="h-4 w-4" />
            </span>
            <input
              value={hashtagQuery}
              onChange={(e) => setHashtagQuery(e.target.value)}
              placeholder="Search hashtags"
              className="w-full rounded-lg border border-border/60 bg-muted px-9 py-2 text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {suggested.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() =>
                  setCaption((c) =>
                    c.includes(tag) ? c : c.length ? `${c} ${tag}` : tag
                  )
                }
                className="rounded-md bg-muted px-2.5 py-1 text-xs text-foreground/90 ring-1 ring-border/60 hover:bg-muted/60"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex items-center justify-end">
          <button
            type="button"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow ring-1 ring-primary/40 hover:brightness-110"
          >
            Publish Post
          </button>
        </div>
      </div>
    </section>
  );
}
