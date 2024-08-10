import Header from "./components/Header";
import IntroCard from "./components/IntroCard";

export default function Home() {
  /**
   * References:
   * https://www.geeksforgeeks.org/create-a-portfolio-website-template-using-tailwind-css/
   * https://www.behance.net/gallery/200792255/Personal-Portfolio-Website-UI-Design?tracking_source=search_projects|personal+website&l=12
   */

  //TODO：style website based on the behance design
  return (
    <div>
      <div className="mb-16 container mx-auto">
        <IntroCard></IntroCard>
      </div>
    </div>
  );
}
