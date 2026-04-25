"use client";

import { useMemo } from "react";
import { cn } from "@/src/core/lib/utils";
import { Card } from "@/src/core/components/common/card";
import { useTestimonial } from "@/src/features/home/hooks/use-testimonial";
import Image from "next/image";
import StarSVG from "@/src/core/components/svg/star";
import useViewport from "@/src/core/hooks/use-viewport";
import QuotationSVG from "@/src/core/components/svg/quotation";

const Testimonial = () => {
  const { isMobile } = useViewport();
  const { data: testimonials, isLoading: isLoadingTestimonials } = useTestimonial();

  const mapBackgroundColor = useMemo(() => {
    const colors = [
      "bg-bj-khaki",
      "bg-bj-lime-mist",
      "bg-bj-coral-tint",
      "bg-bj-lavender",
    ];

    return (index: number) => colors[index];
  }, []);

  return (
    <section className="w-full bg-bj-coral-tint">
      <div className="relative lg:max-w-7xl px-4 py-6 mx-auto flex flex-col items-center">
        {/* Header */}
        <h1 className="text-[28px] md:text-[44px] text-center font-bj-heading font-semibold py-4">Dengarkan Kata Mereka</h1>
        
        {/* Decoration start */}
        <div className="absolute right-8 top-20 animate-spin-float">
          <StarSVG />
        </div>

        {/* Testimonial List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 py-4 md:py-6 mb-9">
          {testimonials?.map((item, index) => (
            <Card 
              key={index}
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay={index * 100}
              className={cn(
                "relative h-[242px] md:h-[270px] lg:h-[319px] flex items-end p-0 overflow-hidden group hover:hover-scale-shadow transition-all duration-500 ease-in-out cursor-pointer",
                mapBackgroundColor(index)
              )}
            >
              <div className="absolute top-7 right-7 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ease-in-out">
                <QuotationSVG />
              </div>
              <Image
                src={item.image}
                alt={item.name}
                width={isMobile ? 105 : 200}
                height={isMobile ? 105 : 200}
                loading="lazy"
                className="object-cover group-hover:scale-[1.15] transition-transform duration-500 ease-in-out"
              />
              <div className="flex flex-col self-center p-6 -ml-4">
                <div className="flex flex-col mb-6">
                  <h1 className="text-[18px] md:text-[28px] font-bj-heading font-semibold group-hover:scale-[1.05] transition-transform duration-500 ease-in-out">{item.title}</h1>
                  <p className="text-sm md:text-base font-bj-content group-hover:scale-[1.02] transition-transform duration-500 ease-in-out">{item.review}</p>
                </div>
                <div className="pl-6 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500 ease-in-out">
                  <h1 className="text-[18px] md:text-[22px] font-bj-heading font-semibold">{item.name}</h1>
                  <p className="text-sm md:text-base font-bj-content">{item.work}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;