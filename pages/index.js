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
      }, 150)
    });
   }, []);
  return (
    <Layout>
      <Head>
        <title>Eric Price</title>
      </Head>
      <Container pageName="home">
        <div className="site-inner-container">
          <Header />
          {allProjects.length > 0 && <ProjectsList projects={allProjects} />}
          <footer className="site-footer">
            <div className="site-footer-item site-footer-contact">
              <a href="mailto:info@ericprice.info">info@ericprice.info</a>
            </div>
            <div className="site-footer-item site-footer-revision">Rev. 2023-02-08</div>
          </footer>
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