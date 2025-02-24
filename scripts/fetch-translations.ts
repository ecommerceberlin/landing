import fs from 'fs/promises'
import path from 'path'

async function fetchTranslations() {
  try {
    const url = process.env.NEXT_PUBLIC_TRANSLATIONS_URL
    if (!url) {
      // throw new Error('NEXT_PUBLIC_TRANSLATIONS_URL is not defined in environment variables')
    }

    console.log(`🌍 Fetching translations from: ${url}`)
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Failed to fetch translations: ${response.statusText}`)
    }

    const translations = await response.json()

    // Create translations directory if it doesn't exist
    const translationsDir = path.join(process.cwd(), 'translations')
    await fs.mkdir(translationsDir, { recursive: true })

    // Save translations to JSON file
    await fs.writeFile(
      path.join(translationsDir, 'translations.json'),
      JSON.stringify(translations, null, 2)
    )

    console.log('✅ Translations downloaded successfully')
  } catch (error) {
    console.error('❌ Error downloading translations:', error)
    process.exit(1)
  }
}

fetchTranslations() 