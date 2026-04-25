"use client";

import { useEffect } from "react";import { useViewportStore } from "../store/viewport-store";
;

export default function ViewportProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const setViewport = useViewportStore((state) => state.setViewport);

  useEffect(() => {
    const handleResize = () => {
      setViewport(window.innerWidth, window.innerHeight);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [setViewport]);

  return <>{children}</>;
}