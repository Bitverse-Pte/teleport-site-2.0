import React, { useEffect, useState } from 'react'
import { TailSpin } from 'react-loading-icons'
import { Box, Flex, Text } from 'rebass'

export function WithLoading(Component: { (props: any): JSX.Element; displayName?: string }): {
  (props: any): JSX.Element
  displayName: string
} {
  const WrappedComponent = (props: any) => {
    const [loading, setLoading] = useState(true)
    const [show, setShow] = useState(true)
    useEffect(() => {
      setLoading(false)
      setTimeout(() => setShow(false), 1000)
    }, [])
    return (
      <>
        {show && (
          <Box
            sx={{
              width: '100vw',
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              transition: 'opacity 1s ease-in-out',
              position: 'fixed',
              zIndex: 999,
              backgroundColor: '#375A6C',
              ...(loading ? {} : { opacity: 0, zIndex: -999 }),
            }}
          >
            <TailSpin />
            <br />
            <Text color="white" fontWeight={600} fontSize="18px">
              Loading...
            </Text>
          </Box>
        )}
        <Component {...props} />
      </>
    )
  }
  WrappedComponent.displayName = Component.displayName ? 'WrappedWithLoading' + Component.displayName : 'WrappedWithLoadingComponent'
  return WrappedComponent
}

export default WithLoading
