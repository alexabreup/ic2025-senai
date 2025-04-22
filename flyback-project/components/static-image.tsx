import Image, { ImageProps } from "next/image";

interface StaticImageProps extends Omit<ImageProps, 'src'> {
  src: string;
}

/**
 * Componente para exibir imagens estáticas que funcionam tanto em desenvolvimento quanto em produção
 * Lida automaticamente com o basePath do Next.js
 */
export function StaticImage({ src, ...props }: StaticImageProps) {
  // For images in the public directory, we need to ensure they work with basePath
  // This approach works with Next.js static export for GitHub Pages
  const imageSrc = src.startsWith('/') ? src : `/${src}`;
  
  return <Image src={imageSrc} {...props} unoptimized />;
}
