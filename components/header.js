import Link from 'next/link'

export default function Intro() {
  return (
    <header className="site-header">
      <div className="site-header-nav-container">
        <nav className="site-header-nav">
          <h1 className="site-header-title">
            <Link href="/">
              Eric Price
            </Link>
          </h1>
          <div className="site-header-info">
            <Link href="/info">
              .info
            </Link>
          </div>
        </nav>
      </div>
      <h2 className="site-header-subtitle">
        Graphic design &amp; programming
      </h2>
      <input type="text" id="search-input" style={{display: 'none'}} />
    </header>
  )
}
