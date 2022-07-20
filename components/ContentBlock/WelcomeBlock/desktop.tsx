import { useEffect, useRef, useState } from 'react'
import { css } from 'styled-components'
import { Box, Button, Flex, Text } from 'rebass'
import { throttle } from 'lodash-es'

import Image from 'components/Image'
import web3Png from 'public/web3.png'
import leftBottomArrow from 'public/leftBottomArrow.svg'
import circledT from 'public/circledT.svg'
import welcomeTeleport from 'public/welcome-teleport.svg'
import welcomeSubTitle from 'public/welcome-sub-title.svg'
import { presetSensors } from 'utils/presetSensors'

export default function WelcomeBlock() {
  const containerRef = useRef<HTMLDivElement>()
  const [containerWidth, setContainerWidth] = useState<number>(0)

  useEffect(() => {
    const onResize = throttle(function () {
      containerRef.current && setContainerWidth(containerRef.current!.offsetWidth)
      const arrow = document.getElementById('arrow-container')
      const web3Svg = document.getElementById('web3svg')
      if (arrow && web3Svg) {
        arrow.style.height = web3Svg.clientHeight + 'px'
      }
    }, 16)
    containerRef.current && setContainerWidth(containerRef.current!.offsetWidth)
    const arrow = document.getElementById('arrow-container')
    const web3Svg = document.getElementById('web3svg')
    if (arrow && web3Svg) {
      arrow.style.height = web3Svg.clientHeight + 'px'
    }
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
            transform: 'scale(1.2) translateY(-15%)',
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
            maxWidth: '450px!important',
            minWidth: '400px!important',
            flex: 1,
            '@media screen and (max-width: 1300px)': {
              '.shrink-button': {
                width: '180px',
                minWidth: '180px',
                maxWidth: '180px',
              },
              maxWidth: '400px!important',
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
            transition: 'all 0.2s ease-in-out 0.05s',
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
              // transform: 'scale(1.3)',
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
        <video src={require('../../../public/welcome.mp4')} autoPlay loop muted width={'100%'} />
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
              id={'arrow-container'}
              sx={{
                width: '10%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'end',
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
              <Image id={'web3svg'} src={web3Png} alt="welcome-gif"></Image>
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
            maxWidth: '220px!important',
            minWidth: '220px!important',
            '@media screen and (max-width: 1300px)': {
              justifyContent: 'end',
            },
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
              height: '60px',
              minWidth: '240px',
              '@media screen and (max-width: 1300px)': {
                width: '240px',
                minWidth: '240px',
                maxWidth: '240px',
                fontSize: '20px',
              },
              ':hover': {
                transform: 'translateY(-1px)',
              },
              ':active': {
                backgroundColor: 'rgba(80, 175, 153,1)',
              },
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
              height: '60px',
              minWidth: '240px',
              '@media screen and (max-width: 1300px)': {
                width: '240px',
                minWidth: '240px',
                maxWidth: '240px',
                fontSize: '20px',
              },
              ':hover': {
                transform: 'translateY(-1px)',
              },
              ':active': {
                color: 'rgba(80, 175, 153,1)',
                borderColor: 'rgba(80, 175, 153,1)',
              },
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
