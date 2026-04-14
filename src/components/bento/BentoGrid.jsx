import clsx from "clsx";

/**
 * Responsive bento-style grid container.
 *
 * - Mobile: single column
 * - Tablet (md): 2 columns
 * - Desktop (lg): 10-column grid, so widgets can express fractional widths
 *   like 4:1 (8 vs 2) and even halves (5 + 5).
 *
 * Individual cards opt into their size via className props like
 * `lg:col-span-8 lg:col-span-2` on <BentoCard>.
 */
export function BentoGrid({ className, children }) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:py-14 lg:py-20">
      <div
        className={clsx(
          "grid auto-rows-[minmax(12rem,auto)] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-10",
          className
        )}
      >
        {children}
      </div>
    </section>
  );
}

