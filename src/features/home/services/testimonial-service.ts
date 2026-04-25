import { Testimonial } from "@/src/features/home/types/testimonial";
import testimonialData from "@/src/features/home/data/testimonial.json";

export const getTestimonials = async (): Promise<Testimonial[]> => {
  await new Promise((r) => setTimeout(r, 500));

  return testimonialData;
};