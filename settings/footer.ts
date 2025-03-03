
import { FooterProps } from "@/components/footer";

export const footer: FooterProps = {
  baseLabel: "support",
  people: [
    { name: "Noel Graf", email: "hello@ecommerceberlin.com", phone: "+49 305 201 51 10" },
    { name: "Lucas Zarna", email: "sales@ecommerceberlin.com", phone: "+49 176 316 244 92" },
  ],
  links: [
    // { label: "visit", href: "/visit" },
    // { label: "exhibit", href: "/exhibit" },
  ],

  legal: [
    { label: "imprint", href: "/imprint" },
    { label: "visitors.legal", href: "/visiotrs-legal" },
    { label: "exhibitors.legal", href: "/exhibitors-legal" },
    { label: "cookies", href: "/cookies" },
    { label: "visiors.data", href: "/visitors-data" },
  ],

  social: [
    { label: "facebook", href: "https://www.facebook.com/ecommerceberlin/" },
    { label: "instagram", href: "https://www.instagram.com/ecommerce_berlin_expo/" },
    { label: "linkedin", href: "https://www.linkedin.com/company/e-commerce-berlin-expo/" },
  ]
};