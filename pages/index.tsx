import React, { useEffect, useState, Suspense, lazy, useMemo, LazyExoticComponent, HTMLAttributes } from 'react'
import { Box, Text } from 'rebass'
import getConfig from 'next/config'
import { NextApiRequest, NextApiResponse } from 'next'
import { parse, UserAgent } from 'next-useragent'
import WithLoading from 'components/WithLoading'

import 'animate.css';

const { publicRuntimeConfig } = getConfig()

type COMPONENTS_NAMES = 'Desktop' | 'Mobile' | 'Default'
const DefaultComponent = () => <></>
DefaultComponent.displayName = 'DefaultComponent'
/* const components = {
  Desktop: lazy(() => import('components/Desktop')),
  Mobile: lazy(() => import('components/Mobile')),
  Default: DefaultComponent,
}
 */
const isClient = typeof window === 'object'

function getSize() {
  return {
    width: isClient ? window.document.documentElement.clientWidth : undefined,
    height: isClient ? window.document.documentElement.clientHeight : undefined,
  }
}

function Home({ isMobile, isTablet, isDesktop }: UserAgent) {
  useEffect(() => {
    publicRuntimeConfig.BUILD_ENV !== 'development' &&
      import('utils/skynet').then(({ start }) => {
        start()
      })
  }, [])

  const [componentsName, setComponentsName] = useState<COMPONENTS_NAMES>('Default')
  const [windowSize, setWindowSize] = useState<number | undefined>(undefined)
  useEffect(() => {
    setWindowSize(getSize().width)
    function onResize() {
      setWindowSize(getSize().width)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    if (isDesktop && windowSize && windowSize < 720) {
      setComponentsName('Mobile')
    } else if ((isMobile || isTablet) && windowSize && windowSize < 720) {
      setComponentsName('Mobile')
    } else if ((isTablet || isDesktop) && windowSize && windowSize >= 720) {
      setComponentsName('Desktop')
    } else {
      setComponentsName('Default')
    }
  }, [isMobile, isTablet, isDesktop, windowSize])

  const Components = useMemo(() => {
    switch (componentsName) {
      case 'Desktop':
        return lazy(() => import('components/Desktop'))
      case 'Mobile':
        return lazy(() => import('components/Mobile'))
      default:
        return DefaultComponent
    }
  }, [componentsName])

  return <Suspense fallback={() => <Text>loading</Text>}>{<Components />}</Suspense>
  // return <Components />
}
export default WithLoading(Home)

export async function getServerSideProps({ req, res }: { req: NextApiRequest; res: NextApiResponse }) {
  const ua = parse(req.headers['user-agent'] || '')
  return {
    props: ua,
  }
}
