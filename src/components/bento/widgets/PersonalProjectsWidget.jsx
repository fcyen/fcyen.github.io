import { BentoCard } from "../BentoCard";
import { WorksList } from "../WorksList";

//
// 👉 To fill in real content:
//    1. Edit the `items` array below.
//    2. Each item has: `title`, `company` (use this for the project's
//       short subtitle or stack, e.g. "Side project · Next.js"),
//       `year`, and an optional `href`.
//    3. Add or remove entries freely — the layout will adapt.
//    4. Order matters: newest entries first reads best.
//
const items = [
  {
    title: "Personal Project 1",
    company: "Side project · Next.js",
    year: "2024",
    href: "#",
  },
  {
    title: "Personal Project 2",
    company: "Side project · Python",
    year: "2023",
    href: "#",
  },
  {
    title: "Personal Project 3",
    company: "Experiment · Three.js",
    year: "2022",
    href: "#",
  },
];

export function PersonalProjectsWidget() {
  return (
    <BentoCard className="md:col-span-2 lg:col-span-2 lg:row-span-2">
      <WorksList title="Personal Projects" items={items} />
    </BentoCard>
  );
}
