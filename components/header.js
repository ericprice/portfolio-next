import Link from 'next/link'

export default function Intro() {
  return (
    <header className="site-header">
      <h1 className="site-header-title">
        <Link href="/">
          Eric Price
        </Link>
      </h1>
      <h2 className="site-header-subtitle">
        Graphic design &amp; programming
      </h2>
      <div className="site-header-info">
        <Link href="/info">
          .info
        </Link>
      </div>
    </header>
  )
}
