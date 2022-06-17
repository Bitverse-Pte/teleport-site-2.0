import { Box, Flex, Text } from 'rebass'
import Image from 'next/image'

import startedLine from 'public/images/roadmap-stared-line.svg'

export default function RoadmapBlock() {
  return (
    <Flex width={'100%'} height="500px" flexDirection={'row'} padding="60px 0" justifyContent={'center'}>
      <Flex width={'960px'} style={{ position: 'relative' }} justifyContent="space-between">
        <Box style={{ position: 'absolute', top: '70px', zIndex: -1 }}>
          <Image src={startedLine} alt={'roadmap-stared-line'}></Image>
        </Box>
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
      width="178px"
      alignItems={'center'}
      sx={{
        transformOrigin: '50% 0%',
        transition: 'transform 0.2s ease-in-out 0.2s',
        '&:hover': {
          transform: 'scale(1.1)',
        },
      }}
    >
      <Text textAlign={'center'} fontWeight={400} fontSize="24px" fontFamily={'DelGophicOne'} color="#05050e">
        {milestoneDate}
      </Text>
      <Box height={'120px'}></Box>
      <Text textAlign={'center'} fontFamily="Poppins" fontStyle="normal" fontWeight="400" fontSize="18px">
        {description}
      </Text>
    </Flex>
  )
}

/* 
transform: scaleX(0);
transition: transform 250ms ease-in-out;
transform-origin: 0% 50%;
}
& .main-title {
transition: all 0.3s ease-in-out 0.2s;
transform-origin: left;
}
&:hover .main-title {
  transition: all 0.3s ease-in-out 0.1s;
  transform: scale(1.25);
}
} */
