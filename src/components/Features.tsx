import { LayoutGrid, PieChart, Users, Map } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: <LayoutGrid className="h-8 w-8 text-primary-orange" />,
    title: 'Content Calendar Dashboard',
    description: 'Visualize your entire content pipeline in one place with drag-and-drop scheduling.',
  },
  {
    icon: <PieChart className="h-8 w-8 text-teal" />,
    title: 'Platform Breakdown',
    description: 'Track content across Instagram, TikTok, YouTube, and more with unified analytics.',
  },
  {
    icon: <Users className="h-8 w-8 text-soft-yellow-accent" />,
    title: 'Team Workload & Capacity',
    description: 'Balance tasks across your team and prevent overload with clear capacity planning.',
  },
  {
    icon: <Map className="h-8 w-8 text-deep-orange" />,
    title: 'Posting Heatmap Analytics',
    description: 'See posting patterns and optimize your content strategy over time.',
  },
];

const Features = () => {
  return (
    <section className="py-20 px-4 bg-cream-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-navy">
            Everything You Need
          </h2>
          <p className="text-lg text-dark-teal mt-2">
            All the tools to plan, track, and optimize your content flow.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-white/60 border-orange-50 shadow-sm hover:shadow-lg transition-shadow duration-300 rounded-xl">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                <div className="p-3 bg-white rounded-lg shadow-inner">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold text-dark-navy">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-dark-teal">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
