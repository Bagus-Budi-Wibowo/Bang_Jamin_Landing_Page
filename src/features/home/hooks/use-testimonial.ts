import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/src/core/constant/query-keys";
import { Testimonial } from "@/src/features/home/types/testimonial";
import { getTestimonials } from "@/src/features/home/services/testimonial-service";

export const useTestimonial = () => {
  return useQuery<Testimonial[]>({
    queryKey: QUERY_KEYS.TESTIMONIAL(),
    queryFn: getTestimonials,
  });
};