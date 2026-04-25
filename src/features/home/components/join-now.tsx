"use client";

import Image from "next/image";
import CurveSVG from "@/src/core/components/svg/curve";
import useViewport from "@/src/core/hooks/use-viewport";
import { Button } from "@/src/core/components/common/button";
import { Card } from "@/src/core/components/common/card";
import { ChevronRightIcon } from "lucide-react";

const PRIZES_ITEMS = [
  {
    id: 1,
    title: "Electric Bike",
    image: "/assets/images/CircleCehcklist.webp",
  },
  {
    id: 2,
    title: "Mobil Impian",
    image: "/assets/images/CircleCehcklist.webp",
  },
  {
    id: 3,
    title: "Emas Batangan",
    image: "/assets/images/CircleCehcklist.webp",
  },
  {
    id: 4,
    title: "Iphone Terbaru",
    image: "/assets/images/CircleCehcklist.webp",
  },
  {
    id: 5,
    title: "Liburan Ke Jepang",
    image: "/assets/images/CircleCehcklist.webp",
  },
]

const JoinNow = () => {
  const { isMobile, isTablet } = useViewport();

  return (
    <section className="relative w-full bg-bj-lime-mist">
      {/* Decoration curve design */}
      <div className="absolute w-full top-[30%] md:top-[50%] -translate-y-1/2 z-0">
        <CurveSVG />
      </div>

      <div className="relative lg:max-w-7xl px-4 py-6 mx-auto flex flex-col items-center justify-center z-10">
        {/* Header */}
        <h1 className="text-[28px] md:text-[44px] text-center font-bj-heading font-semibold px-4 pt-4 pb-[22px]">Buruan Gabung Jadi Sahabat Bang Jamin Dan Dapatkan Beragam Hadiahnya!</h1>
        
        <div className="flex flex-wrap items-center py-4">
          {/*  content section */}
          <div className="sm:w-full md:w-1/2 flex flex-wrap gap-y-12">
            {/* prizes list section */}
            <div className="flex flex-wrap gap-x-3 lg:gap-x-5 gap-y-6 md:gap-y-10 lg:gap-y-12">
              {PRIZES_ITEMS.map((item, index) => (
                <Card 
                  key={item.id}
                  data-aos="fade-right"
                  data-aos-duration="700"
                  data-aos-delay={index * 100}
                  className="flex items-center gap-2 h-fit px-3 py-2 md:py-4 lg:px-4 lg:py-5 rounded-xl drop-shadow-[6px_6px_0px_rgba(65,64,72,0.3)] group hover-scale-shadow transition-all duration-300 hover:scale-[1.025] cursor-pointer"
                >
                  <Image
                    src={item.image}
                    alt="CircleCehcklist"
                    width={isMobile ? 20 : 40}
                    height={isMobile ? 20 : 40}
                    loading="lazy"
                    className="group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 ease-in-out"
                  />
                  <h1 className="text-base font-bj-heading font-semibold group-hover:scale-105 transition-all duration-300 ease-in-out">
                    {item.title}
                  </h1>
                </Card>
              ))}
            </div>

            {/* Button for desktop */}
            <Button 
              data-aos="zoom-in"
              data-aos-duration="700"
              data-aos-delay="600"
              className="hidden! lg:flex! text-base font-bj-content font-semibold! bg-black hover:bg-black/80 rounded-xl py-6"
            >
              Gabung Jadi Sahabat <span className="ml-5"><ChevronRightIcon /></span>
            </Button>
          </div>

          {/* Image Section */}
          <div 
            data-aos="fade-left"
            data-aos-duration="700"
            className="sm:w-full md:w-1/2 hover-scale transition-all duration-300 hover:scale-[1.025] cursor-pointer"
          >
            <Image
              src="/assets/images/bjWithMoney.webp"
              alt="bjWithMoney"
              width={(isMobile || isTablet) ? 300 : 500}
              height={(isMobile || isTablet) ? 300 : 500}
              loading="lazy"
              className="object-cover"
            />
          </div>

          {/* Button for mobile and tablet */}
          <Button className="flex md:absolute bottom-10 right-20 lg:hidden! mx-auto text-base! font-bj-content font-semibold! bg-black hover:bg-black/80 rounded-xl mt-8 py-6">
            Gabung Jadi Sahabat <span className="ml-4"><ChevronRightIcon /></span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JoinNow;