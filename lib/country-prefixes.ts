export const countryPrefixes = {
  "DE": { name: "Germany", prefix: "+49" },
  "AT": { name: "Austria", prefix: "+43" },
  "BE": { name: "Belgium", prefix: "+32" },
  "BG": { name: "Bulgaria", prefix: "+359" },
  "HR": { name: "Croatia", prefix: "+385" },
  "CY": { name: "Cyprus", prefix: "+357" },
  "CZ": { name: "Czechia", prefix: "+420" },
  "DK": { name: "Denmark", prefix: "+45" },
  "EE": { name: "Estonia", prefix: "+372" },
  "FI": { name: "Finland", prefix: "+358" },
  "FR": { name: "France", prefix: "+33" },
  "GR": { name: "Greece", prefix: "+30" },
  "HU": { name: "Hungary", prefix: "+36" },
  "IE": { name: "Ireland", prefix: "+353" },
  "IT": { name: "Italy", prefix: "+39" },
  "LV": { name: "Latvia", prefix: "+371" },
  "LT": { name: "Lithuania", prefix: "+370" },
  "LU": { name: "Luxembourg", prefix: "+352" },
  "MT": { name: "Malta", prefix: "+356" },
  "NL": { name: "Netherlands", prefix: "+31" },
  "PL": { name: "Poland", prefix: "+48" },
  "PT": { name: "Portugal", prefix: "+351" },
  "RO": { name: "Romania", prefix: "+40" },
  "SK": { name: "Slovakia", prefix: "+421" },
  "SI": { name: "Slovenia", prefix: "+386" },
  "ES": { name: "Spain", prefix: "+34" },
  "SE": { name: "Sweden", prefix: "+46" },
  "GB": { name: "United Kingdom", prefix: "+44" },
  "US": { name: "United States", prefix: "+1" }
} as const

// Helper function to get sorted entries (Germany first, then alphabetically)
export const getSortedCountries = () => {
  const { DE, ...rest } = countryPrefixes
  const sortedRest = Object.entries(rest).sort((a, b) => 
    a[1].name.localeCompare(b[1].name)
  )
  return [['DE', countryPrefixes.DE], ...sortedRest]
} 