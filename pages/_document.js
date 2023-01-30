import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QEGJ326S5J"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QEGJ326S5J');
          `}
        </Script>
      </body>
    </Html>
  )
}
