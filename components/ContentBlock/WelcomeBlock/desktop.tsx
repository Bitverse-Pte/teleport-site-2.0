import { Box, Button, Flex, Text } from 'rebass'

import Image from 'components/Image'
import web3Svg from 'public/web3.svg'
import leftBottomArrow from 'public/leftBottomArrow.svg'
import circledT from 'public/circledT.svg'
import welcomeGif from 'public/gif/welcome.gif'
import welcomeTeleport from 'public/welcome-teleport.svg'
import welcomeSubTitle from 'public/welcome-sub-title.svg'
import { css } from 'styled-components'

export default function WelcomeBlock() {
  return (
    <Flex
      flexDirection={'column'}
      sx={{
        position: 'relative',
        width: '100%',
        height: '288px',
        justifyContent: 'space-between',
        transitionDelay: '0s',
        transition: 'all 0.2s ease-in-out',
        '.vanish-to-left': {
          transition: 'all 0.2s ease-in-out',
        },
        ':after': {
          borderBottom: 'solid 2px white',
        },
        ':hover': {
          height: '560px',
          '@media screen and (max-width: 1300px)': {
            height: '480px',
          },
          '.vanish-to-left': {
            transform: 'translateX(-100px)',
            opacity: '0',
            // width: 0,
          },
          '.vanish-to-right': {
            transform: 'scale(1.6) translateX(100px)',
            opacity: '0',
          },
          '.with-after-border:after': {
            transform: 'scale(0)',
          },
          '.vertical-grow': {
            // transform: 'scaleY(1)',
            height: 'fit-content',
            opacity: 1,
          },
          '.translate-to-left': {
            transform: 'translateX(-61px)',
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
          /* '.move-down': {
            transform: 'translateY(230px)',
          }, */
        },
      }}
    >
      <Flex flexDirection="row" alignItems={'space-between'}>
        <Flex flex={5} flexDirection="column" justifyContent={'flex-start'}>
          <Image src={welcomeTeleport} alt="welcome-main-title" layout="responsive" objectFit="contain"></Image>
          <br />
          <Box className="vanish-to-left">
            <Image src={welcomeSubTitle} alt="welcome-sub-title" layout="responsive" objectFit="contain"></Image>
          </Box>
        </Flex>
        <Flex flex={1} height="100%" sx={{ position: 'relative' }}>
          <Box
            className={'vanish-to-right'}
            sx={{
              position: 'absolute',
              top: '-50%',
              right: 0,
              width: '100%',
              height: '100%',
              transform: 'scale(1.6)',
              transformOrigin: '50% 0',
              transition: 'all 0.2s ease-in-out',
            }}
          >
            <Image src={circledT} alt="welcome-gif" layout="fill" objectFit="contain" /* objectPosition={'right -50px'} */ quality={100}></Image>
          </Box>
        </Flex>
      </Flex>
      <Box
        className="vertical-grow"
        sx={{
          height: 0,
          opacity: 0,
          position: 'absolute',
          top: '140px',
          '@media screen and (max-width: 1300px)': {
            top: '120px',
          },
          left: '0px',
          transition: 'all 0.2s ease-in-out',
          transformOrigin: '0% 50%',
        }}
      >
        <Image src={welcomeGif} alt="welcome-gif"></Image>
      </Box>
      <Flex
        sx={{
          justifyContent: 'space-between',
          marginTop: 10,
          transition: 'all 0.2s ease-in-out',
        }}
      >
        <Flex
          className="with-after-border"
          flexDirection={'column'}
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
          <Flex alignItems={'flex-end'} minWidth="480px">
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
        </Flex>
        <Flex
          flex={1}
          alignItems="center"
          justifyContent={'flex-end'}
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
              marginLeft: 10,
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
