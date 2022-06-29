import { Box, Button, Flex, Text } from 'rebass'

import Image from 'components/Image'
import web3Svg from 'public/web3.svg'
import leftBottomArrow from 'public/leftBottomArrow.svg'
import circledT from 'public/circledT.svg'
import welcomeGif from 'public/gif/welcome.gif'
import { css } from 'styled-components'

export default function WelcomeBlock() {
  return (
    <Flex
      flexDirection={'column'}
      sx={{
        width: '100%',
        ':after': {
          borderBottom: 'solid 2px white',
        },
        ':hover': {
          '.vanish-to-left': {
            transform: 'translateX(-100%)',
            opacity: '0',
            // width: 0,
          },
          '.vanish-to-right': {
            transform: 'translateX(100%)',
            opacity: '0',
          },
          '.with-after-border:after': {
            transform: 'scale(0)',
          },
          '.vertical-grow': {
            transform: 'scaleY(1)',
            height: 'fit-content',
            opacity: 1,
          },
          '.translate-to-left': {
            transform: 'translateX(-61px)',
          },
          '.flatten-div': {
            width: 600,
          },
        },
      }}
    >
      <Flex
        sx={{
          position: 'relative',
        }}
        flexDirection="column"
        alignItems={'flex-start'}
      >
        <Text
          sx={{
            // fontFamily: 'Dela Gothic One',
            // fontStyle: 'normal',
            // fontWeight: 900,
            // // color: 'white',
            fontSize: '96px',
            letterSpacing: '0.06em',
            fontFamily: 'DelGophicOne',
            fontStyle: 'normal',
            color: 'white',
            fontWeight: 400,
            // fontSize: '64px',
            lineHeight: '96px',
          }}
        >
          TELEPORT
        </Text>
        <Text
          className="vanish-to-left"
          sx={{
            transformOrigin: '50% 0',
            transition: 'all 0.2s ease-in-out 0.2s',
            fontSize: '40px',
            letterSpacing: '0.06em',
            fontFamily: 'DelGophicOne',
            fontStyle: 'normal',
            color: 'white',
            fontWeight: 400,
            lineHeight: '40px',
          }}
        >
          Interoperability Platform for
        </Text>
        <Box
          className={'vanish-to-right'}
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 200,
            height: 200,
            transformOrigin: '50% 0',
            transition: 'all 0.2s ease-in-out 0.2s',
          }}
        >
          <Image src={circledT} alt="welcome-gif" layout="fill" objectFit="contain" objectPosition={'right -50px'} quality={100}></Image>
        </Box>
      </Flex>
      <Box
        className="vertical-grow"
        sx={{
          height: 0,
          opacity: 0,
          transform: 'scaleY(0)',
          transition: 'all 0.2s ease-in-out',
          transformOrigin: '0% 50%',
        }}
      >
        <Image src={welcomeGif} alt="welcome-gif"></Image>
      </Box>
      <Flex
        sx={{
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
          <Flex alignItems={'flex-end'}>
            <Box
              className="vanish-to-left"
              sx={{
                transformOrigin: '50% 0',
                transition: 'all 0.2s ease-in-out 0.2s',
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
        <Box
          flex={1}
          alignItems="flex-end"
          justifyContent={'space-between'}
          className="flatten-div"
          sx={{
            transition: 'all 0.2s ease-in-out',
            transformOrigin: '0% 50%',
          }}
        >
          <Button
            width="200px"
            height={'45%'}
            backgroundColor="white"
            color="#161929"
            sx={{
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
            width="200px"
            height={'45%'}
            backgroundColor="#161929"
            color="white"
            sx={{
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
        </Box>
      </Flex>
    </Flex>
  )
}
