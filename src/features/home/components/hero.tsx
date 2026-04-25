"use client";

import Image from "next/image";
import CurveSVG from "@/src/core/components/svg/curve";
import CarSvg from "@/src/core/components/svg/car";
import HealthSvg from "@/src/core/components/svg/health";
import CatSvg from "@/src/core/components/svg/cat";
import PlaneSvg from "@/src/core/components/svg/plane";
import StarGroupSvg from "@/src/core/components/svg/star-group";
import NoteSvg from "@/src/core/components/svg/note";
import ChatSvg from "@/src/core/components/svg/chat";
import { Badge } from "@/src/core/components/common/badge";
import { Button } from "@/src/core/components/common/button";
import { Card } from "@/src/core/components/common/card";

const Hero = () => {
  return (
    <section className="relative bg-bj-melon overflow-hidden">
      {/* Decorative Curve */}
      <div 
        className="absolute w-full top-[30%] md:top-[50%] -translate-y-1/2 z-0" 
      >
        <CurveSVG />
      </div>

      {/* Decoration wave arrow for mobile */}
      <div className="absolute top-[41%] md:top-[55%] left-[40%] md:left-[35%] -translate-x-1/2 -translate-y-1/2 z-50">
        <Image
          src="/assets/images/wave-arrow.webp"
          alt="Cloud"
          width={500}
          height={300}
          loading="lazy"
          className="block lg:hidden h-auto w-[45%] md:w-[80%] animate-bj-bounce"
        />
      </div>
      
      <div className="relative w-full lg:max-w-7xl px-4 mx-auto">
        {/* Heading Section */}
        <div className="relative mx-auto z-0 px-4 pt-6 lg:mb-[80px]">
          <div className="flex flex-col items-center">
            <h1 className="text-[34px] md:text-[66px] text-center text-white font-bj-heading font-semibold ">#TulusTanpaModus</h1>
            <p className="text-[16px] md:text-[22px] text-center text-white font-bj-content">Layanan Asuransi dengan Harga Fair dan Transparan, Klaim Mudah, Layanan Handal</p>
          </div>
        </div>

        {/* Main Section */}
        <div className="flex flex-wrap items-center pb-10 lg:pb-0">
          <Card className="order-2 lg:order-1 w-full lg:w-1/2 flex flex-col hover-scale-shadow transition-all duration-700 hover:scale-[1.025] cursor-pointer p-6 md:p-8 z-10">
            <div className="flex flex-col gap-5">
              <div 
                data-aos="fade-right"
                data-aos-duration="1000"
                className="flex items-center gap-3"
              >
                <span className="bg-black text-base text-white font-bj-heading font-semibold rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">1</span>
                <p className="text-[18px] md:text-2xl font-bj-heading font-semibold">Pilih Perlindungan</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div 
                  data-aos="zoom-in"
                  data-aos-duration="300"
                  className="border border-gray-200 hover:border-bj-text-muted rounded-2xl px-3 md:px-6 py-3.5"
                >
                  <div className="flex flex-col md:flex-row items-center gap-2">
                    <CarSvg />
                    <div className="flex flex-col items-center md:items-start">
                      <p className="text-sm font-bj-content font-medium">Kendaraan</p>
                      <Badge className="border-bj-text-muted">
                        <p className="text-xs font-bj-content font-medium flex items-center gap-1">
                          <span>Tersedia</span>
                          <StarGroupSvg className="w-2" />
                        </p>
                      </Badge>
                    </div>
                  </div>
                </div>

                <div 
                  data-aos="zoom-in"
                  data-aos-duration="300"
                  data-aos-delay="100"
                  className="border border-gray-200 hover:border-bj-text-muted rounded-2xl px-3 md:px-6 py-3.5"
                >
                  <div className="flex flex-col md:flex-row items-center gap-2">
                    <CatSvg />
                    <div className="flex flex-col items-center md:items-start">
                      <p className="text-sm font-bj-content font-medium">Hewan</p>
                      <Badge className="border-[#e24c85] text-[#e24c85]">
                        <p className="text-xs font-bj-content font-medium">Segera Hadir</p>
                      </Badge>
                    </div>
                  </div>
                </div>

                <div 
                  data-aos="zoom-in"
                  data-aos-duration="300"
                  data-aos-delay="200"
                  className="border border-gray-200 hover:border-bj-text-muted rounded-2xl px-3 md:px-6 py-3.5"
                >
                  <div className="flex flex-col md:flex-row items-center gap-2">
                    <HealthSvg />
                    <div className="flex flex-col items-center md:items-start">
                      <p className="text-sm font-bj-content font-medium">Kesehatan</p>
                      <Badge className="border-[#e24c85] text-[#e24c85]">
                        <p className="text-xs font-bj-content font-medium">Segera Hadir</p>
                      </Badge>
                    </div>
                  </div>
                </div>

                <div 
                  data-aos="zoom-in"
                  data-aos-duration="300"
                  data-aos-delay="300"
                  className="border border-gray-200 hover:border-bj-text-muted rounded-2xl px-3 md:px-6 py-3.5"
                >
                  <div className="flex flex-col md:flex-row items-center gap-2">
                    <PlaneSvg />
                    <div className="flex flex-col items-center md:items-start">
                      <p className="text-sm font-bj-content font-medium">Perjalanan</p>
                      <Badge className="border-[#e24c85] text-[#e24c85]">
                        <p className="text-xs font-bj-content font-medium">Segera Hadir</p>
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-4 mt-10">
              <div 
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="200"
                className="flex items-center gap-2"
              >
                <span className="border border-black text-base text-black font-bj-heading font-semibold rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">2</span>
                <p className="text-[18px] md:text-2xl font-bj-heading font-semibold">Apa yang bisa kami bantu?</p>
              </div>

              <div className="flex items-center gap-2 md:gap-6">
                <div 
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                  className="w-full flex flex-col items-center gap-3"
                >
                  <Button className="w-full h-[75px] flex flex-col items-center gap-1">
                    <NoteSvg />
                    <p>Buat Simulasi</p>
                  </Button>

                  <p className="text-bj-text-muted text-sm font-bj-content font-medium">
                    <span className="text-black font-black">35+</span> Penyedia
                  </p>
                </div>
                
                <p 
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                  className="hidden md:block relative text-bj-text-muted -mt-8"
                >
                  Atau
                </p>

                <div 
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="550"
                  className="w-full flex flex-col items-center gap-3"
                >
                  <Button className="w-full h-[75px] bg-black hover:bg-black/80 flex flex-col items-center gap-1">
                    <ChatSvg />
                    <p>Buat Simulasi</p>
                  </Button>

                  <p className="text-bj-text-muted text-sm font-bj-content font-medium">
                    <span className="text-black font-black">4k+</span> Konsultan
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div 
            data-aos="fade-left"
            data-aos-duration="1000"
            className="order-1 lg:order-2 w-full lg:w-1/2 h-full"
          >
            {/* Cloud (background layer) - desktop only */}
            <Image
              src="/assets/images/cloud.webp"
              alt="Cloud"
              width={500}
              height={300}
              loading="lazy"
              className="hidden lg:block absolute bottom-0 right-0 w-[97%] h-auto z-0"
            />

              {/* Character (foreground layer) */}
            <Image
              priority
              src="/assets/images/character-1.webp"
              alt="Bang Jamin"
              width={470}
              height={470}
              className="
                relative
                bottom-0
                left-1/2
                -translate-x-1/2
                md:right-[-78px]
                z-10
                hover-scale
                transition-all duration-700 ease-in-out
                mt-5 md:mt-16 lg:mt-0
                w-[200px]
                md:w-[350px]
                lg:w-[470px]
                h-auto
              "
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;