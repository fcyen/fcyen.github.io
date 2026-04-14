import clsx from "clsx";

/**
 * Responsive bento-style grid container.
 *
 * - Mobile: single column
 * - Tablet (md): 2 columns
 * - Desktop (lg): 4 columns
 *
 * Individual cards opt into larger cells via className props like
 * `col-span-2 row-span-2` on <BentoCard>.
 */
export function BentoGrid({ className, children }) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:py-14 lg:py-20">
      <div
        className={clsx(
          "grid auto-rows-[minmax(12rem,auto)] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4",
          className
        )}
      >
        {children}
      </div>
    </section>
  );
}
