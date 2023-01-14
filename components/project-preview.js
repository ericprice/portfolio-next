import Date from '../components/date'
import CoverImage from './cover-image'
import CoverFile from './cover-file'
import FeaturedImage from './featured-image'
import FeaturedFile from './featured-file'
import Link from 'next/link'
import { urlForImage } from '../lib/sanity'

export default function ProjectPreview({
  title,
  featuredImage,
  featuredFile,
  coverImage,
  coverFile,
  media,
  date,
  slug,
  client,
  categories,
  collaborators,
  url,
  urlLabel,
  startOfYear
}) {
  if (client?.name == title) {
    var sameTitleAndClient = true
  } else {
    var sameTitleAndClient = false
  }
  if ((media == null || media.length == 0) && url != null && urlLabel != null) {
    var externalLink = true
  } else {
    var externalLink = false
  }
  return (
    <>
      {externalLink ? (
        <div className="project-preview" data-start-of-year={startOfYear}>
          <a className="project-preview-content project-preview-external-link" href={url} target="_new" data-url-label={urlLabel}>
            <Date dateString={date} />
            <div className="project-preview-content-inner">
              <h3 className="project-meta-header-item project-meta-header-title">
                {title}
              </h3>
              {client?.name && !sameTitleAndClient ? (
                <div className="project-meta-header-item project-meta-header-client">
                  {client.name}
                </div>
              ) : (
                <div className="project-meta-header-item project-meta-header-client"></div>
              )}
              {categories && (
                <ul className="project-meta-header-item project-meta-header-categories">
                  {categories.map(category => <li key={category.name}>{category.name}</li>)}
                </ul>
              )}
              {collaborators && (
                <ul className="project-meta-header-item project-meta-header-collaborators">
                  {collaborators.map(collaborator => <li key={collaborator.name}>{collaborator.name}</li>)}
                </ul>
              )}
              <FeaturedImage slug={slug} title={title} image={featuredImage} />
            </div>
            <CoverImage slug={slug} title={title} image={coverImage} />
          </a>
        </div>
      ) : (
        <div className="project-preview" data-start-of-year={startOfYear}>
          <Link className="project-preview-content" href={`/projects/${slug}`}>
            <Date dateString={date} />
            <div className="project-preview-content-inner">
              <h3 className="project-meta-header-item project-meta-header-title">
                {title}
              </h3>
              {client?.name && !sameTitleAndClient ? (
                <div className="project-meta-header-item project-meta-header-client">
                  {client.name}
                </div>
              ) : (
                <div className="project-meta-header-item project-meta-header-client"></div>
              )}
              {categories && (
                <ul className="project-meta-header-item project-meta-header-categories">
                  {categories.map(category => <li key={category.name}>{category.name}</li>)}
                </ul>
              )}
              {collaborators && (
                <ul className="project-meta-header-item project-meta-header-collaborators">
                  {collaborators.map(collaborator => <li key={collaborator.name}>{collaborator.name}</li>)}
                </ul>
              )}
              <FeaturedImage slug={slug} title={title} image={featuredImage} />
            </div>
            <CoverImage slug={slug} title={title} image={coverImage} />
          </Link>
        </div>
      )}
    </>
  )
}
