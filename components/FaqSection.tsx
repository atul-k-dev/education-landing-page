"use client";

import React, { useState } from "react";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How much does a wallpaper installation cost?",
    answer: "The cost varies depending on the size of your space, the type of wallpaper chosen (e.g., standard, textured, or custom murals), and the current condition of your walls. We provide personalized quotes after a brief initial consultation.",
  },
  {
    question: "Will I need to prepare my walls beforehand?",
    answer: "In most cases, we ask that you clear the immediate area of furniture. We take care of minor wall preparations, such as smoothing small bumps and applying primer. For significant repairs, we can advise you beforehand.",
  },
  {
    question: "How long will the installation process take?",
    answer: "A standard-sized room typically takes about 1 to 2 days from start to finish. Larger projects or intricate patterns that require precise matching might take a bit longer, but we always aim to minimize disruption.",
  },
  {
    question: "Can you work with textured or uneven walls?",
    answer: "Yes, though highly textured walls may require a wall liner or skim coating before applying the wallpaper to ensure a flawless, smooth finish. We can assess your walls during our consultation.",
  },
  {
    question: "Do you offer maintenance or repair services?",
    answer: "Yes! While our wallpapers are highly durable, we understand that accidents happen. We offer minor repair services and can guide you on the best ways to clean and maintain your specific type of wallpaper.",
  },
  {
    question: "What areas do you provide services in?",
    answer: "We primarily serve the Patna, Bihar area and surrounding communities. For large-scale or commercial projects, we are occasionally available for travel, so feel free to reach out to discuss your location.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-24 md:py-32 px-4 lg:px-16 text-black bg-[#fffada] z-30">
      <div className="mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Left Side */}
        <div className="flex-1 ">
          <span className="bg-[#f58d3c] text-[13px] font-medium px-4 py-1.5 rounded-full inline-block text-black shadow-sm mb-6">
            FAQs
          </span>
          <h2 className="font-serif text-5xl md:text-[4rem] leading-[1.05] tracking-tight mb-6">
            Answering <br />
            your <span className="italic font-light">questions</span>
          </h2>
          <p className="text-gray-600 text-[1.05rem] leading-relaxed mb-10">
            Got more questions? Reach out to us using the button below
          </p>
          <button className="flex items-center gap-4 bg-[#f58d3c] hover:bg-[#f58d3c] transition-colors rounded-full pl-6 pr-2 py-2 text-[14px] font-medium text-black w-max group border border-black/5">
            Get in touch
            <div className="bg-[#111] text-white rounded-full p-2 group-hover:bg-[#f58d3c] group-hover:text-black transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </button>
        </div>

        {/* Right Side - Accordion */}
        <div className="flex-[1.5] w-full mt-4 lg:mt-0">
          <div className="flex flex-col border-t border-black/10">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-black/10">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
                >
                  <span className="font-serif text-[1.4rem] md:text-[1.6rem] text-[#111] pr-8">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-black/5 group-hover:bg-black/5 transition-colors">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-black" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-black" />
                    )}
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-[300px] opacity-100 pb-8" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600 text-[1.05rem] leading-relaxed pr-12">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
