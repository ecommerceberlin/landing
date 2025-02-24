export type BuildConfig = {
  locale: string
  baseUrl: string
  // other build-time configs
}

const config: BuildConfig = {
  locale: process.env.BUILD_LOCALE || 'en',
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
}

export default config 