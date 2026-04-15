"use client";

import { useEffect, useRef, useState } from "react";

import { BentoCard } from "../BentoCard";

//
// 👉 To swap the track:
//    1. Drop the mp3 in `public/audio/` (path becomes `/audio/<file>.mp3`).
//    2. Update the TRACK object below — keep all attribution fields filled
//       in if the license requires it (CC-BY*, CC-BY-NC*, etc).
//
const TRACK = {
  title: "Luminescent Serenade",
  artist: "PumpUpTheMind",
  src: "/audio/luminescent-serenade.mp3",
  source:
    "https://freemusicarchive.org/music/pumpupthemind/single/luminescent-serenade/",
  license: "CC BY-NC-ND 4.0",
  licenseUrl: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
};

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
}

export function MusicWidget() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onLoaded = () => setDuration(audio.duration);
    const onTime = () => setCurrent(audio.currentTime);
    const onEnd = () => setPlaying(false);
    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnd);
    return () => {
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", onEnd);
    };
  }, []);

  const toggle = () => {
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

  const seek = (event) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const ratio = Number(event.target.value);
    audio.currentTime = ratio * duration;
    setCurrent(audio.currentTime);
  };

  return (
    <BentoCard className="md:col-span-2 lg:col-span-8">
      <div className="flex flex-1 flex-col">
        <p className="font-display text-sm uppercase tracking-widest text-bento-magenta">
          Now playing
        </p>

        <div className="mt-4 flex flex-1 items-center gap-4 sm:gap-6">
          <button
            type="button"
            onClick={toggle}
            aria-label={playing ? "Pause" : "Play"}
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-bento-magenta text-white shadow-sm transition hover:scale-105 hover:bg-bento-magenta/90"
          >
            {playing ? (
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <rect x="6" y="5" width="4" height="14" rx="1" />
                <rect x="14" y="5" width="4" height="14" rx="1" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 pl-0.5"
                aria-hidden="true"
              >
                <path d="M6 4.5v15a.75.75 0 001.158.633l12-7.5a.75.75 0 000-1.266l-12-7.5A.75.75 0 006 4.5z" />
              </svg>
            )}
          </button>

          <div className="flex min-w-0 flex-1 flex-col">
            <p className="truncate font-display text-lg font-semibold text-bento-ink">
              {TRACK.title}
            </p>
            <p className="truncate text-sm text-bento-ink/70">{TRACK.artist}</p>

            <div className="mt-3 flex items-center gap-3">
              <span className="w-10 text-xs tabular-nums text-bento-ink/60">
                {formatTime(current)}
              </span>
              <input
                type="range"
                min={0}
                max={1}
                step={0.001}
                value={duration ? current / duration : 0}
                onChange={seek}
                aria-label="Seek"
                className="h-1 flex-1 cursor-pointer appearance-none rounded-full bg-bento-coral/40 accent-bento-magenta"
              />
              <span className="w-10 text-right text-xs tabular-nums text-bento-ink/60">
                {formatTime(duration)}
              </span>
            </div>
          </div>
        </div>

        <p className="mt-4 text-xs leading-5 text-bento-ink/60">
          “{TRACK.title}” by{" "}
          <a
            href={TRACK.source}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-bento-magenta"
          >
            {TRACK.artist}
          </a>
          {" — licensed under "}
          <a
            href={TRACK.licenseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-bento-magenta"
          >
            {TRACK.license}
          </a>
        </p>
      </div>

      <audio ref={audioRef} src={TRACK.src} preload="metadata" />
    </BentoCard>
  );
}
