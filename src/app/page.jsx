import { BentoGrid } from "@/components/bento/BentoGrid";
import { WelcomeWidget } from "@/components/bento/widgets/WelcomeWidget";
import { AboutMeWidget } from "@/components/bento/widgets/AboutMeWidget";
import { ProfessionalExperienceWidget } from "@/components/bento/widgets/ProfessionalExperienceWidget";
import { PersonalProjectsWidget } from "@/components/bento/widgets/PersonalProjectsWidget";
import { MusicWidget } from "@/components/bento/widgets/MusicWidget";

export const metadata = {
  description:
    "I'm a software engineer who brings a unique blend of technical expertise and creative sensibility to my work",
};

export default function HomePage() {
  return (
    <BentoGrid>
      <WelcomeWidget />
      <AboutMeWidget />
      <ProfessionalExperienceWidget />
      <PersonalProjectsWidget />
      <MusicWidget />
    </BentoGrid>
  );
}
