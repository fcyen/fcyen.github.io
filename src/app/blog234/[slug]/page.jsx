import { allPosts } from 'contentlayer/generated'

import { BlogPostDetail } from '@/components/blog/BlogPostDetail'

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post.slug }))

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = allPosts.find((post) => post.slug === slug)
  return { title: post.title, description: post.description }
}

export default function BlogPost({ params }) {
  const post = allPosts.find((post) => post.slug === params.slug)

  return <BlogPostDetail post={post} />
}

