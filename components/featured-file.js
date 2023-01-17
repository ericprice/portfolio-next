import cn from 'classnames'
import { getFile } from '@sanity/asset-utils'
import { sanityConfig } from '../lib/config'

export default function CoverFile({ file }) {
  const theFile = getFile(file, sanityConfig)
  
  return (
    <div className="project-meta-header-item project-meta-header-media">
      <video loop autoPlay muted>
        <source src={theFile.asset.url} type="video/mp4"></source>
      </video>
    </div>
  )
}
