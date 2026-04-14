import Image from "next/image";
import Link from "next/link";

import { BentoCard } from "../BentoCard";
import {
  LinkedInIcon,
  GitHubIcon,
  EmailIcon,
} from "@/components/SocialIcons";
import heroPortrait from "@/images/my-avatar.jpg";

//
// 👉 To edit the welcome card content:
//    - Change the name in the <h1> below.
//    - Change the tagline in the <p> below.
//    - Swap the avatar by replacing `src/images/my-avatar.jpg`
//      or updating the import above to point at a different file.
//    - Update the social links in the `socials` array below.
//
const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/foo-ching-yen/",
    icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    href: "https://github.com/fcyen",
    icon: GitHubIcon,
  },
  {
    label: "Email",
    href: "mailto:foo.chingyen@gmail.com",
    icon: EmailIcon,
  },
];

function SocialButton({ href, label, icon: Icon }) {
  return (
    <Link
      href={href}
      aria-label={label}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-bento-coral/60 bg-white/60 text-bento-ink transition hover:-translate-y-0.5 hover:bg-bento-coral/20 hover:text-bento-magenta"
    >
      <Icon className="h-5 w-5" />
    </Link>
  );
}

export function WelcomeWidget() {
  return (
    <BentoCard className="md:col-span-2 lg:col-span-8">
      <div className="flex h-full flex-col gap-6 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center">
          <p className="font-display text-sm uppercase tracking-widest text-bento-magenta">
            Welcome
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold text-bento-ink sm:text-5xl">
            Hi, I'm <span className="text-bento-magenta">Ching Yen</span>
          </h1>
          <p className="mt-4 max-w-md text-base leading-7 text-bento-ink/80">
            If you'd like to know more about my work, you can find me at:
          </p>

          <div className="mt-4 flex items-center gap-3">
            {socials.map((s) => (
              <SocialButton key={s.label} {...s} />
            ))}
          </div>
        </div>

        <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-2xl sm:h-auto sm:w-48">
          <Image
            src={heroPortrait}
            alt="Portrait of Ching Yen"
            fill
            className="object-cover"
            sizes="192px"
            priority
          />
        </div>
      </div>
    </BentoCard>
  );
}
