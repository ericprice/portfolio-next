import cn from 'classnames'
import { getFile } from '@sanity/asset-utils'
import { sanityConfig } from '../lib/config'

export default function CoverFile({ file }) {
  const theFile = getFile(file, sanityConfig)

  return (
    <div className="project-preview-thumbnail-container">
      <div className="project-preview-thumbnail project-preview-video">
        <video loop={true} autoPlay={true} muted={true} playsInline={true}>
          <source src={theFile.asset.url} type="video/mp4"></source>
        </video>
      </div>
    </div>
  )
}
