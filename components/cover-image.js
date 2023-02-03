import LazyLoad from 'react-lazyload'
import { urlForImage } from '../lib/sanity'

export default function CoverImage({ image: source, priority }) {
  const image = source?.asset?._ref ? (
    <LazyLoad offset={600} once>
      <div
        className="project-preview-thumbnail"
        style={{ backgroundImage: `url(${urlForImage(source).width(2000).quality(85).url()})` }}
      >
      </div>
    </LazyLoad>
  ) : (
    <></>
  )

  return (
    <>
      {image}
    </>
  )
}
