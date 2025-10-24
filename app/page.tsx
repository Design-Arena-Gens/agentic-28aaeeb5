import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { StatsMarquee } from "@/components/StatsMarquee";
import { SolutionsGrid } from "@/components/SolutionsGrid";
import { UseCaseCarousel } from "@/components/UseCaseCarousel";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { InsightsShowcase } from "@/components/InsightsShowcase";
import { Testimonials } from "@/components/Testimonials";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>
        <Hero />
        <StatsMarquee />
        <SolutionsGrid />
        <UseCaseCarousel />
        <ProcessTimeline />
        <InsightsShowcase />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
