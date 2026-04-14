import Image from "next/image";
import { format, parseISO } from "date-fns";

import { MdxContent } from "@/components/mdx/MdxContent";

/**
 * Reusable blog post detail component.
 *
 * Renders the standard blog post layout — header (title, description,
 * date, cover image) followed by the MDX article body. Deliberately
 * does NOT render any kind of share/footer bar; that's left up to
 * the page using this component.
 *
 * Props:
 *   - post: a Contentlayer `Post` document with
 *       { title, description, date, image, body: { code } }
 */
export function BlogPostDetail({ post }) {
  return (
    <main>
      <article>
        {/* Article Header */}
        <header className="relative py-16 sm:pt-24 lg:pt-28">
          <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="font-display text-4xl font-semibold leading-tight text-bento-ink sm:text-5xl sm:leading-tight">
              {post.title}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-bento-ink/80">
              {post.description}
            </p>
            <div className="mt-8 flex items-center justify-center gap-4 text-md text-bento-ink/70">
              <span className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.75"
                  stroke="currentColor"
                  className="h-5 w-5 text-bento-ink/50"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                  />
                </svg>
                <time dateTime={post.date}>
                  {format(parseISO(post.date), "LLL d, yyyy")}
                </time>
              </span>
            </div>

            {post.image && (
              <div className="mx-auto mt-16 w-full max-w-4xl">
                <div className="aspect-h-9 aspect-w-16 relative block w-full overflow-hidden rounded-3xl md:aspect-h-2 md:aspect-w-3">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill={true}
                    className="w-full rounded-3xl bg-bento-coral/20 object-cover"
                    sizes="(min-width: 1024px) 56rem, calc(100vw - 2.5rem)"
                  />
                  <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-bento-ink/10"></div>
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Article Content */}
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto max-w-2xl text-bento-ink/90">
            <MdxContent code={post.body.code} />
          </div>
        </div>
      </article>
    </main>
  );
}
