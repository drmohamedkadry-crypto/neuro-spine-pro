export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-8">
      <div className="text-center space-y-4">
        <h1 className="font-[family-name:var(--font-display)] text-4xl text-[var(--color-text-primary)]">
          Mimo
        </h1>
        <p className="text-[var(--color-text-secondary)]">Strategic Content System</p>
        <a
          href="/test-tokens"
          className="inline-block mt-4 px-5 py-2.5 rounded-lg bg-[var(--color-bg-accent)] text-white text-sm font-semibold"
        >
          View token swatches →
        </a>
      </div>
    </main>
  );
}
