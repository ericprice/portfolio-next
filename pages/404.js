import Head from 'next/head'
import { useEffect } from 'react';
import Container from '../components/container'
import Header from '../components/header'
import Footer from '../components/footer'
import Layout from '../components/layout'
import Link from 'next/link'
import { indexQuery } from '../lib/queries'
import { client } from '../lib/sanity.server'

export default function Index({ allProjects }) {
  useEffect( () => { document.querySelector('body').classList.remove('project') } );
  return (
    <Layout>
      <Head>
        <title>404 &ndash; Eric Price</title>
      </Head>
      <Container pageName="error">
        <div className="site-inner-container">
          <Header />
          <h2 className="error-heading">&ldquo;404 Not Found&rdquo;<br /><Link href="/">(&rarr; Home)</Link></h2>
          <Footer />
        </div>
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const allProjects = await client.fetch(indexQuery)
  return {
    props: {
      allProjects
    },
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  }
}
