import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { urlForImage } from '../lib/sanity'

export default function CoverImage({ image: source, priority }) {
  const image = source?.asset?._ref ? (
      <Image
        className="w-full h-auto"
        layout="responsive"
        width={2000}
        height={1000}
        src={urlForImage(source).height(1000).width(2000).url()}
        sizes="100vw"
        priority={priority}
      />
  ) : (
    <div className="no-image-remove-me"></div>
  )

  return (
    <div className="sm:mx-0">
      {image}
    </div>
  )
}
