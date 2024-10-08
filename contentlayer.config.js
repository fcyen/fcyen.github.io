import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import rehypePrism from '@mapbox/rehype-prism'

const computedFields = {
  url: {
    type: 'string',
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slug: {
    type: 'string',
    resolve: (doc) => `${doc._raw.sourceFileName.replace('.mdx', '')}`,
  },
}

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `blog/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    category: { type: 'string', required: true },
    image: { type: 'string', required: true },
    description: { type: 'string', required: true },
  },

  computedFields,
}))

export const CaseStudy = defineDocumentType(() => ({
  name: 'CaseStudy',
  filePathPattern: `work/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    tags: {
      type: 'list',
      of: { type: 'string' },
    },
    thumbnail: { type: 'string', required: true },
    coverImage: { type: 'string' },
    images: { type: 'list', of: { type: 'string' } },
    projectURL: { type: 'string', required: true },
    description: { type: 'string', required: true },
  },

  computedFields,
}))

const Card = defineNestedType(() => ({
  name: 'Card',
  fields: {
    image: { type: 'string' },
    caption: { type: 'string' },
  },
}))

export const TravelPost = defineDocumentType(() => ({
  name: 'TravelPost',
  filePathPattern: `travels/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    cards: { type: 'list', of: Card },
    thumbnail: { type: 'string' },
  },

  computedFields,
}))

export default makeSource({
  contentDirPath: 'src/content',
  documentTypes: [Post, CaseStudy, TravelPost],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})
