import { TravelPost } from "./TravelPost";
import clsx from 'clsx';

export function TravelPostGrid({ posts }) {
  return (
    <div
      className={clsx(
        'mx-auto grid max-w-xl gap-12 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-10 xl:gap-24',
        posts.length % 2 === 0 && 'lg:pb-32'
      )}
    >
      {posts.map((post, index) => (
        <TravelPost key={post.title} post={post} index={index} />
      ))}
    </div>
  )
}