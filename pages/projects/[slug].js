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
import Link from 'next/link'
import { projectQuery, projectSlugsQuery } from '../../lib/queries'
import { urlForImage } from '../../lib/sanity'
import { client } from '../../lib/sanity.server'

export default function Project({ project, moreProjects }) {
  const router = useRouter()
  const slug = project?.slug
  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />
  }
  
  useEffect( () => { document.querySelector('body').classList.add('project') } );

  return (
    <>
      <Head>
        <title>{project.title + ' – Eric Price'}</title>
        {project.coverImage?.asset?._ref && (
          <meta
            key="ogImage"
            property="og:image"
            content={urlForImage(project.coverImage)
              .width(1200)
              .height(627)
              .fit('crop')
              .url()}
          />
        )}
      </Head>
      <Layout>
        
        <Container pageName="project">
          <Header />
          <header className="project-meta-header">
            <div className="project-meta-header-item project-meta-header-date">
              <h3 className="project-meta-header-item-heading">Date</h3>
              <Date dateString={project.date} />
            </div>
            <div className="project-meta-header-item project-meta-header-title">
              <h3 className="project-meta-header-item-heading">Project</h3>
              <h2 className="project-title">{project.title}</h2>
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
          <div className="project-content">
            <article className="project-text text">
              <h3 className="project-text-heading">Case study</h3>
              <PostBody content={project.content} />
            </article>
            <aside className="project-meta-secondary">
              <div className="project-meta-secondary-item">
                <h3>Credits</h3>
              </div>
            </aside>
            {project.media && (
              <ul className="project-meta-header-item project-meta-header-media">
                {project.media.map(mediaItem =>
                  <img key={mediaItem.asset._ref} src={urlForImage(mediaItem.asset._ref).width(2000).url()} />
                )}
              </ul>
            )}
          </div>
        </Container>
      </Layout>
    </>
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
    fallback: true,
  }
}
