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
  "I’m a software engineer who builds scalable frontends with users in mind. My goal is to design solutions that not only scale but meaningfully connect with the people who use them — using the path of least resistance to make it happen.";

const bio2 = 
  " When I'm not in front of my computer, I like being in the outdoors. I also love travelling and capturing the beauty of a place from the lens of the first time visitor."

  export function AboutMeWidget() {
  return (
    <BentoCard className="md:col-span-2 lg:col-span-2 lg:col-start-9 lg:row-span-2 lg:row-start-1">
      <p className="font-display text-sm uppercase tracking-widest text-bento-magenta">
        About me
      </p>
      <p className="mt-3 flex-1 text-base leading-5 text-bento-ink/80">
        {bio}
      </p>
      <p className="mt-3 flex-1 text-base leading-5 text-bento-ink/80">
        {bio2}
      </p>
      {/* <Link
        href="/about"
        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-bento-magenta transition hover:text-bento-ink"
      >
        Read more <span aria-hidden="true">→</span>
      </Link> */}
    </BentoCard>
  );
}
