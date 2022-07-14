import { useEffect, useRef, useState } from 'react'
import { css } from 'styled-components'
import { Box, Button, Flex, Text } from 'rebass'

import Image from 'components/Image'
import web3Png from 'public/web3.png'
import leftBottomArrow from 'public/leftBottomArrow.svg'
import circledT from 'public/circledT.svg'
import welcomeGif from 'public/gif/welcome.gif'
import welcomeTeleport from 'public/welcome-teleport.svg'
import welcomeSubTitle from 'public/welcome-sub-title.svg'
import { welcomeGifFirstFrame } from 'components/Image/base64Images'
import { presetSensors } from 'utils/presetSensors'
import { throttle } from 'lodash-es'

export default function WelcomeBlock() {
  const containerRef = useRef<HTMLDivElement>()
  const [containerWidth, setContainerWidth] = useState<number>(0)

  useEffect(() => {
    const onResize = throttle(function () {
      containerRef.current && setContainerWidth(containerRef.current!.offsetWidth)
    }, 200)
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
          button: {
            margin: 0,
          },
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
          '.with-after-border': {
            minWidth: '360px',
            flex: 0,
            alignItems: 'center',
          },
          '.with-after-border:after': {
            transform: 'scale(0)',
          },
          '.vanish-to-left': {
            transform: 'translateX(-100px)',
            opacity: '0',
          },
          '.translate-to-left': {
            minWidth: '360px',
            // transform: 'translateX(-45px)',
          },
          '.flatten-div': {
            '.shrink-button': {
              width: '40%',
              minWidth: '200px',
              maxWidth: '240px',
              height: '60px',
            },
            flexWrap: 'nowrap',
            justifyContent: 'space-around',
            alignItems: 'baseline',
            maxWidth: 'unset!important',
            flex: 1,
            minWidth: '45%!important',
            '@media screen and (max-width: 1300px)': {
              '.shrink-button': {
                width: '180px',
                minWidth: '180px',
                maxWidth: '180px',
              },
              minWidth: '420px!important',
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
        {/* <video src={require('../../../public/welcome.mp4')} autoPlay loop muted width={'100%'} /> */}
        <Image src={welcomeGif} alt="welcome-gif" placeholder="blur" blurDataURL={'data:image/png;base64,' + welcomeGifFirstFrame}></Image>
      </Box>
      <Flex
        sx={{
          justifyContent: 'space-between',
          marginTop: 30,
          height: '135px',
          transition: 'all 0.2s ease-in-out',
        }}
      >
        <Flex
          className="with-after-border"
          flexDirection={'column'}
          justifyContent="flex-start"
          sx={{
            transition: 'all 0.2s ease-in-out',
            transformOrigin: '0% 50%',
            marginRight: '24px',
            alignItems: 'flex-end',
          }}
          css={css`
            &:after {
              display: block;
              content: '';
              border-bottom: solid white 2px;
              transform: scaleX(1);
              transition: all 0.2s ease-in-out;
              transform-origin: 0% 50%;
              width: 100%;
            }
          `}
        >
          <Flex width="100%" height="100%">
            <Box
              className="vanish-to-left"
              sx={{
                width: '10%',
                display: 'flex',
                justifyContent: 'center',
                transformOrigin: '50% 0',
                transition: 'all 0.2s ease-in-out',
              }}
            >
              <Image src={leftBottomArrow} alt="welcome-gif"></Image>
            </Box>
            <Box
              className="translate-to-left"
              sx={{
                width: '90%',
                transition: 'all 0.2s ease-in-out',
                transformOrigin: '0% 50%',
                display: 'flex',
                alignItems: 'baseline',
              }}
            >
              <Image src={web3Png} alt="welcome-gif"></Image>
            </Box>
          </Flex>
        </Flex>
        <Flex
          flex={1}
          alignItems="baseline"
          className="flatten-div"
          flexWrap="wrap"
          sx={{
            justifyContent: 'space-between',
            maxWidth: '300px!important',
            minWidth: '300px!important',
            /*  '@media screen and (max-width: 1300px)': {
              minWidth: '155px!important',
              maxWidth: '155px!important',
            }, */
            transition: 'all 0.2s ease-in-out',
            transformOrigin: '0% 50%',
            minHeight: '160px',
          }}
        >
          <Button
            className="shrink-button"
            backgroundColor="white"
            color="#161929"
            onClick={presetSensors.body.doc}
            sx={{
              height: '54px',
              minWidth: '316px',
              /*  '@media screen and (max-width: 1300px)': {
                width: '155px',
                minWidth: '155px',
                maxWidth: '155px',
                fontSize: '20px',
              }, */
              transition: 'all 0.2s ease-in-out',
              fontStyle: 'normal',
              cursor: 'pointer',
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
            backgroundColor="transparent"
            color="white"
            onClick={presetSensors.body.whitepaper}
            sx={{
              height: '54px',
              minWidth: '316px',
              /*  '@media screen and (max-width: 1300px)': {
                width: '155px',
                minWidth: '155px',
                maxWidth: '155px',
                fontSize: '20px',
              }, */
              transition: 'all 0.2s ease-in-out',
              fontStyle: 'normal',
              fontWeight: 600,
              cursor: 'pointer',
              fontSize: '24px',
              lineHeight: '24px',
              borderColor: 'white',
              borderWidth: '0.5px',
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
