import Head from 'next/head'
import { useEffect } from 'react';
import Container from '../components/container'
import ProjectsList from '../components/projects-list'
import Header from '../components/header'
import Footer from '../components/footer'
import Layout from '../components/layout'
import { indexQuery } from '../lib/queries'
import { client } from '../lib/sanity.server'

export default function Index({ allProjects }) {
  useEffect(() => {
    document.querySelector('body').classList.remove('project');
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      var scrollTimeout
      if (!document.querySelector('body').classList.contains('scrolling')) {
        document.querySelector('body').classList.add('scrolling');
      }
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        document.querySelector('body').classList.remove('scrolling');
      }, 750);
    };
    
    document.addEventListener('scroll', handleScroll);
    
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const searchInput = document.querySelector('#search-input');
      const searchClear = document.querySelector('.search-clear');
      const projectsList = document.querySelector('.projects-list');
      
      if (searchInput && searchClear && projectsList) {
        const projects = projectsList.querySelectorAll('.project-preview');
        
        const clearSearch = () => {
          searchInput.value = '';
          searchInput.blur();
          document.querySelector('body').classList.remove('searching');
          
          projects.forEach((project) => {
            project.style.display = 'block';
          });
        };
        
        const handleInput = () => {
          const searchTerm = searchInput.value.trim().toLowerCase();
          
          if (searchTerm.length > 0) {
            document.querySelector('body').classList.add('searching');
          } else {
            document.querySelector('body').classList.remove('searching');
          }
        
          projects.forEach((project) => {
            const title = project.querySelector('.project-preview-content').textContent.trim().toLowerCase();
        
            if (title.includes(searchTerm)) {
              project.style.display = 'block';
            } else {
              project.style.display = 'none';
            }
          });
        };
        
        searchClear.addEventListener('click', clearSearch);
        searchInput.addEventListener('input', handleInput);
        
        return () => {
          searchClear.removeEventListener('click', clearSearch);
          searchInput.removeEventListener('input', handleInput);
        };
      }
    }
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
          <Footer />
        </div>
      </Container>
    </Layout>
  );
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