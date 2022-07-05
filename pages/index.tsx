import React, { useEffect, useState, Suspense, lazy, useMemo, LazyExoticComponent } from 'react'
import { Box, Text } from 'rebass'
import getConfig from 'next/config'

import { NextApiRequest, NextApiResponse } from 'next'
import { parse, UserAgent } from 'next-useragent'

const { publicRuntimeConfig } = getConfig()

type COMPONENTS_NAMES = 'Desktop' | 'Mobile' | 'Default'
const DefaultComponent = () => <></>
DefaultComponent.displayName = 'DefaultComponent'
const components = {
  Desktop: lazy(() => import('components/Desktop')),
  Mobile: lazy(() => import('components/Mobile')),
  Default: DefaultComponent,
}

const isClient = typeof window === 'object'

function getSize() {
  return {
    width: isClient ? window.innerWidth : undefined,
    height: isClient ? window.innerHeight : undefined,
  }
}

export default function Home({ isMobile, isTablet, isDesktop }: UserAgent) {
  useEffect(() => {
    publicRuntimeConfig.BUILD_ENV !== 'development' &&
      import('utils/skynet').then((skynet) => {
        skynet.default.start()
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
    } else if (isMobile || (isTablet && windowSize && windowSize < 720)) {
      setComponentsName('Mobile')
    } else if (isTablet && windowSize && windowSize >= 720) {
      setComponentsName('Desktop')
    } else {
      setComponentsName('Desktop')
    }
  }, [isMobile, isTablet, isDesktop, windowSize])

  const Components = useMemo(() => {
    if (componentsName) {
      return components[componentsName]
    } else {
      return components['Default']
    }
  }, [componentsName])

  return <Suspense fallback={() => <Text>loading</Text>}>{<Components />}</Suspense>
}

export async function getServerSideProps({ req, res }: { req: NextApiRequest; res: NextApiResponse }) {
  const ua = parse(req.headers['user-agent'] || '')
  return {
    props: ua,
  }
}
