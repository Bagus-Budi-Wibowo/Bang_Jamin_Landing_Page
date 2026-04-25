"use client";

import Image from "next/image";
import Link from "next/link";

const GetNow = () => {
  return (
    <section className="w-full bg-bj-coral-tint py-6 overflow-hidden">
      <div className="lg:max-w-7xl px-4 py-6 mx-auto flex flex-col items-center justify-center">
        {/* Header */}
        <div className="flex flex-col mb-8">
          <h1 
            data-aos="fade-up"
            data-aos-duration="500"
            className="text-[20px] text-center font-bj-heading font-semibold mb-4">Mau Tambahan Cuan? Yuk gabung jadi sahabat Bang Jamin</h1>
          <p 
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
            className="text-base text-center font-bj-content">Bang Jamin membuka kesempatan bagi semua kalangan untuk mendapat profit sebagai mitra Bang Jamin.</p>
        </div>
        
        {/* Action List */}
        <div className="flex flex-col md:flex-row gap-6">
          <Link 
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="200"
            href="#"
            className="rounded-xl overflow-hidden hover:scale-[1.09] hover:translate-y-[-8px] hover:drop-shadow-[0_8px_20px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in-out"
          >
            <Image 
              src="/assets/images/play-store.webp"
              alt="play-store"
              width={200}
              height={60}
              loading="lazy"
            />
          </Link>
          <Link 
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="300"
            href="#"
            className="rounded-xl overflow-hidden hover:scale-[1.09] hover:translate-y-[-8px] hover:drop-shadow-[0_8px_20px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in-out"
          >
            <Image 
              src="/assets/images/android.webp"
              alt="android"
              width={200}
              height={60}
              loading="lazy"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetNow;