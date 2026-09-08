export default function Loading() {
  return (
    <section className="flex min-h-[65vh] flex-col items-center justify-center gap-7 bg-primary-light/40 px-4 py-24 text-center">
      {/* branded spinner */}
      <div className="relative flex h-20 w-20 items-center justify-center">
        <span className="absolute inset-0 animate-spin rounded-full border-4 border-primary/15 border-t-primary [animation-duration:0.9s]" />
        <span className="font-heading text-[11px] font-extrabold uppercase tracking-[0.22em] text-primary">
          SMM
        </span>
      </div>

      <div>
        <p className="font-heading text-lg font-bold text-ink">
          Loading
          <span className="ml-0.5 inline-flex">
            <span className="animate-bounce [animation-delay:-0.3s]">.</span>
            <span className="animate-bounce [animation-delay:-0.15s]">.</span>
            <span className="animate-bounce">.</span>
          </span>
        </p>
        <p className="mt-1 text-sm text-muted">Getting things ready for you.</p>
      </div>
    </section>
  );
}
