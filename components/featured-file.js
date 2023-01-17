import cn from 'classnames'
import { getFile } from '@sanity/asset-utils'
import { sanityConfig } from '../lib/config'

export default function CoverFile({ file }) {
  const theFile = getFile(file, sanityConfig)
  
  return (
    <div className="project-meta-header-item project-meta-header-media">
      <video type="video/mp4" src={theFile.asset.url} autoPlay muted loop />
    </div>
  )
}
