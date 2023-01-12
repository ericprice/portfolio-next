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
  startOfYear
}) {
  if (client?.name == title) {
    var sameTitleAndClient = true;
  } else {
    var sameTitleAndClient = false;
  }
  return (
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
        </div>
        <div className="project-preview-thumbnail">
          <CoverImage slug={slug} title={title} image={coverImage} />
        </div>
      </Link>
    </div>
  )
}
