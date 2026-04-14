import Link from "next/link";

/**
 * Shared body for the "Design Works" bento cards.
 * Used by both ProfessionalExperienceWidget and PersonalProjectsWidget.
 *
 * Props:
 *   - title: string shown at the top of the card
 *   - items: Array<{ title, company, year, href? }>
 */
export function WorksList({ title, items }) {
  return (
    <>
      <h2 className="font-display text-lg font-semibold text-bento-ink">
        {title}
      </h2>

      <ul className="mt-4 flex flex-1 flex-col divide-y divide-bento-coral/40">
        {items.map((item, i) => {
          const row = (
            <div className="flex items-baseline justify-between gap-3 py-3">
              <div className="min-w-0">
                <p className="truncate font-medium text-bento-ink">
                  {item.title}
                </p>
                <p className="truncate text-sm text-bento-ink/70">
                  {item.company}
                </p>
              </div>
              <span className="shrink-0 text-sm text-bento-magenta">
                {item.year}
              </span>
            </div>
          );

          return (
            <li key={`${item.title}-${i}`}>
              {item.href ? (
                <Link
                  href={item.href}
                  className="block rounded-md transition hover:bg-bento-coral/10"
                >
                  {row}
                </Link>
              ) : (
                row
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}
