import { BlogHero } from '@/components/BlogHero'
import { Footer } from '@/components/Footer'
import { Tabs } from '@/components/Tabs'
import { Container } from '@/components/Container'
import { Pagination } from '@/components/Pagination'
import { getAllCategories } from '@/lib/articles'
import { ComingSoon } from '../../../components/ComingSoon'

export const metadata = {
  title: {
    template: 'Blog - %s',
    default: 'Blog',
  },
  description:
    'A personal record of what I\'ve explored, what I\'m working on, and what I\'ve learned',
}

export default async function BlogLayout({ children }) {
  const categories = await getAllCategories()

  return (
    <>
      {/* <ComingSoon /> */}
      {/* <BlogHero /> */}
      <section
        id="articles"
        className="overflow-hidden bg-white py-16 sm:py-24 lg:py-28"
      >
        <Container>
          <h2 className="text-center font-display text-4xl font-semibold text-slate-900 sm:text-5xl">
            Latest Articles
          </h2>
          {/* <Tabs
            tabs={categories}
            directory="blog"
            className="mt-9 justify-center gap-2"
          /> */}
          {children}
          <Pagination />
        </Container>
      </section>
      <Footer />
    </>
  )
}
