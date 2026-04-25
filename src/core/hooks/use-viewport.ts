"use client";

import { useViewportStore } from "../store/viewport-store";

const useViewport = () => {
  const { width, height, device, isMobile, isTablet, isDesktop } = useViewportStore();

  return {
    width,
    height,
    device,
    isMobile,
    isTablet,
    isDesktop
  };
};

export default useViewport;