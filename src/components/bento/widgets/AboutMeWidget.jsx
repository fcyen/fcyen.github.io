import Link from "next/link";

import { BentoCard } from "../BentoCard";

//
// 👉 To fill in real content:
//    1. Edit the `bio` constant below — this is the short paragraph shown
//       on the homepage card.
//    2. The "Read more" link points to `/about`. Update the href if your
//       long-form about page lives somewhere else.
//
const bio =
  "Placeholder bio — replace this with a short paragraph about yourself, your background, and what you love to build. Aim for 2–3 sentences so it fits comfortably inside the card.";

export function AboutMeWidget() {
  return (
    <BentoCard className="md:col-span-2 lg:col-span-2">
      <p className="font-display text-sm uppercase tracking-widest text-bento-magenta">
        About me
      </p>
      <p className="mt-3 flex-1 text-base leading-7 text-bento-ink/80">
        {bio}
      </p>
      <Link
        href="/about"
        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-bento-magenta transition hover:text-bento-ink"
      >
        Read more <span aria-hidden="true">→</span>
      </Link>
    </BentoCard>
  );
}
