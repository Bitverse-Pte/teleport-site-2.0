import { useIsSmallScreen } from 'hooks/isSmallScreen'
import React, { useEffect, useState, Suspense, lazy, useMemo } from 'react'
import { Text } from 'rebass'
import { NextApiRequest, NextApiResponse } from 'next'
import { parse } from 'next-useragent'

const Desktop = lazy(() => import('components/desktop'))
const Mobile = lazy(() => import('components/mobile'))

export default function Home({ isMobile }: { isMobile: boolean }) {
  useEffect(() => {
    import('utils/skynet').then((skynet) => {
      skynet.default.start()
    })
  }, [])

  return <Suspense fallback={() => <Text>loading</Text>}>{isMobile ? <Mobile /> : <Desktop />}</Suspense>
}

export async function getServerSideProps({ req, res }: { req: NextApiRequest; res: NextApiResponse }) {
  const ua = parse(req.headers['user-agent'] || '')
  return {
    props: { isMobile: ua.isMobile },
  }
}
