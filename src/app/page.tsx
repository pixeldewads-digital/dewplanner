import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700", "800"],
});

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-cream-background">
      <main className="flex-grow pt-20">
        <section className="container mx-auto text-center py-20 px-4">
          <h2
            className={`text-5xl md:text-7xl font-extrabold text-dark-navy tracking-tighter ${plusJakartaSans.className}`}
          >
            Plan Content. Track Flow.
            <br />
            Ship Consistently.
          </h2>
          <p className="mt-4 text-lg text-dark-navy max-w-2xl mx-auto">
            Dew Flow Planner helps you manage content calendars, workloads, and
            performance in one simple dashboard.
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
                View Demo
              </Button>
            </Link>
          </div>
        </section>

        <section className="px-4">
          <div className="container mx-auto bg-white p-8 rounded-t-2xl shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-1 md:col-span-2 bg-soft-yellow-accent/20 p-6 rounded-lg">
                <h3 className="font-bold text-dark-teal mb-4">
                  Content Calendar
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-20 bg-soft-yellow-accent/40 rounded-md"></div>
                  <div className="h-20 bg-teal/30 rounded-md"></div>
                  <div className="h-20 bg-soft-yellow-accent/40 rounded-md"></div>
                  <div className="h-20 bg-teal/30 rounded-md"></div>
                  <div className="h-20 bg-soft-yellow-accent/40 rounded-md"></div>
                  <div className="h-20 bg-teal/30 rounded-md"></div>
                </div>
              </div>
              <div className="col-span-1 bg-teal/20 p-6 rounded-lg">
                <h3 className="font-bold text-dark-teal mb-4">
                  Platform Breakdown
                </h3>
                <div className="space-y-3">
                  <div className="w-full h-10 bg-primary-orange/80 rounded-md"></div>
                  <div className="w-full h-10 bg-dark-teal/80 rounded-md"></div>
                  <div className="w-full h-10 bg-teal/80 rounded-md"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
