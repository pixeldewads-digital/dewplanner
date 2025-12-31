import React from 'react';

const steps = [
  {
    number: '1',
    title: 'Connect Google Sheets',
    description: 'Link your existing content spreadsheets in seconds.',
  },
  {
    number: '2',
    title: 'Organize Content Flow',
    description: 'Arrange posts, assign tasks, and set deadlines visually.',
  },
  {
    number: '3',
    title: 'Track Progress & Publish',
    description: 'Monitor performance and ship content consistently.',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-navy">
            How It Works
          </h2>
          <p className="text-lg text-dark-teal mt-2">
            A simple, streamlined process to get you started.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-10 md:space-y-0 md:space-x-8">
          {steps.map((step, index) => (
            <div key={step.number} className="flex-1 flex flex-col items-center md:items-start">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-teal text-white font-bold text-xl mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-dark-navy mb-2">{step.title}</h3>
              <p className="text-dark-teal max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
