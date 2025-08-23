export default function GlowBlob({
  className,
  blur = "blur-3xl",
}: {
  className?: string;
  blur?: string;
}) {
  return (
    <div
      className={[
        "pointer-events-none absolute rounded-full opacity-40",
        blur,
        className || "",
      ].join(" ")}
    />
  );
}
