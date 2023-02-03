import { urlForImage } from '../lib/sanity'

export default function FeaturedImage({ image: source, priority }) {
  const image = source?.asset?._ref ? (
    <div className="project-meta-header-item project-meta-header-media">
      <img src={urlForImage(source).width(1400).quality(75).url()} alt="" loading="lazy" />
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
