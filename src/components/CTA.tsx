import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-soft-yellow-accent via-primary-orange to-deep-orange text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-md">
          Ready to streamline your content flow?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto drop-shadow-sm">
          Join modern teams using Dew Flow Planner to ship content without chaos.
        </p>
        <Button
          size="lg"
          className="bg-white text-primary-orange hover:bg-cream-background font-bold rounded-lg px-8 py-3 transition-transform transform hover:scale-105 shadow-lg"
        >
          Start Planning Today
        </Button>
      </div>
    </section>
  );
};

export default CTA;
