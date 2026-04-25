import { ComponentType, SVGProps } from "react";
import CarSvg from "@/src/core/components/svg/car";
import CatSvg from "@/src/core/components/svg/cat";
import HealthSvg from "@/src/core/components/svg/health";
import PlaneSvg from "@/src/core/components/svg/plane";


export type NavbarMenuType = {
  type: "Link" | "Button";
  label: string;
  status?: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  path?: string;
  children?: NavbarMenuType[];
};

export const NAVBAR_MENU: NavbarMenuType[] = [
  {
    type: "Link",
    label: "Beranda",
    path: "/"
  },
  {
    type: "Link",
    label: "Produk Asuransi",
    path: "#",
    children: [
      {
        type: "Link",
        label: "Kendaraan",
        status: "Tersedia",
        icon: CarSvg,
        path: "/produk-asuransi/asuransi-kendaraan"
      },
      {
        type: "Link",
        label: "Hewan",
        status: "Segera Hadir",
        icon: CatSvg,
        path: "/produk-asuransi/asuransi-hewan"
      },
      {
        type: "Link",
        label: "Kesehatan",
        status: "Segera Hadir",
        icon: HealthSvg,
        path: "/produk-asuransi/asuransi-kesehatan"
      },
      {
        type: "Link",
        label: "Perjalanan",
        status: "Segera Hadir",
        icon: PlaneSvg,
        path: "/produk-asuransi/asuransi-perjalanan"
      },
    ]
  },
  {
    type: "Link",
    label: "Tentang Kami",
    path: "/tentang-kami"
  },
  {
    type: "Link",
    label: "Klaim",
    path: "/klaim"
  },
  {
    type: "Button",
    label: "Gabung Jadi Sahabat",
  },
];