'use client'

import { Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { Menu, Popover, Transition, Disclosure } from '@headlessui/react'

import { Button } from './Button'
import { Container } from './Container'
import logo from '@/images/logo.png'
import logoIcon from '@/images/logo-icon.png'

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

const pages = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Case study', href: '/work/horizons-in-perspective' },
  { label: 'Blog', href: '/blog' },
  {
    label: 'Blog post',
    href: '/blog/how-i-use-tailwind-to-design-from-scratch',
  },
  { label: 'Contact', href: '/contact' },
]

export function Header() {
  const pathname = usePathname()

  function MenuIcon({ open }) {
    return (
      <span className="relative h-3.5 w-4">
        <span
          className={clsx(
            'absolute block h-0.5 rotate-0 transform rounded-full bg-slate-700 opacity-100 transition-all duration-300 ease-in-out group-hover:bg-slate-900',
            open ? 'left-1/2 top-1.5 w-0' : 'left-0 top-0 w-full'
          )}
        />
        <span
          className={clsx(
            'absolute left-0 top-1.5 block h-0.5 w-full transform rounded-full bg-slate-700 opacity-100 transition-all duration-300 ease-in-out group-hover:bg-slate-900',
            open ? 'rotate-45' : 'rotate-0'
          )}
        />
        <span
          className={clsx(
            'absolute left-0 top-1.5 block h-0.5 w-full transform rounded-full bg-slate-700 opacity-100 transition-all duration-300 ease-in-out group-hover:bg-slate-900',
            open ? '-rotate-45' : 'rotate-0'
          )}
        />
        <span
          className={clsx(
            'absolute block h-0.5 rotate-0 transform rounded-full bg-slate-700 opacity-100 transition-all duration-300 ease-in-out group-hover:bg-slate-900',
            open ? 'left-1/2 top-1.5 w-0' : 'left-0 top-3 w-full'
          )}
        />
      </span>
    )
  }

  function MobileNav() {
    return (
      <Popover>
        <Popover.Button
          className="group relative z-50 flex cursor-pointer items-center justify-center rounded-full bg-slate-100/80 p-3 shadow-sm shadow-sky-100/50 ring-1 ring-slate-900/5 transition duration-300 ease-in-out hover:bg-slate-200/60 focus:outline-none md:hidden"
          aria-label="Toggle Navigation"
        >
          {({ open }) => <MenuIcon open={open} />}
        </Popover.Button>
        <Transition.Root>
          <Transition.Child
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-150 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Popover.Overlay className="fixed inset-0 z-20 bg-slate-900 bg-opacity-50" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="duration-300 ease-out"
            enterFrom="opacity-0 scale-90"
            enterTo="opacity-100 scale-100 "
            leave="duration-200 ease-in"
            leaveFrom="opacity-100 scale-100 "
            leaveTo="opacity-0 scale-90"
          >
            <Popover.Panel
              as="div"
              className="absolute inset-x-0 top-full z-30 mt-4 origin-top overflow-hidden rounded-2xl bg-slate-50 px-6 py-7 shadow-xl shadow-sky-100/40 ring-1 ring-slate-900/5"
            >
              <div>
                <div className="flex flex-col space-y-4">
                  {links.map((link) => (
                    <Link
                      key={`${link.label}-mobile`}
                      href={link.href}
                      className="block text-base font-semibold text-slate-700 duration-200 hover:text-slate-900"
                    >
                      {link.label}
                    </Link>
                  ))}

                  <Disclosure as="div" className="relative">
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className={clsx(
                            'group flex w-full items-center gap-2 text-base font-semibold duration-200 ease-in-out',
                            open
                              ? 'text-slate-900'
                              : 'text-slate-700 hover:text-slate-900'
                          )}
                        >
                          <span>Pages</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className={clsx(
                              'h-5 w-5 duration-300',
                              open
                                ? 'rotate-90 text-slate-900'
                                : 'text-slate-700 group-hover:text-slate-900'
                            )}
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Disclosure.Button>

                        <Disclosure.Panel className="z-20 space-y-4 px-3">
                          {pages.map((subLink) => (
                            <div
                              className="mt-4"
                              key={`${subLink.label}-dropdown-desktop`}
                            >
                              <Link
                                href={subLink.href}
                                className="block text-md font-medium text-slate-700 transition duration-200 ease-in-out hover:text-slate-900"
                              >
                                {subLink.label}
                              </Link>
                            </div>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              </div>
            </Popover.Panel>
          </Transition.Child>
        </Transition.Root>
      </Popover>
    )
  }

  return (
    <header className="h-24 border-b border-slate-200/80 bg-white">
      <Container className="flex h-full w-full items-center">
        <nav className="relative z-50 flex w-full items-center justify-between">
          <div className="flex shrink-0 items-center">
            <Link
              href="/"
              aria-label="Home"
              className="flex flex-shrink-0 items-center"
            >
              <Image
                src={logo}
                alt=""
                className="h-8 w-auto sm:h-9 md:hidden lg:block lg:h-10"
              />
              <Image
                src={logoIcon}
                alt=""
                className="hidden h-8 w-auto md:block lg:hidden"
              />
            </Link>
          </div>
          <div className="hidden items-center md:flex md:space-x-6 lg:space-x-8">
            {links.map((link) => (
              <Link
                key={`${link.label}-desktop`}
                href={link.href}
                className={clsx(
                  'relative duration-200 after:absolute after:-bottom-2.5 after:left-1/2 after:h-0.5 after:w-4 after:-translate-x-1/2 after:rounded-full after:bg-slate-900 after:opacity-0 after:content-[""]',
                  pathname == link.href
                    ? 'font-semibold text-slate-900 after:opacity-100'
                    : 'font-medium text-slate-700 hover:text-slate-900 hover:after:opacity-25'
                )}
              >
                {link.label}
              </Link>
            ))}

            <Menu as="div" className="relative">
              {({ open }) => (
                <>
                  <Menu.Button
                    className={clsx(
                      'group flex items-center font-medium outline-none duration-200 ease-in-out focus:outline-none',
                      open
                        ? 'text-slate-900'
                        : 'text-slate-700  hover:text-slate-900'
                    )}
                  >
                    <span>Pages</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className={clsx(
                        'ml-2 h-5 w-5 duration-300',
                        open
                          ? 'rotate-180 text-slate-900'
                          : 'text-slate-600 group-hover:text-slate-800'
                      )}
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Menu.Button>

                  <Menu.Items className="absolute right-0 z-20 mt-3 w-52 space-y-1 rounded-lg bg-white p-2.5 outline-none drop-shadow filter focus:outline-none">
                    {pages.map((subLink, i) => (
                      <Menu.Item key={`${subLink.label}-dropdown-desktop`}>
                        <Link
                          href={subLink.href}
                          className={clsx(
                            'block px-5 py-3.5 font-medium',
                            pathname == subLink.href
                              ? 'bg-slate-100/60 text-slate-900'
                              : 'rounded-md text-slate-700 transition duration-300 ease-in-out hover:bg-slate-50 hover:text-slate-900'
                          )}
                        >
                          {subLink.label}
                        </Link>
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </>
              )}
            </Menu>
          </div>
          <div className="flex items-center">
            <Button variant="secondary" href="#">
              Book a call
            </Button>
            <div className="ml-4 md:hidden">
              <MobileNav />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
