import type { CountryPrefix } from "@/types";

const locale = process.env.NEXT_PUBLIC_LOCALE;

export function resolveAltLocale(){
    
    if(locale === "en"){
        return {
            href: "https://ecommerceberlin.de",
            locale: "de"
        };
    }else{
        return {
            href: "https://ecommerceberlin.com",
            locale: "en"
        };
    }
   
}

/**
 * primaryPrefixes must be max 8!
 */

export const primaryPrefixes = ["DE", "CH",  "AT", "NL", "BE", "FR", "ES"] 


export const countryPrefixes: CountryPrefix[] = [
  { code: "AE", en: "United Arab Emirates", de: "Vereinigte Arabische Emirate", prefix: "+971" },
  { code: "AL", en: "Albania", de: "Albanien", prefix: "+355" },
  { code: "AM", en: "Armenia", de: "Armenien", prefix: "+374" },
  { code: "AR", en: "Argentina", de: "Argentinien", prefix: "+54" },
  { code: "AT", en: "Austria", de: "Österreich", prefix: "+43" },
  { code: "AU", en: "Australia", de: "Australien", prefix: "+61" },
  { code: "BA", en: "Bosnia & Herzegovina", de: "Bosnien und Herzegowina", prefix: "+387" },
  { code: "BE", en: "Belgium", de: "Belgien", prefix: "+32" },
  { code: "BG", en: "Bulgaria", de: "Bulgarien", prefix: "+359" },
  { code: "BR", en: "Brazil", de: "Brasilien", prefix: "+55" },
  { code: "BY", en: "Belarus", de: "Belarus", prefix: "+375" },
  { code: "CA", en: "Canada", de: "Kanada", prefix: "+1" },
  { code: "CH", en: "Switzerland", de: "Schweiz", prefix: "+41" },
  { code: "CN", en: "China", de: "China", prefix: "+86" },
  { code: "CY", en: "Cyprus", de: "Zypern", prefix: "+357" },
  { code: "CZ", en: "Czechia", de: "Tschechien", prefix: "+420" },
  { code: "DE", en: "Germany", de: "Deutschland", prefix: "+49" },
  { code: "DK", en: "Denmark", de: "Dänemark", prefix: "+45" },
  { code: "EE", en: "Estonia", de: "Estland", prefix: "+372" },
  { code: "EG", en: "Egypt", de: "Ägypten", prefix: "+20" },
  { code: "ES", en: "Spain", de: "Spanien", prefix: "+34" },
  { code: "FI", en: "Finland", de: "Finnland", prefix: "+358" },
  { code: "FR", en: "France", de: "Frankreich", prefix: "+33" },
  { code: "GB", en: "United Kingdom", de: "Vereinigtes Königreich", prefix: "+44" },
  { code: "GE", en: "Georgia", de: "Georgien", prefix: "+995" },
  { code: "GR", en: "Greece", de: "Griechenland", prefix: "+30" },
  { code: "HK", en: "Hong Kong", de: "Hongkong", prefix: "+852" },
  { code: "HR", en: "Croatia", de: "Kroatien", prefix: "+385" },
  { code: "HU", en: "Hungary", de: "Ungarn", prefix: "+36" },
  { code: "ID", en: "Indonesia", de: "Indonesien", prefix: "+62" },
  { code: "IE", en: "Ireland", de: "Irland", prefix: "+353" },
  { code: "IL", en: "Israel", de: "Israel", prefix: "+972" },
  { code: "IN", en: "India", de: "Indien", prefix: "+91" },
  { code: "IS", en: "Iceland", de: "Island", prefix: "+354" },
  { code: "IT", en: "Italy", de: "Italien", prefix: "+39" },
  { code: "JP", en: "Japan", de: "Japan", prefix: "+81" },
  { code: "LT", en: "Lithuania", de: "Litauen", prefix: "+370" },
  { code: "LU", en: "Luxembourg", de: "Luxemburg", prefix: "+352" },
  { code: "LV", en: "Latvia", de: "Lettland", prefix: "+371" },
  { code: "MA", en: "Morocco", de: "Marokko", prefix: "+212" },
  { code: "MD", en: "Moldova", de: "Moldawien", prefix: "+373" },
  { code: "ME", en: "Montenegro", de: "Montenegro", prefix: "+382" },
  { code: "MK", en: "North Macedonia", de: "Nordmazedonien", prefix: "+389" },
  { code: "MT", en: "Malta", de: "Malta", prefix: "+356" },
  { code: "NL", en: "Netherlands", de: "Niederlande", prefix: "+31" },
  { code: "NO", en: "Norway", de: "Norwegen", prefix: "+47" },
  { code: "PL", en: "Poland", de: "Polen", prefix: "+48" },
  { code: "PT", en: "Portugal", de: "Portugal", prefix: "+351" },
  { code: "RO", en: "Romania", de: "Rumänien", prefix: "+40" },
  { code: "RS", en: "Serbia", de: "Serbien", prefix: "+381" },
  { code: "RU", en: "Russia", de: "Russland", prefix: "+7" },
  { code: "SA", en: "Saudi Arabia", de: "Saudi-Arabien", prefix: "+966" },
  { code: "SE", en: "Sweden", de: "Schweden", prefix: "+46" },
  { code: "SI", en: "Slovenia", de: "Slowenien", prefix: "+386" },
  { code: "SK", en: "Slovakia", de: "Slowakei", prefix: "+421" },
  { code: "TR", en: "Türkiye", de: "Türkei", prefix: "+90" },
  { code: "TW", en: "Taiwan", de: "Taiwan", prefix: "+886" },
  { code: "UA", en: "Ukraine", de: "Ukraine", prefix: "+380" },
  { code: "US", en: "United States", de: "Vereinigte Staaten", prefix: "+1" }
]
