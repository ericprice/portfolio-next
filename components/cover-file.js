import { getFile } from '@sanity/asset-utils'
import { sanityConfig } from '../lib/config'
import LazyLoad from 'react-lazyload'

export default function CoverFile({ file }) {
  const theFile = getFile(file, sanityConfig)

  return (
    <LazyLoad offset={600}>
      <div className="project-preview-thumbnail project-preview-video">
        <video loop={true} autoPlay={true} muted={true} playsInline={true}>
          <source src={theFile.asset.url} type="video/mp4"></source>
        </video>
      </div>
    </LazyLoad>
  )
}
