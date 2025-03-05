
import { FooterProps } from "@/components/footer";

export const footer: FooterProps = {
  baseLabel: "support",
  people: [
    { name: "Noel Graf", email: "hello@ecommerceberlin.com", phone: "+49 305 201 51 10" },
    { name: "Lucas Zarna", email: "sales@ecommerceberlin.com", phone: "+49 176 316 244 92" },
  ],
  links: [
    { label: "navigation.menu.visit", href: "/visit" },
    { label: "navigation.menu.exhibit", href: "/exhibit" },
  ],

  legal: [
    { label: "legal.imprint", href: "/legal/imprint" },
    { label: "legal.visitors", href: "/legal/visitors" },
    { label: "legal.exhibitors", href: "/legal/exhibitors" },
    { label: "legal.cookies", href: "/legal/cookies" },
    { label: "legal.visitors-data", href: "/legal/visitors-data" },
  ],

  social: [
    { label: "facebook", href: "https://www.facebook.com/ecommerceberlin/" },
    { label: "instagram", href: "https://www.instagram.com/ecommerce_berlin_expo/" },
    { label: "linkedin", href: "https://www.linkedin.com/company/e-commerce-berlin-expo/" },
    { label: "x", href: "https://x.com/ecommerceberlin" },
    { label: "youtube", href: "https://www.youtube.com/@e-commerceberlinexpo" },
  ]
};