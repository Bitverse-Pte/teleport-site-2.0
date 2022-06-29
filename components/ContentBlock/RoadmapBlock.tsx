import React from 'react'
import { Box, Flex, Text } from 'rebass'
import Image from 'components/Image'

import startedLine from 'public/images/roadmap-stared-line.svg'

export default function RoadmapBlock() {
  return (
    <Flex width={'100%'} height="500px" flexDirection={'column'} padding="60px 0" justifyContent={'center'} marginBottom="1rem">
      <Text
        sx={{
          fontFamily: 'DelGophicOne',
          fontSize: '64px',
          lineHeight: '123.76%',
          color: '#05050e',
          width: '100%',
          textAlign: 'center',
          marginBottom: '0.5rem',
        }}
      >
        Teleport Roadmap
      </Text>
      <Flex width={'1132px'} maxWidth={'1132px'} style={{ position: 'relative' }} justifyContent="space-between">
        <Image src={startedLine} alt={'roadmap-stared-line'} layout="fill" objectFit="contain" objectPosition={'left 70px'}></Image>
        <MapColumn milestoneDate="2021.Q4" description="Team setup Product design & early-stage development" />
        <MapColumn milestoneDate="2022.Q1" description="Testnet launch Cross-chain transfer & contract call via IBC& TSS" />
        <MapColumn milestoneDate="2022.Q2" description="Mainnet launch  EVM chain support Cross-chain relayer Incentive Program Multi-chain wallet release" />
        <MapColumn milestoneDate="2022.Q3" description="Cross-chain DEX launch Connecting non-EVM chains  Plug&play SDK" />
        <MapColumn milestoneDate="2022.Q4" description="TSS Node on-chain governance ZK cross-chain relay" />
      </Flex>
    </Flex>
  )
}

function MapColumn({ milestoneDate, description }: { milestoneDate: string; description: string }) {
  return (
    <Flex
      flexDirection={'column'}
      width="210px"
      alignItems={'center'}
      sx={{
        transformOrigin: '50% 0%',
        transition: 'transform 0.2s ease-in-out 0.2s',
        zIndex: 1,
        color: 'black',
        '&:hover': {
          transform: 'scale(1.1)',
        },
      }}
    >
      <Text textAlign={'center'} height={'40px'} fontWeight={400} fontSize="24px" fontFamily={'DelGophicOne'} color="#05050e">
        {milestoneDate}
      </Text>
      <Box height={'100px'}></Box>
      <Text textAlign={'center'} fontFamily="Poppins" fontStyle="normal" fontWeight="400" fontSize="18px">
        {description}
      </Text>
    </Flex>
  )
}
