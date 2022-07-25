import React from 'react'
import { Box, Flex, Text } from 'rebass'
import Image from 'components/Image'

import diamond from 'public/images/roadmap-diamond.svg'

export default function RoadmapBlock() {
  return (
    <Flex width={'100%'} height="500px" flexDirection={'column'} justifyContent={'center'}>
      <Text
        className="notranslate"
        sx={{
          fontFamily: 'Dela Gothic One',
          fontSize: '20px',
          lineHeight: '20px',
          whiteSpace: 'nowrap',
          color: '#05050e',
          width: '100%',
          textAlign: 'left',
          marginBottom: '30px',
        }}
      >
        Teleport Roadmap
      </Text>
      <Flex width={'100%'} style={{ position: 'relative' }} flexDirection="column" justifyContent="space-between">
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
    <Flex flexDirection={'column'} width="100%" alignItems={'flex-start'} margin="12px 0">
      <Flex width={'100%'} marginBottom="10px">
        <Box marginRight={12}>
          <Image src={diamond} width={13} height={14} alt="section-icon"></Image>
        </Box>
        <Text fontWeight={400} fontSize="14px" lineHeight={'14px'} fontFamily={'Dela Gothic One'} color="#05050e">
          {milestoneDate}
        </Text>
      </Flex>
      <Text textAlign={'left'} fontFamily="Poppins" fontStyle="normal" fontWeight="400" fontSize="12px" lineHeight={'18px'} color="#000000">
        {description}
      </Text>
    </Flex>
  )
}
