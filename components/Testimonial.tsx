"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { testimonials } from "@/constants";

const Testimonial = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [animationDuration, setAnimationDuration] = useState(60);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const scrollWidth = scrollContainer.scrollWidth;
      const containerWidth = scrollContainer.offsetWidth;
      const newDuration = (scrollWidth / containerWidth) * 20; // Adjust 20 to change base speed
      setAnimationDuration(newDuration);
    }
  }, []);

  return (
    <section className="py-24 bg-gray-100">
      <div className="max-container padding-container">
        <h2 className="bold-40 lg:bold-64 text-center mb-10">
          What Our Users Say
        </h2>
        <div ref={scrollRef} className="flex overflow-hidden">
          <div
            className="flex animate-scroll"
            style={{ animationDuration: `${animationDuration}s` }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-[300px] mx-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h3 className="bold-18">{testimonial.name}</h3>
                      <p className="regular-14 text-gray-30">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="regular-16 text-gray-50">
                    &quot;{testimonial.comment}&quot;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
