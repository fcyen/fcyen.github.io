import { TravelPostGrid } from "@/components/travels/TravelPostGrid";
import { allTravelPosts } from 'contentlayer2/generated';

export default function Travels() {
  return <TravelPostGrid posts={allTravelPosts} />;
}
