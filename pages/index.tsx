import React, { useEffect, useState, Suspense, lazy, useMemo } from 'react'
import { Box, Text } from 'rebass'
import { NextApiRequest, NextApiResponse } from 'next'
import { parse, UserAgent } from 'next-useragent'

const Desktop = lazy(() => import('components/Desktop'))
const Mobile = lazy(() => import('components/Mobile'))

export default function Home({ isMobile, isTablet, isDesktop }: UserAgent) {
  useEffect(() => {
    import('utils/skynet').then((skynet) => {
      skynet.default.start()
    })
  }, [])

  return <Suspense fallback={() => <Text>loading</Text>}>{isDesktop ? <Desktop /> : <Mobile />}</Suspense>
}

export async function getServerSideProps({ req, res }: { req: NextApiRequest; res: NextApiResponse }) {
  const ua = parse(req.headers['user-agent'] || '')
  return {
    props: ua,
  }
}
