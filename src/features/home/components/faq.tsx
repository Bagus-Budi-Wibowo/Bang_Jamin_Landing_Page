"use client";

import Image from "next/image";
import Accordion, { AccordionItem } from "@/src/core/components/common/accordion";
import CurveSVG from "@/src/core/components/svg/curve";
import { Card } from "@/src/core/components/common/card";
import { useFaq } from "@/src/features/home/hooks/use-faq";

const PARTNER_DATA: {
  id: number;
  path: string;
}[] = [
  {
    id: 1,
    path: "/assets/images/MTWI.webp",
  },
  {
    id: 2,
    path: "/assets/images/Zurich.webp",
  },
  {
    id: 3,
    path: "/assets/images/Mega.webp",
  },
  {
    id: 4,
    path: "/assets/images/Artarindo.webp",
  },
  {
    id: 5,
    path: "/assets/images/Staco.webp",
  },
  {
    id: 6,
    path: "/assets/images/Sahabat.webp",
  },
  {
    id: 7,
    path: "/assets/images/Tugu.webp",
  },
  {
    id: 8,
    path: "/assets/images/Reliance.webp",
  },
  {
    id: 9,
    path: "/assets/images/Sinarmas.webp",
  },
  {
    id: 10,
    path: "/assets/images/TOB.webp",
  },
  {
    id: 11,
    path: "/assets/images/BRINS.webp",
  },
  {
    id: 12,
    path: "/assets/images/Zurich-Syariah.webp",
  },
  {
    id: 13,
    path: "/assets/images/Mega-Syariah.webp",
  },
  {
    id: 14,
    path: "/assets/images/Raksa.webp",
  },
  {
    id: 15,
    path: "/assets/images/MAG.webp",
  },
  {
    id: 16,
    path: "/assets/images/Oona.webp",
  },
];

const Faq = () => {
  const { data: faqData } = useFaq();

  console.log(faqData);
  const faqs = faqData ?? faqData ?? [];

  return (
    <section className="relative w-full overflow-hidden">
      {/* Decoration curve design */}
      <div className="absolute w-full top-[30%] md:top-[50%] -translate-y-1/2 z-0">
        <CurveSVG strokeColor="#CFCFCF" />
      </div>

      <div className="relative lg:max-w-7xl px-4 py-6 mx-auto flex flex-col items-center justify-center z-10">
        {/* Header */}
        <h1 className="text-[28px] md:text-[44px] text-center font-bj-heading font-semibold px-4 pt-4 pb-[22px]">Yang Sering Ditanyakan</h1>
        
        {/* FAQ List */}
        <div className="w-full pb-6">
          <Card className="p-0 overflow-hidden">
            <Accordion multiple>
              {faqs?.map((item, index) => (
                <AccordionItem
                  data-aos="fade-up"
                  data-aos-duration={1000}
                  data-aos-delay={50 * index} 
                  key={item.id}
                  title={item.question}
                >
                  <div dangerouslySetInnerHTML={{ __html: item.answer }}></div>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>

        {/* Partner List */}
        <div className="flex flex-wrap items-center justify-center pb-10 md:px-4">
          {PARTNER_DATA.map((item) => (
            <Image
              key={item.id}
              src={item.path}
              alt="partner"
              width={150}
              height={150}
              loading="lazy"
              sizes="(max-width: 768px) 90px, 150px"
              className="
                w-[90px]
                md:w-[150px]
                h-auto
              "
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;