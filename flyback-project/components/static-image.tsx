import Image, { ImageProps } from "next/image";
import { getResourcePath } from "@/lib/utils";

interface StaticImageProps extends Omit<ImageProps, 'src'> {
  src: string;
}

/**
 * Componente para exibir imagens estáticas que funcionam tanto em desenvolvimento quanto em produção
 * Lida automaticamente com o basePath do Next.js
 */
export function StaticImage({ src, ...props }: StaticImageProps) {
  const imagePath = getResourcePath(src);
  
  return <Image src={imagePath} {...props} />;
}
