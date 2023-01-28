import '../styles/index.scss'
import { Analytics } from '@vercel/analytics/react';
import React, { useRef, useEffect, memo } from 'react'
import { useRouter } from 'next/router'

const ROUTES_TO_RETAIN = ['/']

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter()
  const retainedComponents = useRef({})

  const isRetainableRoute = ROUTES_TO_RETAIN.includes(router.asPath)

  // Add Component to retainedComponents if we haven't got it already
  if (isRetainableRoute && !retainedComponents.current[router.asPath]) {
    const MemoComponent = memo(Component)
    retainedComponents.current[router.asPath] = {
      component: <MemoComponent {...pageProps} />,
      scrollPos: 0
    }
  }

  // Save the scroll position of current page before leaving
  const handleRouteChangeStart = url => {
    if (isRetainableRoute) {
      retainedComponents.current[router.asPath].scrollPos = window.scrollY
    }
  }

  // Save scroll position - requires an up-to-date router.asPath
  useEffect(() => {
    router.events.on('routeChangeStart', handleRouteChangeStart)
    
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
      document.querySelector('body').classList.remove('project')
    }
  }, [router.asPath])

  // Scroll to the saved position when we load a retained component
  useEffect(() => {
    if (isRetainableRoute) {
      window.scrollTo(0, retainedComponents.current[router.asPath].scrollPos)
    }
  }, [Component, pageProps])

  return (
    <div>
      <div style={{ display: isRetainableRoute ? 'block' : 'none' }}>
        {Object.entries(retainedComponents.current).map(([path, c]) => (
          <div
            key={path}
            style={{ display: router.asPath === path ? 'block' : 'none' }}
          >
            {c.component}
          </div>
        ))}
      </div>
      {!isRetainableRoute && <Component {...pageProps} />}
      <Analytics />
    </div>
  )
}

export default MyApp