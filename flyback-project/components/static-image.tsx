import Image, { ImageProps } from "next/image";

interface StaticImageProps extends Omit<ImageProps, 'src'> {
  src: string;
}

/**
 * Componente para exibir imagens estáticas que funcionam tanto em desenvolvimento quanto em produção
 * Lida automaticamente com o basePath do Next.js
 */
export function StaticImage({ src, ...props }: StaticImageProps) {
  // Determinar se estamos em ambiente de desenvolvimento ou produção
  const basePath = process.env.NODE_ENV === "development" ? "" : "/ic2025-senai";
  
  // Construir o caminho completo da imagem
  const imagePath = `${basePath}/${src}`;
  
  return <Image src={imagePath} {...props} />;
}
