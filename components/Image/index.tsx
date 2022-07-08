import Image, { ImageLoader, ImageLoaderProps, ImageProps } from 'next/image'

const customLoader: ImageLoader = ({ src }: ImageLoaderProps) => {
  return src
}
export default function OriginalSrcImage(props: Omit<ImageProps, 'loader'>) {
  return <Image alt={''} quality={100} loader={customLoader} {...props} />
}
