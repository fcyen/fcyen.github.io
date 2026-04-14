import Image from "next/image";

import { BentoCard } from "../BentoCard";
import heroPortrait from "@/images/my-avatar.jpg";

//
// 👉 To edit the welcome card content:
//    - Change the name in the <h1> below.
//    - Change the tagline in the <p> below.
//    - Swap the avatar by replacing `src/images/my-avatar.jpg`
//      or updating the import above to point at a different file.
//

export function WelcomeWidget() {
  return (
    <BentoCard className="md:col-span-2 lg:col-span-2 lg:row-span-2">
      <div className="flex h-full flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div className="flex-1">
          <p className="font-display text-sm uppercase tracking-widest text-bento-magenta">
            Welcome
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold text-bento-ink sm:text-5xl">
            Hi, I'm <span className="text-bento-magenta">Ching Yen</span>
          </h1>
          <p className="mt-4 max-w-md text-base leading-7 text-bento-ink/80">
            I'm a software engineer who brings a unique blend of technical
            expertise and creative sensibility to my work
          </p>
        </div>

        <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl border border-bento-coral/60 sm:h-36 sm:w-36">
          <Image
            src={heroPortrait}
            alt="Portrait of Ching Yen"
            fill
            className="object-cover"
            sizes="144px"
            priority
          />
        </div>
      </div>
    </BentoCard>
  );
}
