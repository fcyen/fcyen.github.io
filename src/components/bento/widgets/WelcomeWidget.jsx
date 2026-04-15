"use client";

import { useEffect, useRef, useState } from "react";
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
//    - Swap the background track by dropping a new mp3 in `public/audio/`
//      and updating the TRACK object — keep attribution fields filled
//      in if the license requires it (CC-BY*, CC-BY-NC*, etc).
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

const TRACK = {
  title: "Luminescent Serenade",
  artist: "PumpUpTheMind",
  src: "/media/luminescent-serenade.mp3",
  source:
    "https://freemusicarchive.org/music/pumpupthemind/single/luminescent-serenade/",
  license: "CC BY-NC-ND 4.0",
  licenseUrl: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
};

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

function MusicButton({ playing, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={
        playing
          ? `Pause ${TRACK.title} by ${TRACK.artist}`
          : `Play ${TRACK.title} by ${TRACK.artist}`
      }
      title={`${TRACK.title} — ${TRACK.artist}`}
      className="inline-flex h-11 items-center gap-2 rounded-xl border border-bento-coral/60 bg-white/60 px-3 text-bento-ink transition hover:-translate-y-0.5 hover:bg-bento-coral/20 hover:text-bento-magenta"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={`h-5 w-5 ${playing ? "animate-spin [animation-duration:3s]" : ""}`}
      >
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <circle
          cx="12"
          cy="12"
          r="3.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
      </svg>
      {playing ? (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="h-4 w-4"
        >
          <rect x="6" y="5" width="4" height="14" rx="1" />
          <rect x="14" y="5" width="4" height="14" rx="1" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="h-4 w-4"
        >
          <path d="M6 4.5v15a.75.75 0 001.158.633l12-7.5a.75.75 0 000-1.266l-12-7.5A.75.75 0 006 4.5z" />
        </svg>
      )}
    </button>
  );
}

export function WelcomeWidget() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onEnd = () => setPlaying(false);
    audio.addEventListener("ended", onEnd);
    return () => audio.removeEventListener("ended", onEnd);
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().catch(() => setPlaying(false));
      setPlaying(true);
    }
  };

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
          <p className="mt-4 max-w-md text-base leading-5 text-bento-ink/80">
            If you would like to know more about my work, feel free to reach me at:
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            {socials.map((s) => (
              <SocialButton key={s.label} {...s} />
            ))}
            <MusicButton playing={playing} onToggle={toggleMusic} />
          </div>

          <p className="mt-3 text-xs leading-4 text-bento-ink/50">
            ♪{" "}
            <a
              href={TRACK.source}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-bento-coral/60 underline-offset-2 hover:text-bento-magenta"
            >
              {TRACK.title} — {TRACK.artist}
            </a>{" "}
            (
            <a
              href={TRACK.licenseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-bento-coral/60 underline-offset-2 hover:text-bento-magenta"
            >
              {TRACK.license}
            </a>
            )
          </p>
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

      <audio ref={audioRef} src={TRACK.src} preload="metadata" loop />
    </BentoCard>
  );
}
