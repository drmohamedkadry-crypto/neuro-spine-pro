"use client";

import { useState } from "react";

type Swatch = { label: string; var: string; hex?: string };

function SwatchGrid({ title, swatches }: { title: string; swatches: Swatch[] }) {
  return (
    <section className="mb-12">
      <h2 className="text-xs font-semibold tracking-[0.08em] uppercase text-[var(--color-text-secondary)] mb-4">
        {title}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {swatches.map((s) => (
          <div key={s.label} className="flex flex-col gap-1.5">
            <div
              className="h-14 w-full rounded-lg border border-[var(--color-border-default)]"
              style={{ background: `var(${s.var})` }}
            />
            <span className="text-[11px] font-medium text-[var(--color-text-primary)] leading-tight truncate">
              {s.label}
            </span>
            <span className="text-[10px] text-[var(--color-text-secondary)] font-mono truncate">
              {s.var}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function FontRow({
  label,
  cssVar,
  sample,
  dir,
}: {
  label: string;
  cssVar: string;
  sample: string;
  dir?: "rtl" | "ltr";
}) {
  return (
    <div className="py-4 border-b border-[var(--color-border-default)] last:border-0">
      <span className="text-[11px] font-mono text-[var(--color-text-secondary)] block mb-1">
        {cssVar}
      </span>
      <p
        dir={dir}
        className="text-2xl text-[var(--color-text-primary)]"
        style={{ fontFamily: `var(${cssVar})` }}
      >
        {sample}
      </p>
      <span className="text-xs text-[var(--color-text-tertiary)]">{label}</span>
    </div>
  );
}

const navySwatches: Swatch[] = [
  { label: "navy-950", var: "--color-navy-950" },
  { label: "navy-900", var: "--color-navy-900" },
  { label: "navy-800", var: "--color-navy-800" },
  { label: "navy-700", var: "--color-navy-700" },
  { label: "navy-600", var: "--color-navy-600" },
  { label: "navy-500", var: "--color-navy-500" },
  { label: "navy-400", var: "--color-navy-400" },
  { label: "navy-300", var: "--color-navy-300" },
  { label: "navy-200", var: "--color-navy-200" },
  { label: "navy-100", var: "--color-navy-100" },
  { label: "navy-50", var: "--color-navy-50" },
];

const tealSwatches: Swatch[] = [
  { label: "teal-600", var: "--color-teal-600" },
  { label: "teal-500", var: "--color-teal-500" },
  { label: "teal-400", var: "--color-teal-400" },
  { label: "teal-300", var: "--color-teal-300" },
  { label: "teal-200", var: "--color-teal-200" },
  { label: "teal-100", var: "--color-teal-100" },
  { label: "teal-50", var: "--color-teal-50" },
];

const cyanSwatches: Swatch[] = [
  { label: "cyan-500 (glow)", var: "--color-cyan-500" },
  { label: "cyan-400 (glow)", var: "--color-cyan-400" },
  { label: "cyan-glow (alpha)", var: "--color-cyan-glow" },
];

const neutralSwatches: Swatch[] = [
  { label: "neutral-950", var: "--color-neutral-950" },
  { label: "neutral-900", var: "--color-neutral-900" },
  { label: "neutral-800", var: "--color-neutral-800" },
  { label: "neutral-700", var: "--color-neutral-700" },
  { label: "neutral-600", var: "--color-neutral-600" },
  { label: "neutral-500", var: "--color-neutral-500" },
  { label: "neutral-400", var: "--color-neutral-400" },
  { label: "neutral-300", var: "--color-neutral-300" },
  { label: "neutral-200", var: "--color-neutral-200" },
  { label: "neutral-100", var: "--color-neutral-100" },
  { label: "neutral-50", var: "--color-neutral-50" },
  { label: "neutral-0", var: "--color-neutral-0" },
];

const semanticSwatches: Swatch[] = [
  { label: "bg-primary", var: "--color-bg-primary" },
  { label: "bg-surface", var: "--color-bg-surface" },
  { label: "bg-subtle", var: "--color-bg-subtle" },
  { label: "bg-brand", var: "--color-bg-brand" },
  { label: "bg-accent", var: "--color-bg-accent" },
  { label: "text-primary", var: "--color-text-primary" },
  { label: "text-secondary", var: "--color-text-secondary" },
  { label: "text-tertiary", var: "--color-text-tertiary" },
  { label: "text-inverse", var: "--color-text-inverse" },
  { label: "text-accent", var: "--color-text-accent" },
  { label: "border-default", var: "--color-border-default" },
  { label: "border-strong", var: "--color-border-strong" },
  { label: "border-focus", var: "--color-border-focus" },
  { label: "success", var: "--color-success" },
  { label: "warning", var: "--color-warning" },
  { label: "error", var: "--color-error" },
];

export default function TestTokensPage() {
  const [dark, setDark] = useState(false);

  return (
    <div data-theme={dark ? "dark" : undefined} style={{ minHeight: "100vh", background: "var(--color-bg-primary)" }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">

        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1
              className="text-3xl text-[var(--color-text-primary)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Midnight Glow — Token Reference
            </h1>
            <p className="text-sm text-[var(--color-text-secondary)] mt-1">
              All design tokens from{" "}
              <code className="font-mono text-[var(--color-text-accent)]">
                .design/public-funnel/tokens.css
              </code>
            </p>
          </div>
          <button
            onClick={() => setDark((d) => !d)}
            className="px-4 py-2 rounded-lg text-sm font-semibold border border-[var(--color-border-strong)] text-[var(--color-text-primary)] bg-[var(--color-bg-surface)] transition-colors"
            style={{ transitionDuration: "var(--duration-normal)" }}
          >
            {dark ? "☀ Light mode" : "☾ Dark mode"}
          </button>
        </div>

        {/* Color palettes */}
        <SwatchGrid title="Navy — Primary Dark" swatches={navySwatches} />
        <SwatchGrid title="Teal — CTA / Interactive" swatches={tealSwatches} />
        <SwatchGrid title="Cyan — Hero Atmospheric (use sparingly)" swatches={cyanSwatches} />
        <SwatchGrid title="Neutral — Surface / Text" swatches={neutralSwatches} />
        <SwatchGrid title="Semantic Tokens — adapts in dark mode" swatches={semanticSwatches} />

        {/* Glow demo */}
        <section className="mb-12">
          <h2 className="text-xs font-semibold tracking-[0.08em] uppercase text-[var(--color-text-secondary)] mb-4">
            Atmospheric Glow Panel (hero use only)
          </h2>
          <div
            className="rounded-xl p-8 flex items-center justify-center"
            style={{
              background: "var(--color-navy-900)",
              boxShadow: "var(--shadow-glow)",
            }}
          >
            <p
              className="text-2xl text-white"
              style={{ fontFamily: "var(--font-display)", textShadow: "0 0 40px var(--color-cyan-500)" }}
            >
              Strategic Content System
            </p>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-12">
          <h2 className="text-xs font-semibold tracking-[0.08em] uppercase text-[var(--color-text-secondary)] mb-4">
            Typography
          </h2>
          <div
            className="rounded-xl border border-[var(--color-border-default)] divide-y divide-[var(--color-border-default)] px-6"
            style={{ background: "var(--color-bg-surface)" }}
          >
            <FontRow
              label="Instrument Serif — display headings"
              cssVar="--font-display"
              sample="Strategic Content System"
            />
            <FontRow
              label="Inter — body English (400 / 600)"
              cssVar="--font-body"
              sample="Consistent content for growing businesses."
            />
            <FontRow
              label="IBM Plex Sans Arabic — body Arabic (400 / 600)"
              cssVar="--font-arabic"
              sample="نظام المحتوى الاستراتيجي للشركات الصغيرة والمتوسطة"
              dir="rtl"
            />
          </div>
        </section>

        {/* Spacing */}
        <section className="mb-12">
          <h2 className="text-xs font-semibold tracking-[0.08em] uppercase text-[var(--color-text-secondary)] mb-4">
            Spacing Scale (4-pt grid)
          </h2>
          <div className="flex flex-col gap-2">
            {[1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32].map((n) => (
              <div key={n} className="flex items-center gap-4">
                <span className="text-[11px] font-mono w-16 text-[var(--color-text-secondary)]">
                  --space-{n}
                </span>
                <div
                  className="rounded bg-[var(--color-teal-400)] h-4"
                  style={{ width: `var(--space-${n})` }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Shadows */}
        <section className="mb-12">
          <h2 className="text-xs font-semibold tracking-[0.08em] uppercase text-[var(--color-text-secondary)] mb-4">
            Shadows
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {(["sm", "md", "lg", "xl", "glow"] as const).map((size) => (
              <div key={size} className="flex flex-col gap-2 items-center">
                <div
                  className="w-full h-16 rounded-lg"
                  style={{
                    background: "var(--color-bg-surface)",
                    boxShadow: `var(--shadow-${size})`,
                  }}
                />
                <span className="text-[11px] font-mono text-[var(--color-text-secondary)]">
                  --shadow-{size}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Radius */}
        <section className="mb-12">
          <h2 className="text-xs font-semibold tracking-[0.08em] uppercase text-[var(--color-text-secondary)] mb-4">
            Border Radius
          </h2>
          <div className="flex flex-wrap gap-6">
            {(["sm", "md", "lg", "xl", "full"] as const).map((r) => (
              <div key={r} className="flex flex-col gap-2 items-center">
                <div
                  className="w-16 h-16 bg-[var(--color-navy-200)]"
                  style={{ borderRadius: `var(--radius-${r})` }}
                />
                <span className="text-[11px] font-mono text-[var(--color-text-secondary)]">
                  {r}
                </span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
