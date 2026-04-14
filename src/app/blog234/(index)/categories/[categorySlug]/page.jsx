import { BlogGrid } from '@/components/blog/BlogGrid'
import { allPosts } from 'contentlayer2/generated'

import { getAllCategories } from '@/lib/articles'

const parseCategory = (categorySlug) => {
  const category = categorySlug
    .replace(/-/g, ' ')
    .split(' ')
    .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
    .join(' ')
  return category
}

export const generateStaticParams = async () => {
  const categories = await getAllCategories()
  return categories.map((category) => ({
    categorySlug: category.replace(/ /g, '-').toLowerCase(),
  }))
}

export async function generateMetadata({ params }) {
  const { categorySlug } = await params
  const category = parseCategory(categorySlug)
  return { title: category }
}

export default async function BlogCategoryPage({ params }) {
  const { categorySlug } = await params
  const posts = allPosts.filter(
    (post) => post.category === parseCategory(categorySlug)
  )

  return <BlogGrid posts={posts} />
}

