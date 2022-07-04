import { Box, Button, Flex, Text } from 'rebass'

import Image from 'components/Image'
import web3Svg from 'public/web3.svg'
import leftBottomArrow from 'public/leftBottomArrow.svg'
import circledT from 'public/circledT.svg'
import welcomeGif from 'public/gif/welcome.gif'
import welcomeTeleport from 'public/welcome-teleport.svg'
import welcomeSubTitle from 'public/welcome-sub-title.svg'
import { css } from 'styled-components'
import { useEffect, useRef, useState } from 'react'

export default function WelcomeBlock() {
  const containerRef = useRef<HTMLDivElement>()
  const [containerWidth, setContainerWidth] = useState<number>(0)
  useEffect(() => {
    const onResize = function () {
      containerRef.current && setContainerWidth(containerRef.current!.offsetWidth)
    }
    containerRef.current && setContainerWidth(containerRef.current!.offsetWidth)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])
  return (
    <Flex
      ref={containerRef}
      sx={{
        width: '100%',
        height: '300px',
        position: 'relative',
        flexDirection: 'column',
        transformOrigin: 'center',
        transition: 'all 0.2s ease-in-out',
        justifyContent: 'space-between',
        ':hover': {
          height: '480px',
          '.welcome-teleport': {
            transform: `translateX(calc(${(containerWidth ? containerWidth : 0) / 2}px - 50%)) translateY(-20%)`,
          },
          '.welcome-subtitle': {
            transform: 'translateX(-100px)',
            opacity: 0,
          },
          '.vanish-to-right': {
            transform: 'translateX(100%)',
            opacity: '0',
          },
          '.welcome-gif': {
            opacity: 1,
            height: '100%',
            width: '100%',
            transform: 'translateY(-10%)',
          },
          '.with-after-border:after': {
            transform: 'scale(0)',
          },
          '.vanish-to-left': {
            transform: 'translateX(-100px)',
            opacity: '0',
          },
          '.translate-to-left': {
            transform: 'translateX(-45px)',
          },
          '.flatten-div': {
            '.shrink-button': {
              width: '260px',
              minWidth: '260px',
              height: '64px',
            },
            minWidth: '640px!important',
            '@media screen and (max-width: 1300px)': {
              '.shrink-button': {
                width: '160px',
                minWidth: '160px',
                height: '64px',
              },
              minWidth: '380px!important',
            },
          },
        },
      }}
    >
      <Flex minHeight="160px">
        <Flex flexDirection={'column'} width="84%" justifyContent={'space-between'}>
          <Box
            className="welcome-teleport"
            sx={{
              left: 0,
              transformOrigin: 'center',
              transition: 'all 0.2s ease-in-out',
              height: '100px',
              width: '100%',
              /*   maxWidth: '720px',
              minWidth: '720px',
              '@media screen and (max-width: 1300px)': {
                minWidth: '640px',
                maxWidth: '640px',
              }, */
            }}
          >
            <Image src={welcomeTeleport} alt="welcome-main-title" layout="responsive" objectFit="contain"></Image>
          </Box>
          <Box
            className="welcome-subtitle"
            sx={{
              minWidth: `${containerWidth * 0.85}px`,
              width: '100%',
              height: '60px',
              transition: 'all 0.2s ease-in-out',
              left: 0,
              top: '100px',
            }}
          >
            <Image src={welcomeSubTitle} alt="welcome-sub-title" layout="responsive" objectFit="contain"></Image>
          </Box>
        </Flex>
        <Box
          sx={{
            position: 'relative',
            width: '20%',
            minWidth: '200px',
            height: '200px',
            transition: 'all 0.2s ease-in-out',
          }}
          className="vanish-to-right"
        >
          <Box
            sx={{
              position: 'absolute',
              top: '-15%',
              right: '-30%',
              width: '100%',
              minWidth: '200px',
              height: '100%',
              transition: 'all 0.2s ease-in-out',
            }}
          >
            <Image src={circledT} alt="circled-T" layout="fill" objectFit="contain" /* objectPosition={'right -50px'} */ quality={100}></Image>
          </Box>
        </Box>
      </Flex>

      <Box
        className="welcome-gif"
        sx={{
          height: 0,
          opacity: 0,
          width: '0%',
          // transform: 'scaleY(0)',
          top: '100px',
          transition: 'all 0.2s ease-in-out, width 1ms',
          transformOrigin: 'center',
        }}
      >
        <Image src={welcomeGif} alt="welcome-gif"></Image>
      </Box>
      <Flex
        sx={{
          justifyContent: 'space-between',
          marginTop: 30,
          transition: 'all 0.2s ease-in-out',
        }}
      >
        <Flex
          className="with-after-border"
          flexDirection={'row'}
          justifyContent="flex-start"
          alignItems={'baseline'}
          sx={{
            transition: 'all 0.2s ease-in-out',
            transformOrigin: '0% 50%',
          }}
          css={css`
            &:after {
              margin-top: 10px;
              display: block;
              content: '';
              border-bottom: solid white 2px;
              transform: scaleX(1);
              transition: all 0.2s ease-in-out;
              transform-origin: 0% 50%;
            }
          `}
        >
          <Box
            className="vanish-to-left"
            sx={{
              transformOrigin: '50% 0',
              transition: 'all 0.2s ease-in-out',
            }}
          >
            <Image src={leftBottomArrow} alt="welcome-gif"></Image>
          </Box>
          <Box
            className="translate-to-left"
            sx={{
              transition: 'all 0.2s ease-in-out',
              transformOrigin: '0% 50%',
            }}
          >
            <Image src={web3Svg} alt="welcome-gif"></Image>
          </Box>
        </Flex>
        <Flex
          flex={1}
          alignItems="center"
          justifyContent={'space-around'}
          className="flatten-div"
          flexWrap="wrap"
          sx={{
            maxWidth: '100px!important',
            transition: 'all 0.2s ease-in-out',
            transformOrigin: '0% 50%',
          }}
        >
          <Button
            className="shrink-button"
            height={'45%'}
            backgroundColor="white"
            color="#161929"
            sx={{
              width: '270px',
              minWidth: '270px',
              maxWidth: '270px',
              '@media screen and (max-width: 1300px)': {
                width: '155px',
                minWidth: '155px',
                maxWidth: '155px',
                fontSize: '20px',
              },
              transition: 'all 0.2s ease-in-out',
              fontFamily: 'IBM Plex Sans',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '24px',
              lineHeight: '24px',
              borderRadius: '12px',
            }}
          >
            Docs
          </Button>
          <Button
            className="shrink-button"
            height={'45%'}
            backgroundColor="transparent"
            color="white"
            sx={{
              width: '270px',
              minWidth: '270px',
              maxWidth: '270px',
              '@media screen and (max-width: 1300px)': {
                width: '155px',
                minWidth: '155px',
                maxWidth: '155px',
                fontSize: '20px',
              },
              transition: 'all 0.2s ease-in-out',
              fontFamily: 'IBM Plex Sans',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '24px',
              lineHeight: '24px',
              borderColor: 'white',
              borderWidth: '2px',
              borderStyle: 'solid',
              borderRadius: '12px',
            }}
          >
            Whitepaper
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}
