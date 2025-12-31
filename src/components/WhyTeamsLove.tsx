import { ZapOff, Repeat, Eye } from 'lucide-react';

const benefits = [
  {
    icon: <ZapOff className="h-8 w-8 text-primary-orange" />,
    title: 'Reduce Chaos',
    description: 'Replace scattered spreadsheets and chat threads with one organized hub.',
  },
  {
    icon: <Repeat className="h-8 w-8 text-teal" />,
    title: 'Improve Consistency',
    description: 'Never miss a post again with automated reminders and clear workflows.',
  },
  {
    icon: <Eye className="h-8 w-8 text-soft-yellow-accent" />,
    title: 'Clear Visibility',
    description: 'Everyone knows what’s happening, what’s next, and who’s responsible.',
  },
];

const WhyTeamsLove = () => {
  return (
    <section className="py-20 px-4 bg-cream-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-navy">
            Why Teams Love Dew Flow
          </h2>
          <p className="text-lg text-dark-teal mt-2">
            The modern way to manage your content pipeline.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-around text-center space-y-10 md:space-y-0 md:space-x-8">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex flex-col items-center flex-1">
              <div className="p-4 bg-white rounded-full shadow-md mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-dark-navy mb-2">{benefit.title}</h3>
              <p className="text-dark-teal max-w-xs">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTeamsLove;
