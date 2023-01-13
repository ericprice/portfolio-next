import Head from 'next/head'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import PostTitle from '../../components/post-title'
import { projectQuery, projectSlugsQuery } from '../../lib/queries'
import { urlForImage } from '../../lib/sanity'
import { client } from '../../lib/sanity.server'

export default function Project({ project, moreProjects }) {
  const router = useRouter()
  const slug = project?.slug
  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout>
      <Container>
        <Header />
        <article>
          <Head>
            <title>{project.title} &ndash; Eric Price</title>
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
          <PostHeader
            title={project.title}
            coverImage={project.coverImage}
            date={project.date}
          />
          <PostBody content={project.content} />
        </article>
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
    fallback: true,
  }
}
