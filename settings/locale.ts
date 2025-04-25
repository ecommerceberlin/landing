import type { CountryPrefixes } from "@/types";

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


export const primaryPrefixes = ["DE", "CH",  "AT", "NL", "BE", "FR", "ES", "IE", "IT", "CZ", "SK", "GB", "DK", "SE", "PL", "IL", "US"] 


export const countryPrefixes: CountryPrefixes = {
  "AE": { en: "United Arab Emirates", de: "Vereinigte Arabische Emirate", prefix: "+971" },
  "AL": { en: "Albania", de: "Albanien", prefix: "+355" },
  "AM": { en: "Armenia", de: "Armenien", prefix: "+374" },
  "AR": { en: "Argentina", de: "Argentinien", prefix: "+54" },
  "AT": { en: "Austria", de: "Österreich", prefix: "+43" },
  "AU": { en: "Australia", de: "Australien", prefix: "+61" },
  "BA": { en: "Bosnia & Herzegovina", de: "Bosnien und Herzegowina", prefix: "+387" },
  "BE": { en: "Belgium", de: "Belgien", prefix: "+32" },
  "BG": { en: "Bulgaria", de: "Bulgarien", prefix: "+359" },
  "BR": { en: "Brazil", de: "Brasilien", prefix: "+55" },
  "BY": { en: "Belarus", de: "Belarus", prefix: "+375" },
  "CA": { en: "Canada", de: "Kanada", prefix: "+1" },
  "CH": { en: "Switzerland", de: "Schweiz", prefix: "+41" },
  "CN": { en: "China", de: "China", prefix: "+86" },
  "CY": { en: "Cyprus", de: "Zypern", prefix: "+357" },
  "CZ": { en: "Czechia", de: "Tschechien", prefix: "+420" },
  "DE": { en: "Germany", de: "Deutschland", prefix: "+49" },
  "DK": { en: "Denmark", de: "Dänemark", prefix: "+45" },
  "EE": { en: "Estonia", de: "Estland", prefix: "+372" },
  "EG": { en: "Egypt", de: "Ägypten", prefix: "+20" },
  "ES": { en: "Spain", de: "Spanien", prefix: "+34" },
  "FI": { en: "Finland", de: "Finnland", prefix: "+358" },
  "FR": { en: "France", de: "Frankreich", prefix: "+33" },
  "GB": { en: "United Kingdom", de: "Vereinigtes Königreich", prefix: "+44" },
  "GE": { en: "Georgia", de: "Georgien", prefix: "+995" },
  "GR": { en: "Greece", de: "Griechenland", prefix: "+30" },
  "HK": { en: "Hong Kong", de: "Hongkong", prefix: "+852" },
  "HR": { en: "Croatia", de: "Kroatien", prefix: "+385" },
  "HU": { en: "Hungary", de: "Ungarn", prefix: "+36" },
  "ID": { en: "Indonesia", de: "Indonesien", prefix: "+62" },
  "IE": { en: "Ireland", de: "Irland", prefix: "+353" },
  "IL": { en: "Israel", de: "Israel", prefix: "+972" },
  "IN": { en: "India", de: "Indien", prefix: "+91" },
  "IS": { en: "Iceland", de: "Island", prefix: "+354" },
  "IT": { en: "Italy", de: "Italien", prefix: "+39" },
  "JP": { en: "Japan", de: "Japan", prefix: "+81" },
  "LT": { en: "Lithuania", de: "Litauen", prefix: "+370" },
  "LU": { en: "Luxembourg", de: "Luxemburg", prefix: "+352" },
  "LV": { en: "Latvia", de: "Lettland", prefix: "+371" },
  "MA": { en: "Morocco", de: "Marokko", prefix: "+212" },
  "MD": { en: "Moldova", de: "Moldawien", prefix: "+373" },
  "ME": { en: "Montenegro", de: "Montenegro", prefix: "+382" },
  "MK": { en: "North Macedonia", de: "Nordmazedonien", prefix: "+389" },
  "MT": { en: "Malta", de: "Malta", prefix: "+356" },
  "NL": { en: "Netherlands", de: "Niederlande", prefix: "+31" },
  "NO": { en: "Norway", de: "Norwegen", prefix: "+47" },
  "PL": { en: "Poland", de: "Polen", prefix: "+48" },
  "PT": { en: "Portugal", de: "Portugal", prefix: "+351" },
  "RO": { en: "Romania", de: "Rumänien", prefix: "+40" },
  "RS": { en: "Serbia", de: "Serbien", prefix: "+381" },
  "RU": { en: "Russia", de: "Russland", prefix: "+7" },
  "SA": { en: "Saudi Arabia", de: "Saudi-Arabien", prefix: "+966" },
  "SE": { en: "Sweden", de: "Schweden", prefix: "+46" },
  "SI": { en: "Slovenia", de: "Slowenien", prefix: "+386" },
  "SK": { en: "Slovakia", de: "Slowakei", prefix: "+421" },
  "TR": { en: "Türkiye", de: "Türkei", prefix: "+90" },
  "TW": { en: "Taiwan", de: "Taiwan", prefix: "+886" },
  "UA": { en: "Ukraine", de: "Ukraine", prefix: "+380" },
  "US": { en: "United States", de: "Vereinigte Staaten", prefix: "+1" }
}
