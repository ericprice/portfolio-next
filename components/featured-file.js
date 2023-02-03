import { getFile } from '@sanity/asset-utils'
import { sanityConfig } from '../lib/config'
import LazyLoad from 'react-lazyload'

export default function CoverFile({ file }) {
  const theFile = getFile(file, sanityConfig)
  
  return (
    <div className="project-meta-header-item project-meta-header-media">
      <LazyLoad offset={600}>
        <video loop={true} autoPlay={true} muted={true} playsInline={true}>
          <source src={theFile.asset.url} type="video/mp4"></source>
        </video>
      </LazyLoad>
    </div>
  )
}
