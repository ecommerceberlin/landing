import { primaryPrefixes, countryPrefixes } from "@/settings/locale";


// Helper function to get sorted entries (Germany first, then alphabetically)
export const getSortedCountries = () => {
  const sortedRest = Object.entries(countryPrefixes).filter(([key]) => !primaryPrefixes.includes(key)).sort((a, b) => 
    a[1].en.localeCompare(b[1].en)
  )
  
  const enhancedPrimaryPrefixes = primaryPrefixes
    .filter(prefix => countryPrefixes[prefix as keyof typeof countryPrefixes])
    .map(prefix => [prefix, countryPrefixes[prefix as keyof typeof countryPrefixes]])

  return [...enhancedPrimaryPrefixes, ...sortedRest]
} 


export const howmanyPrimaryPrefixes = primaryPrefixes?.length
