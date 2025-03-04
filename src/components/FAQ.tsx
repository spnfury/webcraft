import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'Do I need any coding knowledge to use WebCraft Solutions?',
    answer: 'Not at all! WebCraft Solutions is designed specifically for people with no coding experience. Our intuitive drag-and-drop interface makes it easy to create professional websites without writing a single line of code.',
  },
  {
    question: 'Can I use my own domain name?',
    answer: 'Yes, you can use your existing domain name with any of our plans. We also offer a free domain for the first year with all paid plans if you need one.',
  },
  {
    question: 'Are the websites mobile responsive?',
    answer: 'Absolutely! All websites created with WebCraft Solutions are fully responsive and will look great on any device, from desktops to smartphones.',
  },
  {
    question: 'Can I sell products on my website?',
    answer: 'Yes, our Professional and Business plans include e-commerce functionality that allows you to set up an online store, process payments, and manage inventory.',
  },
  {
    question: 'Is there a limit to how many pages I can have?',
    answer: 'The Starter plan allows up to 5 pages per website, while the Professional and Business plans offer unlimited pages.',
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'We offer different levels of support depending on your plan. The Starter plan includes community support, the Professional plan adds priority email support, and the Business plan includes 24/7 priority support.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">FAQ</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
            Frequently asked questions
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Find answers to common questions about WebCraft Solutions.
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto divide-y-2 divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <button
                onClick={() => toggleFAQ(index)}
                className="text-left w-full flex justify-between items-start text-gray-900"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <span className="ml-6 h-7 flex items-center">
                  {openIndex === index ? (
                    <ChevronUp className="h-6 w-6 text-indigo-500" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-gray-400" />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className="mt-2 pr-12">
                  <p className="text-base text-gray-500">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#" className="text-base font-medium text-indigo-600 hover:text-indigo-500">
            Still have questions? Contact our support team
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
