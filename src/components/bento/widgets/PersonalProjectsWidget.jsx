import { BentoCard } from "../BentoCard";
import { WorksList } from "../WorksList";

//
// 👉 To fill in real content:
//    1. Edit the `items` array below. Each entry has:
//         - title:   the project name (required)
//         - company: short subtitle, e.g. "UIUX · Figma prototype" (required)
//         - year:    4-digit year shown on the right (required)
//         - href:    optional link; clicking the row opens it
//    2. Entries are sourced from `src/content/work/*.mdx`. When you add a
//       new MDX file under that folder, mirror its front-matter here
//       (title, description → company, date → year, projectURL → href).
//    3. Order matters: newest entries first reads best.
//
const items = [
  {
    title: "Redesigning OCBC App Experience",
    company: "UIUX · UX case study",
    year: "2024",
    href: "https://www.behance.net/gallery/212692493/Redesigning-the-OCBC-App-Experience",
  },
  {
    title: "HCI Coursework",
    company: "UIUX · Indoor navigation prototype",
    year: "2020",
    href: "https://www.figma.com/design/MtBYfXYAKIVpArEspyL6Qo/Hi-Fi-Prototype?node-id=2-5533&t=rh3AJxmPemfGlIP1-1",
  },
];

export function PersonalProjectsWidget() {
  return (
    <BentoCard className="md:col-span-2 lg:col-span-5">
      <WorksList title="Personal Projects" items={items} />
    </BentoCard>
  );
}
