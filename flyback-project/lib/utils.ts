import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Retorna o caminho correto para recursos estáticos considerando o basePath
 * @param path Caminho relativo do recurso (começando com /)
 * @returns Caminho completo com basePath quando em produção
 */
export function getResourcePath(path: string): string {
  // Remover barra inicial se existir para evitar dupla barra
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  const basePath = process.env.NODE_ENV === "development" ? "" : "/ic2025-senai"
  return `${basePath}/${cleanPath}`
}
