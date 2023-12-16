import { StaticImageData } from "next/image";

import sneakersPageImg from "@/assets/images/projects/ecommerce-product-page.png";
import sunnySidePageImg from "@/assets/images/projects/sunnyside-agency-landing-page.png";

export interface ProjectProps {
  img: StaticImageData;
  text: string;
  link: string;
  key: number;
}

export const projects: ProjectProps[] = [
  {
    img: sneakersPageImg,
    text: "Sneakers",
    link: "https://ecommerce-product-page-three-chi.vercel.app/",
    key: 1,
  },

  {
    img: sunnySidePageImg,
    text: "SunnySide Agency",
    link: "https://eubiel178.github.io/sunnyside-agency-landing-page/",
    key: 2,
  },
];
