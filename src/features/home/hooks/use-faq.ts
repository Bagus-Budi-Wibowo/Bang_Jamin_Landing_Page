import { useQuery } from "@tanstack/react-query";
import { FaqItem } from "@/src/features/home/types/faq-type";
import { getFaqs } from "@/src/features/home/services/faq-service";
import { QUERY_KEYS } from "@/src/core/constant/query-keys";

export const useFaq = () => {
  return useQuery<FaqItem[]>({
    queryKey: QUERY_KEYS.FAQ(),
    queryFn: getFaqs,
  });
};