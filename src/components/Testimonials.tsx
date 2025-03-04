import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "WebCraft Solutions transformed our business. We were able to create a professional website in just a few hours that would have taken weeks with a traditional web developer.",
    author: {
      name: 'Sarah Johnson',
      role: 'Marketing Director, TechStart',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    rating: 5,
  },
  {
    id: 2,
    content: "As someone with zero coding experience, I was amazed at how easy it was to build my online portfolio. The templates are beautiful and the customization options are endless.",
    author: {
      name: 'Michael Chen',
      role: 'Freelance Photographer',
      imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    rating: 5,
  },
  {
    id: 3,
    content: "Our e-commerce store was up and running in days instead of months. The platform is intuitive and the customer support team is always there when we need help.",
    author: {
      name: 'Emily Rodriguez',
      role: 'Owner, Boutique Bliss',
      imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <div className="bg-indigo-700">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-200 tracking-wide uppercase">Testimonials</h2>
          <p className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight">
            Loved by businesses worldwide
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-indigo-200">
            Join thousands of satisfied customers who have transformed their online presence with WebCraft Solutions.
          </p>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="px-6 py-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 text-base italic">"{testimonial.content}"</p>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={testimonial.author.imageUrl}
                        alt={testimonial.author.name}
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{testimonial.author.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.author.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;