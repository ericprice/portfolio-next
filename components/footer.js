export default function Footer() {
  return (
    <>
      {/* <div className="copyright">&copy;{new Date().getFullYear()} Studio Eric Price LLC</div> */}
      <footer className="site-footer">
        <div className="site-footer-item site-footer-search">
          <input type="text" id="search-input" placeholder="Search" />
          <button className="search-clear">Clear</button>
        </div>
        <div className="site-footer-item site-footer-revision">Rev. 6/2023</div>
        <div className="site-footer-item site-footer-contact">
          <a href="mailto:info@ericprice.info">info@ericprice.info</a>
        </div>
      </footer>
    </>
  )
}
