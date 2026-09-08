"use client";

import { useEffect } from "react";
import { House, RotateCw, TriangleAlert } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-primary-light/40 px-4 py-24 text-center">
      <span className="btn-gradient flex h-20 w-20 items-center justify-center rounded-2xl text-white shadow-card">
        <TriangleAlert className="h-9 w-9" />
      </span>

      <h1 className="mt-7 font-heading text-2xl font-extrabold text-ink sm:text-3xl">
        Something went wrong
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
        An unexpected error stopped this page from loading. You can try again, or
        head back to the homepage.
      </p>

      {error?.digest && (
        <p className="mt-4 rounded-md bg-white px-3 py-1 font-mono text-xs text-muted ring-1 ring-black/5">
          Error ID: {error.digest}
        </p>
      )}

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Button onClick={reset} className="gap-2">
          <RotateCw className="h-4 w-4" />
          Try again
        </Button>
        <Button variant="outline" href="/" className="gap-2">
          <House className="h-4 w-4" />
          Back to home
        </Button>
      </div>
    </section>
  );
}
