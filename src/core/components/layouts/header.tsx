"use client"

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import StarGroupSvg from "@/src/core/components/svg/star-group";
import Divider from "@/src/core/components/common/divider";
import { ChevronDown, MenuIcon, XIcon } from "lucide-react";
import { NAVBAR_MENU, NavbarMenuType } from "@/src/core/constant/menus";
import { Button } from "@/src/core/components/common/button";
import { cn } from "@/src/core/lib/utils";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between w-full lg:max-w-7xl h-[90px] mx-auto px-4">
      <Image
        src="/assets/images/logo.webp"
        alt="Bang Jamin"
        width={100}
        height={100}
      />

      <button
        className="lg:hidden"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </button>

      {/* DESKTOP MENU */}
      <DesktopMenu />

      {/* MOBILE MENU */}
      <MobileMenu open={open} setOpen={setOpen} />
    </nav>
  );
};

export { Header };

const DesktopMenu = () => {
  return (
    <ul className="hidden lg:flex justify-end gap-6 h-full">
      {NAVBAR_MENU.filter((item: NavbarMenuType) => item.label !== "Beranda").map((item: NavbarMenuType) => {
        if (item.type === "Link") {
          const hasChildren = item.children && item.children.length > 0;

          return (
            <li
              key={item.label}
              className="relative flex items-center h-full px-4 group"
            >
              <Link
                href={item.path || "#"}
                className="text-base font-medium font-bj-content group-hover:text-bj-primary transition-colors duration-300"
              >
                {item.label}
              </Link>

              {hasChildren && (
                <ChevronDown
                  size={16}
                  className="transition-transform duration-300 group-hover:rotate-180"
                />
              )}

              {/* underline (sekarang nempel bawah header) */}
              <span
                className="
                  pointer-events-none
                  absolute bottom-0 left-0
                  h-[2px] w-full
                  origin-center
                  scale-x-0
                  bg-bj-primary
                  transition-transform duration-300
                  group-hover:scale-x-100
                "
              />

              {/* DROPDOWN */}
              {hasChildren && (
                <div 
                  className="
                    w-[200px]
                    absolute left-1/2 -translate-x-1/2 top-[85%] mt-4
                    opacity-0 invisible
                    -translate-y-2
                    transition-all duration-300 ease-out
                    group-hover:opacity-100
                    group-hover:visible
                    group-hover:translate-y-0
                    z-50
                  "
                >
                  <div className="bg-white rounded-2xl shadow-lg border overflow-hidden">
                    {item.children!.map((child, index) => (
                      <React.Fragment key={index}>
                        <Link 
                          href={child.path || "#"} 
                          className="flex items-center justify-between gap-8 px-6 py-4 hover:bg-bj-primary/5 transition"
                        >
                          {child.icon && (
                            <child.icon className="scale-[2.5]" />
                          )}

                          <div className="w-full flex flex-col">
                            <p className="text-base font-medium">
                              {child.label}
                            </p>

                            {child.status && (
                              <div
                                className={cn(
                                  "text-sm text-center font-medium py-1 rounded-full border-2",
                                  child.status === "Tersedia"
                                    ? "border-gray-300 text-gray-600"
                                    : "border-pink-400 text-pink-500"
                                )}
                              >
                                <p className="flex items-center justify-center gap-1">
                                  {child.status}{" "}
                                  {child.label === "Kendaraan" && <StarGroupSvg />}
                                </p>
                              </div>
                            )}
                          </div>
                        </Link>

                        {index !== item.children!.length - 1 && (
                          <Divider className="w-[80%] mx-auto" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}
            </li>
          );
        }

        return (
          <li key={item.label} className="flex items-center h-full">
            <Button
              variant="outline"
              className="text-base! text-bj-primary font-semibold! font-bj-content border-bj-primary! hover:bg-bj-primary! hover:text-white py-6 px-3.5 rounded-2xl cursor-pointer"
            >
              {item.label}
            </Button>
          </li>
        );
      })}
    </ul>
  );
};

const MobileMenu = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const toggleChildren = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/* OVERLAY */}
      <div
        className={cn(
          "fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden transition-opacity",
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setOpen(false)}
      />

      {/* SLIDE PANEL */}
      <div
        className={cn(
          "fixed top-0 left-0 h-full w-full bg-white z-999 lg:hidden transform transition-transform duration-300 ease-in-out",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between p-4">
          <button 
            onClick={() => setOpen(false)}
            aria-label="close menu"
          >
            <XIcon className="text-black" />
          </button>
        </div>

        {/* MENU */}
        <div className="flex flex-col p-6 gap-6">
          {NAVBAR_MENU.map((item, index) => {
            const hasChildren = item.children && item.children.length > 0;

            if (item.type === "Link") {
              return (
                <div key={item.label} className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.path || "#"}
                      onClick={() => {
                        if (!hasChildren) setOpen(false);
                      }}
                      className="text-base text-black font-bj-content font-bold"
                    >
                      {item.label}
                    </Link>

                    {hasChildren && (
                      <button
                        onClick={() => toggleChildren(index)}
                        className={cn(
                          "transition-transform duration-300",
                          activeIndex === index ? "rotate-180" : ""
                        )}
                      >
                        <ChevronDown className="text-black" />
                      </button>
                    )}
                  </div>

                  {hasChildren && (
                    <div
                      className={cn(
                        "flex flex-col pl-4 overflow-hidden transition-all duration-300",
                        activeIndex === index
                          ? "max-h-96 mt-3 opacity-100"
                          : "max-h-0 opacity-0"
                      )}
                    >
                      {item.children!.map((child) => (
                        <Link
                          key={child.label}
                          href={child.path || "#"}
                          onClick={() => setOpen(false)}
                          className="flex items-center justify-between gap-3 py-2 text-sm text-gray-600 hover:text-black"
                        >
                          <div className="flex items-center gap-3">
                            {child.icon && (
                              <child.icon className="w-10 h-10" />
                            )}
                            <p className="text-base font-bj-content">
                              {child.label}
                            </p>
                          </div>

                          <div
                            className={cn(
                              "text-sm text-center font-medium px-2 py-1 rounded-full border-2",
                              child.status === "Tersedia"
                                ? "border-gray-300 text-gray-600"
                                : "border-pink-400 text-pink-500"
                            )}
                          >
                            <p className="text-sm font-bj-content flex items-center gap-1">
                              {child.status} {" "}
                              {child.label === "Kendaraan" && <StarGroupSvg />}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Button
                key={item.label}
                variant="outline"
                className="w-full py-6"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Button>
            );
          })}
        </div>
      </div>
    </>
  );
};