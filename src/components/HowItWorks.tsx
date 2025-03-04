import React from 'react';
import { MousePointer, Edit, Globe } from 'lucide-react';

const steps = [
  {
    id: 1,
    name: 'Choose a template',
    description: 'Start with one of our professionally designed templates as your foundation.',
    icon: MousePointer,
  },
  {
    id: 2,
    name: 'Customize your design',
    description: 'Use our intuitive drag-and-drop editor to customize every aspect of your website.',
    icon: Edit,
  },
  {
    id: 3,
    name: 'Publish your website',
    description: 'With one click, publish your website to our fast, reliable hosting platform.',
    icon: Globe,
  },
];

const HowItWorks = () => {
  return (
    <div id="how-it-works" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">How It Works</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Create your website in three simple steps
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our platform makes it easy to build a professional website, even if you've never created one before.
          </p>
        </div>

        <div className="mt-16">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            {steps.map((step) => (
              <div key={step.id} className="relative">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600 mb-4 mx-auto">
                  <step.icon className="h-8 w-8" />
                  <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-medium">
                    {step.id}
                  </span>
                </div>
                <div className="text-center">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{step.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 relative">
          <div className="lg:mx-auto lg:max-w-5xl lg:px-8">
            <div className="relative overflow-hidden rounded-xl shadow-xl">
              <img
                className="w-full object-cover"
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2852&q=80"
                alt="Website builder interface"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;