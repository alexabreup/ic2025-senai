/**
 * Utilitários para lidar com rotas e caminhos no projeto
 * Especialmente útil para lidar com o basePath configurado no Next.js
 */

// Verifica se estamos em ambiente de produção
const isProd = process.env.NODE_ENV === 'production'

// O basePath configurado no next.config.js (usado apenas em produção)
export const basePath = isProd ? '/ic2025-senai' : ''

/**
 * Adiciona o basePath ao caminho fornecido
 * @param path Caminho sem o basePath
 * @returns Caminho com o basePath (apenas em produção)
 */
export function withBasePath(path: string): string {
  // Se o caminho já começar com o basePath, não adicione novamente
  if (isProd && basePath && !path.startsWith(basePath)) {
    // Remove barras duplicadas se necessário
    if (path.startsWith('/') && basePath.endsWith('/')) {
      return `${basePath}${path.substring(1)}`
    }
    return `${basePath}${path}`
  }
  return path
}

/**
 * Remove o basePath do caminho fornecido
 * @param path Caminho com o basePath
 * @returns Caminho sem o basePath
 */
export function withoutBasePath(path: string): string {
  if (isProd && basePath && path.startsWith(basePath)) {
    return path.substring(basePath.length) || '/'
  }
  return path
}
