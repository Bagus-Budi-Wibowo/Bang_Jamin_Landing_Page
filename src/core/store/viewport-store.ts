import { create } from "zustand";

type DeviceType = "mobile" | "tablet" | "desktop";

interface ViewportState {
  width: number;
  height: number;
  device: DeviceType;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  setViewport: (width: number, height: number) => void;
}

const getDevice = (width: number): DeviceType => {
  if (width < 768) return "mobile";
  if (width < 1024) return "tablet";
  return "desktop";
};

export const useViewportStore = create<ViewportState>((set) => ({
  width: 0,
  height: 0,
  device: "desktop",
  isMobile: false,
  isTablet: false,
  isDesktop: true,

  setViewport: (width, height) => {
    const device = getDevice(width);

    set({
      width,
      height,
      device,
      isMobile: device === "mobile",
      isTablet: device === "tablet",
      isDesktop: device === "desktop",
    });
  },
}));