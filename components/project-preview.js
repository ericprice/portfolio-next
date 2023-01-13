import Date from '../components/date'
import CoverImage from './cover-image'
import Link from 'next/link'
import { urlForImage, usePreviewSubscription } from '../lib/sanity'
import { sanityClient, getClient, overlayDrafts } from '../lib/sanity.server'
import { parseISO, format } from 'date-fns'

export default function ProjectPreview({
  title,
  coverImage,
  date,
  slug,
  client,
  categories,
  collaborators,
  media,
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
              <h3 className="project-preview-item project-preview-title">
                {title}
              </h3>
              {client?.name && !sameTitleAndClient ? (
                <div className="project-preview-item project-preview-client">
                  {client.name}
                </div>
              ) : (
                <div className="project-preview-item project-preview-client"></div>
              )}
              {categories && (
                <ul className="project-preview-item project-preview-categories">
                  {categories.map(category => <li key={category.name}>{category.name}</li>)}
                </ul>
              )}
              {collaborators && (
                <ul className="project-preview-item project-preview-collaborators">
                  {collaborators.map(collaborator => <li key={collaborator.name}>{collaborator.name}</li>)}
                </ul>
              )}
              {/* {media && (
                <ul className="project-preview-item project-preview-media">
                  {media.map(mediaItem =>
                    urlForImage(mediaItem.asset._ref).width(2000).url()
                  )}
                  {urlForImage(media[0].asset._ref).width(2000).url()}
                </ul>
              )} */}
            </div>
            <CoverImage slug={slug} title={title} image={coverImage} />
          </a>
        </div>
      ) : (
        <div className="project-preview" data-start-of-year={startOfYear}>
          <Link className="project-preview-content" href={`/projects/${slug}`}>
            <Date dateString={date} />
            <div className="project-preview-content-inner">
              <h3 className="project-preview-item project-preview-title">
                {title}
              </h3>
              {client?.name && !sameTitleAndClient ? (
                <div className="project-preview-item project-preview-client">
                  {client.name}
                </div>
              ) : (
                <div className="project-preview-item project-preview-client"></div>
              )}
              {categories && (
                <ul className="project-preview-item project-preview-categories">
                  {categories.map(category => <li key={category.name}>{category.name}</li>)}
                </ul>
              )}
              {collaborators && (
                <ul className="project-preview-item project-preview-collaborators">
                  {collaborators.map(collaborator => <li key={collaborator.name}>{collaborator.name}</li>)}
                </ul>
              )}
              {/* {media && (
                <ul className="project-preview-item project-preview-media">
                  {media.map(mediaItem =>
                    urlForImage(mediaItem.asset._ref).width(2000).url()
                  )}
                  {urlForImage(media[0].asset._ref).width(2000).url()}
                </ul>
              )} */}
            </div>
            <CoverImage slug={slug} title={title} image={coverImage} />
          </Link>
        </div>
      )}
    </>
  )
}
