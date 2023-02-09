import Head from 'next/head'
import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'

export default function Info() {
  return (
    <Layout>
      <Head>
        <title>Info &ndash; Eric Price</title>
      </Head>
      <Container pageName="info">
        <div className="site-inner-container">
          <Header />
          <div className="info">
            <h2 className="info-statement">Eric Price is a Brooklyn-based graphic designer and programmer specializing in identity, web, and publishing for arts and culture.</h2>
            <section className="info-section info-section-contact">
              <h3 className="info-heading">Contact</h3>
              <div className="info-content">
                <p>Studio Eric Price LLC<br />543 Court Street #3<br />Brooklyn, NY 11231, USA<br /><a href="mailto:info@ericprice.info">info@ericprice.info</a><br />+1 612 618 0789</p>
                <ul className="info-social">
                  <li><a href="https://github.com/ericprice">GitHub</a></li>
                  <li><a href="https://instagram.com/ericprice">Instagram</a></li>
                  <li><a href="https://typo.social/@ericprice" rel="me">Mastodon</a></li>
                  <li><a href="https://twitter.com/ericprice">Twitter</a></li>
                </ul>
              </div>
            </section>
            <section className="info-section info-section-services">
              <h3 className="info-heading">Services</h3>
              <div className="info-content">
                <ul>
                  <li>Branding &amp; identity design</li>
                  <li>Motion design</li>
                  <li>Print design</li>
                  <li>Publication &amp; book design</li>
                  <li>Sound design</li>
                  <li>Web design</li>
                  <li>Web development</li>
                </ul>
              </div>
            </section>
            <section className="info-section info-section-clients">
              <h3 className="info-heading">Clients &amp; collaborators</h3>
              <div className="info-content">
                <ul>
                  <li>Askov Finlayson, Minneapolis</li>
                  <li>Ballroom Marfa, Marfa</li>
                  <li>Barry Lopez Foundation for Art and Environment, Santa&nbsp;Fe</li>
                  <li>Black Reconstruction Collective, New&nbsp;York</li>
                  <li>Brooklyn Museum, New&nbsp;York</li>
                  <li>Carolines on Broadway, New&nbsp;York</li>
                  <li>Club Night Club, New&nbsp;York</li>
                  <li>Danspace Project, New&nbsp;York</li>
                  <li>Doubleday &amp; Cartwright, Los Angeles/New&nbsp;York</li>
                  <li>DoubleYou, New York</li>
                  <li>Johannes Girardoni Studio, Los&nbsp;Angeles</li>
                  <li>Goldstein Museum of Design, St.&nbsp;Paul</li>
                  <li>Intersection, New York</li>
                  <li>Minneapolis College of Art and Design, Minneapolis</li>
                  <li>Minnesota Broadcasters Association, Minneapolis</li>
                  <li>Minnesota Museum of American Art, St.&nbsp;Paul</li>
                  <li>New York Comedy Festival, New&nbsp;York</li>
                  <li>North Corp., Minneapolis</li>
                  <li>Office of Int./Est./Ext., St.&nbsp;Paul</li>
                  <li>Omnivore, New&nbsp;York</li>
                  <li>Other Means, New&nbsp;York</li>
                  <li>Project Projects, New&nbsp;York</li>
                  <li>Robert Rauschenberg Foundation, New&nbsp;York</li>
                  <li>RO/LU, St.&nbsp;Paul</li>
                  <li>School of Visual Arts, New&nbsp;York</li>
                  <li>Studio Lin, New&nbsp;York</li>
                  <li>Toledo Museum of Art, Toledo</li>
                  <li>University of Minnesota, Minneapolis/St.&nbsp;Paul</li>
                  <li>Walk Together PJR, New&nbsp;York</li>
                  <li>Walker Art Center, Minneapolis</li>
                  <li>Weisman Art Museum, Minneapolis</li>
                  <li>Theo Wenner Studio, New&nbsp;York</li>
                  <li>WeShouldDoItAll, New&nbsp;York</li>
                  <li>Wkshps, New&nbsp;York</li>
                  <li>WORKac, New&nbsp;York</li>
                </ul>
              </div>
            </section>
            <section className="info-section info-section-press">
              <div className="info-content">
                <section className="info-content-section">
                  <h3 className="info-heading">2018</h3>
                  <ul>
                    <li>Tam O’Shanter Drawing Sessions: Ways of Graphic Design-ing, Carnegie Museum of&nbsp;Art</li>
                  </ul>
                </section>
                <section className="info-content-section">
                  <h3 className="info-heading">2016</h3>
                  <ul>
                    <li>Interview, <em>Gratuitous&nbsp;Type</em></li>
                  </ul>
                </section>
                <section className="info-content-section">
                  <h3 className="info-heading">2013</h3>
                  <ul>
                    <li>“20 Under 30” New Visual Artist, <em>Print</em>&nbsp;Magazine</li>
                    <li>Interview, <em>Grafill</em></li>
                  </ul>
                </section>
                <section className="info-content-section">
                  <h3 className="info-heading">2012</h3>
                  <ul>
                    <li>Regional Design Annual, <em>Print</em>&nbsp;Magazine</li>
                    <li>Design Show, AIGA&nbsp;Minnesota</li>
                    <li>Best in Show, Museums and the&nbsp;Web</li>
                    <li>Innovative, Museums and the&nbsp;Web</li>
                    <li>PowerPoint, Art of This&nbsp;Gallery</li>
                    <li>Finalist, Webby&nbsp;Awards</li>
                  </ul>
                </section>
                <section className="info-content-section">
                  <h3 className="info-heading">2011</h3>
                  <ul>
                    <li>The Year in Design That Works, <em>Good</em>&nbsp;Magazine</li>
                  </ul>
                </section>
                <section className="info-content-section">
                  <h3 className="info-heading">2007</h3>
                  <ul>
                    <li>Media Best Award, Minnesota Broadcasters&nbsp;Association</li>
                    <li>B.S. Graphic Design, University of Minnesota Twin&nbsp;Cities</li>
                  </ul>
                </section>
                <section className="info-content-section">
                  <h3 className="info-heading">2006</h3>
                  <ul>
                    <li>Best Campus Publication of the Year, Independent Press&nbsp;Association</li>
                  </ul>
                </section>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

