
import { FooterProps } from "@/components/footer";

export const footer: FooterProps = {
  baseLabel: "support",
  people: [
    { name: "Noel Graf", email: "hello@ecommerceberlin.com", phone: "000000000" },
    { name: "Lucas Zarna", email: "sales@ecommerceberlin.com", phone: "000000000" },
  ],
  links: [
    { label: "visit", href: "/visit" },
    { label: "faq", href: "/faq" },
    { label: "contact", href: "/contact" },
  ],

  legal: [
    { label: "privacy", href: "/privacy" },
    { label: "terms", href: "/terms" },
  ],

  social: [
    { label: "facebook", href: "https://www.facebook.com/ecommerceberlin" },
    { label: "instagram", href: "https://www.instagram.com/ecommerceberlin" },
    { label: "linkedin", href: "https://www.linkedin.com/company/ecommerceberlin" },
  ]
};