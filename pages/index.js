import Head from 'next/head'
import { useEffect } from 'react';
import Container from '../components/container'
import ProjectsList from '../components/projects-list'
import Header from '../components/header'
import Layout from '../components/layout'
import { indexQuery } from '../lib/queries'
import { client } from '../lib/sanity.server'

export default function Index({ allProjects }) {
  useEffect( () => { document.querySelector('body').classList.remove('project') } );
  var scrollTimeout
  useEffect( () => {
    document.addEventListener('scroll', ()=> {
      if (!document.querySelector('body').classList.contains('scrolling')) {
        document.querySelector('body').classList.add('scrolling')
      }
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(function() {
        document.querySelector('body').classList.remove('scrolling')
      }, 350)
    });
   }, []);
  return (
    <Layout>
      <Head>
        <title>Eric Price</title>
      </Head>
      <Container pageName="home">
        <Header />
        {/* <div className="featured">
        </div> */}
        {allProjects.length > 0 && <ProjectsList projects={allProjects} />}
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