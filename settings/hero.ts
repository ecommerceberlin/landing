import { HeroProps } from "@/components/hero/main";

export const hero: HeroProps = {
  label: "hero.title",
  secondaryLabel: "hero.description",
  image: "https://res.cloudinary.com/eventjuicer/image/upload/q_auto,f_auto,w_auto,c_scale/v1738234466/header.jpg",
  buttons: [
    {
      label: "exhibitor.role.title",
      href: "/exhibit",
    },
    {
      label: "visitor.role.title",
      href: "/visit",
    },
  ],
};