import Head from 'next/head'
import Container from '../components/container'
import ProjectsList from '../components/projects-list'
import Header from '../components/header'
import Layout from '../components/layout'
import { indexQuery } from '../lib/queries'
import { usePreviewSubscription } from '../lib/sanity'
import { getClient, overlayDrafts } from '../lib/sanity.server'

export default function Index({ allProjects: initialAllProjects, preview }) {
  const { data: allProjects } = usePreviewSubscription(indexQuery, {
    initialData: initialAllProjects,
    enabled: preview,
  })
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Eric Price</title>
        </Head>
        <Container pageName="home">
          <Header />
          {allProjects.length > 0 && <ProjectsList projects={allProjects} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allProjects = overlayDrafts(await getClient(preview).fetch(indexQuery))
  return {
    props: { allProjects, preview },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  }
}
