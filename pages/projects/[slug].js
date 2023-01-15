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
    <Layout>
      
      
      
      
      
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
