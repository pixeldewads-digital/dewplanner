import { Button } from "@/components/ui/button";
import { Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import WhyTeamsLove from "@/components/WhyTeamsLove";
import CTA from "@/components/CTA";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700", "800"],
});

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-cream-background">
      <main className="flex-grow">
        <section className="container mx-auto text-center pt-32 pb-20 px-4">
          <h1
            className={`text-5xl md:text-7xl font-extrabold text-dark-navy tracking-tighter ${plusJakartaSans.className}`}
          >
            Dew Flow Planner
          </h1>
          <p className="mt-4 text-lg text-dark-teal max-w-2xl mx-auto">
            The ultimate content planning dashboard for PixelDew.
            <br />
            Plan, track, and optimize your content flow effortlessly.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button
              className="bg-primary-orange hover:bg-deep-orange text-white font-bold py-3 px-6 rounded-lg text-lg"
              size="lg"
            >
              Get Started
            </Button>
            <Link href="/dashboard">
              <Button
                className="bg-transparent hover:bg-soft-yellow-accent/20 text-primary-orange font-bold py-3 px-6 rounded-lg border-2 border-primary-orange text-lg"
                variant="outline"
                size="lg"
              >
                View Demo Dashboard
              </Button>
            </Link>
          </div>
        </section>

        <Features />
        <HowItWorks />
        <WhyTeamsLove />
        <CTA />
      </main>
    </div>
  );
}
