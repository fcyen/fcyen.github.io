import clsx from "clsx";

/**
 * Generic bento card wrapper.
 *
 * Handles the rounded corners, border, padding, and a subtle hover lift.
 * Widgets pass their desired grid span via `className`, e.g.
 *   <BentoCard className="md:col-span-2 lg:row-span-2">...</BentoCard>
 */
export function BentoCard({ className, children }) {
  return (
    <div
      className={clsx(
        "relative flex flex-col overflow-hidden rounded-2xl border border-bento-coral/60 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
}
