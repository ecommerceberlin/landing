import { primaryPrefixes, countryPrefixes } from "@/settings/locale";
import { CountryPrefix } from "@/types";

const locale = process.env.NEXT_PUBLIC_LOCALE || 'en';

export const howmanyPrimaryPrefixes = primaryPrefixes?.length || 0

export const getSortedCountries = () => {

  if(howmanyPrimaryPrefixes > 8){
    throw new Error("Primary prefixes must be less than 8")
  }

  const mapped = countryPrefixes.map(country => ({
    name: country[locale as keyof CountryPrefix],
    prefix: country.prefix,
    code: country.code
  }))

  const sortedAll = mapped.sort((a, b) => a.name.localeCompare(b.name))

  const sortedPrimary = sortedAll.filter(country => primaryPrefixes.includes(country.code))
  const sortedSecondary = sortedAll.filter(country => !primaryPrefixes.includes(country.code))

  return [ ...sortedPrimary, ...sortedSecondary]
} 


