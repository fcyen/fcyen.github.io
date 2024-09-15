import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

import { Container } from "./Container";
import newsletterBg from "@/images/newsletter-bg.png";
import {
  LinkedInIcon,
  GitHubIcon,
  BehanceIcon,
} from "./SocialIcons";

export const pageLinks = [
  { label: "Home", href: "/" },
  // { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  // { label: "Blog", href: "/blog" },
  { label: "Travels", href: "/travels" },
  // { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    icon: LinkedInIcon,
    href: "https://www.linkedin.com/in/foo-ching-yen/",
  },
  {
    label: "Github",
    icon: GitHubIcon,
    href: "https://github.com/fcyen",
  },
  {
    label: "Behance",
    icon: BehanceIcon,
    href: "https://www.behance.net/ching_yen",
  }
];

function SocialLink({ icon: Icon, label, ...props }) {
  return (
    <Link
      className="flex col-span-2 items-center justify-center gap-2.5 rounded-full border border-slate-600/90 py-2.5 text-sm text-slate-50 duration-200 ease-in-out hover:bg-slate-800 hover:text-white lg:gap-2 xl:gap-2.5"
      {...props}
    >
      <Icon className="h-4 w-4 shrink-0 text-slate-200 duration-200 ease-in-out group-hover:fill-slate-100" />
      {label}
    </Link>
  );
}

function Newsletter() {
  return(
    <div className="relative">
    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-slate-900"></div>
    <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-2xl bg-sky-700 px-5 py-12 sm:px-16 lg:py-14">
        <Image
          src={newsletterBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-right"
        />
        <div className="relative flex w-full flex-col items-center lg:flex-row">
          <div className="max-w-2xl text-center lg:pr-4 lg:text-left">
            <h3 className="font-display text-4xl font-semibold text-white sm:text-5xl">
              Subscribe to my newsletter
            </h3>
            <p className="mx-auto mt-4 max-w-lg text-lg text-sky-50 lg:mx-0 lg:mt-6">
              Join 10,000+ designers and get creative site breakdowns,
              design musings and tips every Monday.
            </p>
          </div>
          <form
            action="#"
            method="post"
            className="relative mt-10 w-full max-w-lg lg:mt-0"
          >
            <input
              type="email"
              className="h-14 w-full rounded-full border-0 bg-white/10 py-3.5 pl-5 pr-32 text-sm leading-5 text-sky-50 placeholder-sky-100/90 outline-none ring-1 ring-white/25 backdrop-blur  duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-white/30 sm:pl-6"
              required
              placeholder="Enter your email"
              autoComplete="email"
            />
            <button
              type="submit"
              className="absolute right-1.5 top-1.5 inline-flex h-11 items-center rounded-full bg-sky-900 px-5 py-3 text-sm font-semibold text-sky-50 outline-none transition duration-200 ease-in-out hover:bg-sky-800 focus:outline-none sm:px-7 sm:text-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export function Footer({ newsletter = false }) {
  return (
    <section className={clsx(newsletter && "pt-12 sm:pt-16")}>
      {newsletter && <Newsletter />}
      <footer className="overflow-hidden bg-slate-900 pb-8 pt-8 sm:pb-12">
        <Container>
          {/** Socials */}
          <div className="mx-auto grid max-w-xl items-center gap-5 lg:mx-0 lg:max-w-none lg:grid-cols-12 lg:gap-12 xl:gap-20">
            <div className="flex flex-col items-center lg:col-span-5 lg:items-start">
              <div className="grid w-full max-w-sm grid-cols-6 gap-3.5 sm:max-w-none sm:grid-cols-6 lg:gap-2.5 xl:gap-3.5 justify-center items-center">
                {socialLinks.map((socialLink) => (
                  <SocialLink
                    key={`footer-social-link-${socialLink.label}`}
                    icon={socialLink.icon}
                    label={socialLink.label}
                    href={socialLink.href}
                  />
                ))}
              </div>
            </div>
          </div>
          <hr className="mb-6 mt-6 h-px w-full border-slate-600/90" />
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="flex items-center gap-6">
              {pageLinks.map((link, index) => (
                <Link
                  key={`footer-link-${index}`}
                  href={link.href}
                  className="text-base font-medium text-slate-100 duration-200 ease-in-out hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <p className="mt-8 text-base text-slate-400/90 md:mt-0">
              © {new Date().getFullYear()} Tailwind Awesome. All rights
              reserved.
            </p>
          </div>
        </Container>
      </footer>
    </section>
  );
}
