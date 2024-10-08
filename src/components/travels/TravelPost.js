import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';

export function TravelPost({ post, index }) {
  return (
    <div
      key={post.title}
      className={clsx(
        'flex flex-col gap-12 rounded-3xl bg-slate-50 px-7 py-12 sm:gap-14 sm:p-16 lg:px-10 lg:py-14 xl:gap-16 xl:p-16',
        index % 2 === 0
          ? 'rounded-tl-[64px]'
          : 'transform rounded-br-[64px] lg:translate-y-24 xl:translate-y-32'
      )}
    >
      <Link
        href={post.url}
        className={clsx(
          'group aspect-h-9 aspect-w-16 relative block w-full overflow-hidden rounded-xl md:aspect-h-2 md:aspect-w-3',
          index % 2 === 0 ? 'order-1' : 'order-2'
        )}
      >
        <Image
          src={post.thumbnail}
          alt={post.title}
          fill
          className="object-cover object-top w-full transition duration-300 rounded-xl bg-slate-100 group-hover:scale-105"
          sizes="(min-width: 1280px) 27rem, (min-width: 1024px) calc(50vw - 8.25rem), (min-width: 640px) 28rem, calc(100vw - 6rem)"
        />
        <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-slate-900/5"></div>
      </Link>
      <div
        className={clsx(
          'flex flex-col items-center',
          index % 2 === 0 ? 'order-2' : 'order-1'
        )}
      >
        <h3 className="text-center font-display text-[28px] font-medium text-slate-900">
          {post.title}
        </h3>
      </div>
    </div>
  )
}