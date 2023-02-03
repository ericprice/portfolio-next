import { urlForImage } from '../lib/sanity'
import { getImageDimensions } from '@sanity/asset-utils'

export default function FeaturedImage({ image: source, priority }) {
  
  if (source?.asset?._ref) {
    var { aspectRatio, height, width } = getImageDimensions({
      url: urlForImage(source).width(1400).quality(75).url()
    })
    
    var trueHeight = 1400 / aspectRatio;
  }
  
  const image = source?.asset?._ref ? (
    <div className="project-meta-header-item project-meta-header-media">
      <img src={urlForImage(source).width(1400).quality(75).url()} alt="" loading="lazy" width="1400" height={trueHeight} />
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
