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


export const primaryPrefixes = ["DE"] 


export const countryPrefixes: CountryPrefixes = {
    "DE": { en: "Germany", prefix: "+49" },
    "AT": { en: "Austria", prefix: "+43" },
    "BE": { en: "Belgium", prefix: "+32" },
    "BG": { en: "Bulgaria", prefix: "+359" },
    "HR": { en: "Croatia", prefix: "+385" },
    "CY": { en: "Cyprus", prefix: "+357" },
    "CZ": { en: "Czechia", prefix: "+420" },
    "DK": { en: "Denmark", prefix: "+45" },
    "EE": { en: "Estonia", prefix: "+372" },
    "FI": { en: "Finland", prefix: "+358" },
    "FR": { en: "France", prefix: "+33" },
    "GR": { en: "Greece", prefix: "+30" },
    "HU": { en: "Hungary", prefix: "+36" },
    "IE": { en: "Ireland", prefix: "+353" },
    "IT": { en: "Italy", prefix: "+39" },
    "LV": { en: "Latvia", prefix: "+371" },
    "LT": { en: "Lithuania", prefix: "+370" },
    "LU": { en: "Luxembourg", prefix: "+352" },
    "MT": { en: "Malta", prefix: "+356" },
    "NL": { en: "Netherlands", prefix: "+31" },
    "PL": { en: "Poland", prefix: "+48" },
    "PT": { en: "Portugal", prefix: "+351" },
    "RO": { en: "Romania", prefix: "+40" },
    "SK": { en: "Slovakia", prefix: "+421" },
    "SI": { en: "Slovenia", prefix: "+386" },
    "ES": { en: "Spain", prefix: "+34" },
    "SE": { en: "Sweden", prefix: "+46" },
    "GB": { en: "United Kingdom", prefix: "+44" },
    "US": { en: "United States", prefix: "+1" }
  }  
