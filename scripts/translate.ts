import Polyglot from 'node-polyglot';
 
const locale = process.env.NEXT_PUBLIC_LOCALE || 'en';

const translations = require(`../translations/translations.json`)

let polyglotInstance: Polyglot | null = null;
let boundT: ((key: string) => string) | null = null;  // Cache for bound function

export const t = (key: string) => {
  if (!polyglotInstance) {
    polyglotInstance = new Polyglot({
      phrases: translations[locale],
      locale,
      allowMissing: true,
      onMissingKey: (key) => key
    });
    // Cache the bound function
    boundT = polyglotInstance.t.bind(polyglotInstance);
  }
  
  // Use cached bound function
  return boundT!(key);
}