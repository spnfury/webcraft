import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 12,
    frequency: '/month',
    description: 'Perfect for personal websites and small projects.',
    features: [
      '1 website',
      '5 pages per website',
      'Free custom domain for 1 year',
      'Mobile responsive',
      'Basic SEO tools',
      'Community support',
    ],
    cta: 'Start with Starter',
    mostPopular: false,
  },
  {
    name: 'Professional',
    price: 24,
    frequency: '/month',
    description: 'Ideal for businesses and professional portfolios.',
    features: [
      '3 websites',
      'Unlimited pages',
      'Free custom domain for 1 year',
      'Mobile responsive',
      'Advanced SEO tools',
      'Priority email support',
      'E-commerce functionality',
      'Custom code injection',
    ],
    cta: 'Start with Professional',
    mostPopular: true,
  },
  {
    name: 'Business',
    price: 48,
    frequency: '/month',
    description: 'For growing businesses with advanced needs.',
    features: [
      '10 websites',
      'Unlimited pages',
      'Free custom domain for 1 year',
      'Mobile responsive',
      'Advanced SEO tools',
      '24/7 priority support',
      'E-commerce functionality',
      'Custom code injection',
      'Team collaboration tools',
      'White label options',
    ],
    cta: 'Start with Business',
    mostPopular: false,
  },
];

const Pricing = () => {
  return (
    <div id="pricing" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Pricing</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
            Plans for businesses of all sizes
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Choose the perfect plan for your needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`${
                tier.mostPopular
                  ? 'border-2 border-indigo-500 shadow-xl'
                  : 'border border-gray-200'
              } rounded-lg shadow-sm divide-y divide-gray-200 bg-white`}
            >
              {tier.mostPopular && (
                <div className="bg-indigo-500 rounded-t-lg py-1.5">
                  <p className="text-xs text-center font-medium text-white uppercase">Most popular</p>
                </div>
              )}
              <div className="p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">{tier.name}</h3>
                <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">${tier.price}</span>
                  <span className="text-base font-medium text-gray-500">{tier.frequency}</span>
                </p>
                <a
                  href="#"
                  className={`${
                    tier.mostPopular
                      ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                      : 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700'
                  } mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium`}
                >
                  {tier.cta}
                </a>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h4 className="text-sm font-medium text-gray-900 tracking-wide uppercase">What's included</h4>
                <ul className="mt-6 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex">
                      <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                      <span className="ml-3 text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;