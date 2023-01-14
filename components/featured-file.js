import cn from 'classnames'
import { urlForImage } from '../lib/sanity'

export default function FeaturedFile({ image: source, priority }) {
  const image = source?.asset?._ref ? (
    <div
      className="project-preview-thumbnail"
      style={{ backgroundImage: `url(${urlForImage(source).width(2000).quality(75).url()})` }}
    >
    </div>
  ) : (
    <></>
  )

  return (
    <>
      {image}
    </>
  )
}
