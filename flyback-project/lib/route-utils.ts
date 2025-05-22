/**
 * Utilitários para lidar com rotas e caminhos considerando o basePath configurado
 */

// Verificar se estamos em ambiente de produção
const isProd = process.env.NODE_ENV === 'production';

// basePath configurado no next.config.mjs
const basePath = isProd ? '/ic2025-senai' : '';

/**
 * Adiciona o basePath ao início de um caminho, se estiver em produção
 * @param path Caminho a ser processado
 * @returns Caminho com basePath adicionado se necessário
 */
export function withBasePath(path: string): string {
  // Se o caminho já começa com o basePath ou estamos em desenvolvimento, retorna o caminho original
  if (!isProd || (isProd && path.startsWith(basePath))) {
    return path;
  }
  
  // Garantir que não haja barras duplicadas
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}

/**
 * Remove o basePath do início de um caminho, se estiver presente
 * @param path Caminho a ser processado
 * @returns Caminho sem o basePath
 */
export function withoutBasePath(path: string): string {
  if (isProd && path.startsWith(basePath)) {
    return path.slice(basePath.length);
  }
  return path;
}
