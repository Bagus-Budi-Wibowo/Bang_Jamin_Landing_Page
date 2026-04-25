import { FaqItem } from "@/src/features/home/types/faq-type";
import faqData from "@/src/features/home/data/faq.json";

export const getFaqs = async (): Promise<FaqItem[]> => {
  await new Promise((r) => setTimeout(r, 500));

  return faqData;
};