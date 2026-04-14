import { BentoCard } from "../BentoCard";
import { WorksList } from "../WorksList";

//
// 👉 To fill in real content:
//    1. Edit the `items` array below.
//    2. Each item has: `title`, `company`, `year`, and an optional `href`.
//    3. Add or remove entries freely — the layout will adapt.
//    4. Order matters: newest entries first reads best.
//    5. To add a thumbnail later, drop the image into `src/images/work/`,
//       import it at the top of this file, and extend `WorksList.jsx`
//       to render an `item.image` field.
//
const items = [
  {
    title: "Software Engineer",
    company: "GoodNotes",
    year: "2025-2026",
    href: "#",
  },
  {
    title: "Senior Software Engineer",
    company: "Zendesk",
    year: "2021-2025",
    href: "#",
  },
];

export function ProfessionalExperienceWidget() {
  return (
    <BentoCard className="md:col-span-2 lg:col-span-4">
      <WorksList title="Professional Experience" items={items} />
    </BentoCard>
  );
}
