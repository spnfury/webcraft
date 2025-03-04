import React from 'react';
import { Layers, Zap, Layout, PenTool, Smartphone, Users } from 'lucide-react';

const features = [
  {
    name: 'Drag & Drop Builder',
    description: 'Build your website by simply dragging and dropping elements onto your page. No coding required.',
    icon: Layout,
  },
  {
    name: 'Responsive Design',
    description: 'All websites created with WebCraft are fully responsive and look great on any device.',
    icon: Smartphone,
  },
  {
    name: 'Customizable Templates',
    description: 'Start with one of our professionally designed templates and customize it to match your brand.',
    icon: PenTool,
  },
  {
    name: 'Fast Performance',
    description: 'Our websites are optimized for speed to provide the best user experience for your visitors.',
    icon: Zap,
  },
  {
    name: 'SEO Friendly',
    description: 'Built-in SEO tools to help your website rank higher in search engine results.',
    icon: Layers,
  },
  {
    name: 'Collaboration Tools',
    description: 'Work together with your team to create and manage your website efficiently.',
    icon: Users,
  },
];

const Features = () => {
  return (
    <div id="features" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to create amazing websites
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            WebCraft Solutions provides all the tools you need to build professional websites without writing a single line of code.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;