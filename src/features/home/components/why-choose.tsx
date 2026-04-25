"use client";

import Image from "next/image";

const WHY_CHOOSE_ITEMS = [
  {
    id: 1,
    title: "Harga Fair dan Transparant",
    description: "Kami menawarkan harga yang adil, jelas dan transparan",
    image: "/assets/images/transparent-price.webp",
  },
  {
    id: 2,
    title: "Polis Terbit 1 x 24 Jam",
    description: "Polis terbit maksimal 1 x 24 jam.",
    image: "/assets/images/choosed-product.webp",
  },
  {
    id: 3,
    title: "Klaim Terbit 1 x 24 Jam",
    description: "Persetujuan klaim terbit maksimal 1 x 24 jam",
    image: "/assets/images/claim-service.webp",
  },
];

const WhyChoose = () => {
  return (
    <section className="w-full">
      <div className="lg:max-w-7xl px-4 py-6 mx-auto flex flex-col items-center">
        {/* Header */}
        <h1 className="text-[28px] lg:text-[44px] text-center font-bj-heading font-semibold px-4 pt-4 pb-[22px]">Kenapa Harus Bang Jamin</h1>
        
        {/* Content List */}
        <div className="flex flex-wrap justify-center md:justify-between gap-3 md:gap-0 p-4 md:p-[40px]">
          {WHY_CHOOSE_ITEMS.map((item) => (
            <div
              key={item.id}
              data-aos="zoom-in"
              data-aos-duration="700"
              data-aos-delay={item.id * 100}
              className="sm:w-full md:w-1/3 flex flex-col items-center gap-4 group cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={300}
                loading="lazy"
                sizes="(max-width: 768px) 200px, 300px"
                className="
                  w-[200px]
                  md:w-[300px]
                  h-auto
                  group-hover:scale-[1.08]
                  transition-transform duration-300 ease-out
                "
              />
              <div className="w-full lg:w-3/4 flex flex-col items-center gap-3 px-12 md:px-6">
                <h1 className="text-[18px] md:text-[28px] font-bj-heading text-center font-semibold group-hover:scale-[1.05] transition-transform duration-300 ease-out">
                  {item.title}
                </h1>
                <p className="text-base text-bj-text-muted text-center font-bj-content group-hover:scale-[1.05] transition-transform duration-300 ease-out">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;