import { StaticImageData } from "next/image";

import sneakersPageImg from "@/assets/images/projects/ecommerce-product-page.png";
import sunnySidePageImg from "@/assets/images/projects/ecommerce-product-page.png";

export interface ProjectProps {
  img: StaticImageData;
  title: string;
}

export const projects: ProjectProps[] = [
  {
    img: sneakersPageImg,
    title: "Sneakers",
  },

  {
    img: sunnySidePageImg,
    title: "SunnySide Agency",
  },
];
