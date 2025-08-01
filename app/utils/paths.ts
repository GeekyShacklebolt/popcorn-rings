// Determine the base path for static assets
export const getBasePath = () => {
  return process.env.NODE_ENV === 'production' ? '/popcorn-rings' : ''
}

// Get the full path for a static asset
export const getAssetPath = (path: string) => {
  const basePath = getBasePath()
  return `${basePath}${path}`
}
