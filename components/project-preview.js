import React, { useState } from 'react';
import Date from '../components/date'
import CoverImage from './cover-image'
import CoverFile from './cover-file'
import FeaturedImage from './featured-image'
import FeaturedFile from './featured-file'
import Link from 'next/link'
import { urlForImage } from '../lib/sanity'
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

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
  const [open, setOpen] = React.useState(false);
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
  if (featuredImage != null || featuredFile != null) {
    var caseStudy = true
  } else {
    var caseStudy = false
  }
  if (featuredImage == null && featuredFile == null && media != null) {
    var snippet = true
  } else {
    var snippet = false
  }
  if (snippet) {
    var lightboxItems = []
    media.map(mediaItem =>
      lightboxItems.push({'src' : urlForImage(mediaItem.asset._ref).width(2000).url()})
    )
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
              <FeaturedImage image={featuredImage} />
            </div>
            <CoverImage image={coverImage} />
          </a>
        </div>
      ) : caseStudy ? (
        <div className="project-preview" data-start-of-year={startOfYear}>
          <Link className="project-preview-content project-preview-case-study" href={`/projects/${slug}`}>
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
              <FeaturedImage image={featuredImage} />
            </div>
            <CoverImage image={coverImage} />
          </Link>
        </div>
      ) : snippet ? (
        <div className="project-preview" data-start-of-year={startOfYear}>
          <a onClick={() => setOpen(true)} className="project-preview-content project-preview-snippet">
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
              <FeaturedImage image={featuredImage} />
            </div>
            <CoverImage image={coverImage} />
          </a>
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={lightboxItems}
            carousel={{
              finite: true,
              padding: '0px'
            }}
            animation={{
              fade: 0,
              swipe: 0
            }}
            controller={{
              closeOnBackdropClick: true
            }}
            on={{
              click: console.log('click')
            }}
          />
        </div>
      ) : (
        <div className="project-preview" data-start-of-year={startOfYear}>
          <div className="project-preview-content project-preview-disabled">
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
              <FeaturedImage image={featuredImage} />
            </div>
            <CoverImage image={coverImage} />
          </div>
        </div>
      )}
    </>
  )
}
