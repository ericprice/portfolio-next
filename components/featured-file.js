import { getFile } from '@sanity/asset-utils'
import { sanityConfig } from '../lib/config'
import { urlForImage } from '../lib/sanity'
import { getImageDimensions } from '@sanity/asset-utils'
import LazyLoad from 'react-lazyload'

export default function CoverFile({ file, poster: source, priority }) {
  const theFile = getFile(file, sanityConfig)
  
  if (source?.asset?._ref) {
    var { aspectRatio, height, width } = getImageDimensions({
      url: urlForImage(source).width(1400).quality(25).url()
    })
    
    var trueHeight = 1400 / aspectRatio;
  }
  
  const video = source?.asset?._ref ? (
    <div className="project-meta-header-item project-meta-header-media">
      <LazyLoad offset={600} once>
        <video loop={true} autoPlay={true} muted={true} playsInline={true} poster={urlForImage(source).width(1400).quality(25).url()} width="1400" height={trueHeight}>
          <source src={theFile.asset.url} type="video/mp4"></source>
        </video>
      </LazyLoad>
    </div>
  ) : (
    <></>
  )
  
  return (
    <>
      {video}
    </>
  )
}
