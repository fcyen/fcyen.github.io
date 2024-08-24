import { Hero } from '@/components/Hero'
import { Experience } from '@/components/Experience'
import { StackIconsRow } from '@/components/StackIconsRow'
import { FeaturedWork } from '@/components/work/FeaturedWork'
import { Testimonials } from '@/components/Testimonials'
import { FeaturedPosts } from '@/components/blog/FeaturedPosts'
import { Footer } from '@/components/Footer'

export const metadata = {
  description:
    "I'm a software engineer who brings a unique blend of technical expertise and creative sensibility to my work",
}

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* <Experience />
      <StackIconsRow />
      <FeaturedWork />
      <Testimonials />
      <FeaturedPosts /> */}
      <Footer />
    </>
  )
}
