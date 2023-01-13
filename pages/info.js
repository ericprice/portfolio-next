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
          <title>Info &ndash; Eric Price</title>
        </Head>
        <Container pageName="info">
          <Header />
          <div class="info">
            <h2 class="info-statement">Eric Price is a Brooklyn-based graphic designer and programmer specializing in identity, web, and publishing for arts and culture.</h2>
            <section class="info-section">
              <h3 class="info-heading">Contact</h3>
              <div class="info-content">
                <p>Studio Eric Price<br />543 Court Street #3<br />Brooklyn, NY 11231 USA<br />+1 612 618 0789<br /><a href="mailto:info@ericprice.info">info@ericprice.info</a></p>
                <ul>
                  <li><a href="https://www.are.na/eric-price">Are.na</a></li>
                  <li><a href="https://github.com/ericprice">GitHub</a></li>
                  <li><a href="https://instagram.com/ericprice">Instagram</a></li>
                </ul>
              </div>
            </section>
            <section class="info-section info-section-clients">
              <h3 class="info-heading">Clients &amp; collaborators</h3>
              <div class="info-content">
                <ul>
                  <li>Askov Finlayson</li>
                  <li>Ballroom Marfa</li>
                  <li>Barry Lopez Foundation for Art and Environment</li>
                  <li>Black Reconstruction Collective</li>
                  <li>Brooklyn Museum</li>
                  <li>Club Night Club</li>
                  <li>Danspace Project</li>
                  <li>Doubleday & Cartwright</li>
                  <li>DoubleYou</li>
                  <li>Johannes Girardoni Studio</li>
                  <li>Goldstein Museum of Design</li>
                  <li>Intersection</li>
                  <li>Minneapolis College of Art and Design</li>
                  <li>Minnesota Broadcasters Association</li>
                  <li>Minnesota Museum of American Art</li>
                  <li>New York Comedy Festival</li>
                  <li>North Corp.</li>
                  <li>Office of Int./Est./Ext.</li>
                  <li>Other Means</li>
                  <li>Project Projects</li>
                  <li>Robert Rauschenberg Foundation</li>
                  <li>RO/LU</li>
                  <li>School of Visual Arts</li>
                  <li>Studio Lin</li>
                  <li>Toledo Museum of Art</li>
                  <li>University of Minnesota</li>
                  <li>Walk Together PJR</li>
                  <li>Walker Art Center</li>
                  <li>Weisman Art Museum</li>
                  <li>Theo Wenner Studio</li>
                  <li>WeShouldDoItAll</li>
                  <li>Wkshps</li>
                  <li>WORKac</li>
                </ul>
              </div>
              {/* <div class="info-footer">
                *Work experience
              </div> */}
            </section>
            <section class="info-section info-section-press">
              <div class="info-content">
                <h3 class="info-heading">2016</h3>
                <ul>
                  <li>Interview, <em>Gratuitous Type</em></li>
                </ul>
                <h3 class="info-heading">2013</h3>
                <ul>
                  <li>“20 Under 30” New Visual Artist, <em>Print</em> Magazine</li>
                  <li>Interview, <em>Grafill</em></li>
                </ul>
                  
                <h3 class="info-heading">2012</h3>
                <ul>
                  <li>Regional Design Annual, <em>Print</em> Magazine</li>
                  <li>Design Show, AIGA Minnesota</li>
                  <li>Innovative/Best in Show, Museums and the Web</li>
                  <li>PowerPoint, Art of This Gallery</li>
                </ul>
                  
                <h3 class="info-heading">2011</h3>
                <ul>
                  <li>The Year in Design That Works, <em>Good</em> Magazine</li>
                </ul>
                  
                <h3 class="info-heading">2007</h3>
                <ul>
                  <li>Media Best Award, Minnesota Broadcasters Association</li>
                  <li>B.S. Graphic Design, University of Minnesota Twin Cities</li>
                </ul>
                  
                <h3 class="info-heading">2006</h3>
                <ul>
                  <li>Best Campus Publication of the Year, Independent Press Association</li>
                </ul>
              </div>
            </section>
          </div>
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
