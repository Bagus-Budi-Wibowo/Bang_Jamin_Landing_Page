"use client";

import { useEffect, PropsWithChildren } from "react";

export default function AOSProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const init = () => {
      const elements =
        document.querySelectorAll<HTMLElement>("[data-aos]");

      if (!elements.length) return;

      observer?.disconnect();

      observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            const el = entry.target as HTMLElement;

            const delay = Number(el.dataset.aosDelay ?? 0);

            setTimeout(() => {
              el.classList.add("aos-animate");
            }, delay);

            obs.unobserve(el);
          });
        },
        { threshold: 0.15 }
      );

      elements.forEach((el) => {
        if (!el.classList.contains("aos-init")) {
          el.classList.add("aos-init");
        }
        observer!.observe(el);
      });
    };

    const run = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          init();
        });
      });
    };

    // initial run
    run();

    // detect DOM change and run init function
    const mutationObserver = new MutationObserver(() => {
      run();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer?.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return <>{children}</>;
}