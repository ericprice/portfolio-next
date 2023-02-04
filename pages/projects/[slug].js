import Head from 'next/head'
import { useEffect } from 'react';
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import Layout from '../../components/layout'
import Date from '../../components/date'
import CoverImage from '../../components/cover-image'
import CoverFile from '../../components/cover-file'
import Link from 'next/link'
import { getFile } from '@sanity/asset-utils'
import { projectQuery, projectSlugsQuery } from '../../lib/queries'
import { urlForImage } from '../../lib/sanity'
import { client } from '../../lib/sanity.server'
import { sanityConfig } from '../../lib/config'

export default function Project({ project, moreProjects }) {
  const router = useRouter()
  const slug = project?.slug
  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />
  }
  
  useEffect( () => { document.querySelector('body').classList.add('project') } );

  return (
    <Layout>
      <Head>
        <title>{project.title + ' – Eric Price'}</title>
        {project.featuredImage?.asset?._ref && (
          <meta
            key="ogImage"
            property="og:image"
            content={urlForImage(project.featuredImage)
              .width(1200)
              .height(627)
              .fit('crop')
              .url()}
          />
        )}
      </Head>
      <Container pageName="project">
        <div className="site-inner-container">
          <Header />
          <header className="project-meta-header">
            <div className="project-meta-header-item project-meta-header-date">
              <h3 className="project-meta-header-item-heading">Date</h3>
              {project.date && (
                <Date dateString={project.date} />
              )}
            </div>
            <div className="project-meta-header-item project-meta-header-title">
              <h3 className="project-meta-header-item-heading">Project</h3>
              <h2 className="project-title">
                {project.italicizeTitle == true ? (
                  <cite>{project.title}</cite>
                ) : (
                  <>
                    {project.title}
                  </>
                )}
              </h2>
            </div>
            {project.client?.name ? (
              <div className="project-meta-header-item project-meta-header-client">
                <h3 className="project-meta-header-item-heading">Client</h3>
                <p>{project.client.name}</p>
                {project.client.location && (
                  <p>{project.client.location}</p>
                )}
              </div>
            ) : (
              <div className="project-meta-header-item project-meta-header-client">
              </div>
            )}
            {project.categories && (
              <div className="project-meta-header-item project-meta-header-categories">
                <h3 className="project-meta-header-item-heading">Type</h3>
                <ul>
                  {project.categories.map(category => <li key={category.name}>{category.name}</li>)}
                </ul>
              </div>
            )}
            {project.collaborators && (
              <div className="project-meta-header-item project-meta-header-collaborators">
                <h3 className="project-meta-header-item-heading">Collaborator</h3>
                <ul>
                  {project.collaborators.map(collaborator => <li key={collaborator.name}>{collaborator.name}</li>)}
                </ul>
              </div>
            )}
          </header>
          {project.innerCoverImage && (
            <CoverImage image={project.innerCoverImage} />
          )}
          {project.innerCoverFile && (
            <CoverFile file={project.innerCoverFile} />
          )}
          <div className="project-content">
            <article className="project-text text">
              <h3 className="project-text-heading">Case study</h3>
              <div className="project-text-content">
                <PostBody content={project.content} />
              </div>
            </article>
            <aside className="project-meta-secondary">
              {project.url && project.urlLabel && (
                <div className="project-meta-secondary-item project-meta-secondary-url text">
                  <h3>URL</h3>
                  <a className="project-meta-secondary-url-link" href={project.url}>{project.urlLabel}</a>
                </div>
              )}
              {project.collaborators && (
                <div className="project-meta-secondary-item project-meta-secondary-collaborator text">
                  <h3>Collaborator</h3>
                  <ul>
                    {project.collaborators.map(collaborator => <li key={collaborator.name}>{collaborator.name}</li>)}
                  </ul>
                </div>
              )}
              {project.credits && (
                <div className="project-meta-secondary-item project-meta-secondary-credits text">
                  <h3>Credits</h3>
                  <PostBody content={project.credits} />
                </div>
              )}
            </aside>
            {project.media && (
              <div className="project-media">
                {project.media.map(mediaItem => {
                  if (mediaItem._type == 'image') {
                    return (
                      <div className="project-media-item" key={mediaItem.asset._ref} data-display={mediaItem.display}>
                        <img src={urlForImage(mediaItem.asset._ref).width(2400).quality(85).url()} />
                        {mediaItem.caption && (
                          <div className="project-media-item-caption">{mediaItem.caption}</div>
                        )}
                      </div>
                    )
                  } else {
                    const file = getFile(mediaItem, sanityConfig)
                    if (file.asset.extension == 'mp4') {
                      return (
                        <div className="project-media-item" key={mediaItem.asset._ref} data-display={mediaItem.display}>
                          <video loop={true} autoPlay={true} muted={true} playsInline={true}>
                            <source src={file.asset.url} type="video/mp4"></source>
                          </video>
                          {mediaItem.caption && (
                            <div className="project-media-item-caption">{mediaItem.caption}</div>
                          )}
                        </div>
                      )
                    }
                  }
                })}
              </div>
            )}
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const { project, moreProjects } = await client.fetch(projectQuery, {
    slug: params.slug,
  })

  return {
    props: {
      project,
      moreProjects,
    },
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  }
}

export async function getStaticPaths() {
  const paths = await client.fetch(projectSlugsQuery)
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: 'blocking',
  }
}
