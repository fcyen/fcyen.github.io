import { Container } from "./Container";
import Image from "next/image";

import bgGradient from "@/images/blog-hero-bg.png";

export function ComingSoon() {
  return (
    <section className="relative overflow-hidden">
      <Container className="relative bg-slate-50 py-16 sm:py-24 lg:rounded-b-3xl lg:py-32">
        <div className="h-v80 relative flex flex-col items-center justify-center">
          <p className="mx-auto mt-6 max-w-xl text-center text-lg leading-8 text-slate-700">
            -- Content is WIP, stay tuned! --
          </p>
        </div>
      </Container>
    </section>
  );
}
