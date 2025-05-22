/**
 * Utilities for handling routes with basePath configuration
 */

/**
 * Adds the basePath to a path if in production environment
 * @param path Path to prepend basePath to
 * @returns Path with basePath in production, original path in development
 */
export function withBasePath(path: string): string {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  
  // Only use basePath in production
  const basePath = process.env.NODE_ENV === 'production' ? '/ic2025-senai' : ''
  
  return `${basePath}/${cleanPath}`
}

/**
 * Removes the basePath from a path if present
 * @param path Path that might contain basePath
 * @returns Path without basePath
 */
export function withoutBasePath(path: string): string {
  // In development, there's no basePath to remove
  if (process.env.NODE_ENV !== 'production') {
    return path
  }
  
  // Remove basePath if present
  return path.replace(/^\/ic2025-senai/, '')
}
