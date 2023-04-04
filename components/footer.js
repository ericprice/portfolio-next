import Container from './container'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-item site-footer-copyright">&copy;{new Date().getFullYear()} Studio Eric Price LLC</div>
      <div className="site-footer-item site-footer-revision">Rev. 2/2023</div>
      <div className="site-footer-item site-footer-contact">
        <a href="mailto:info@ericprice.info">info@ericprice.info</a>
      </div>
    </footer>
  )
}
