import React from 'react'
import Image from 'components/Image'
import { Flex, Text, Box } from 'rebass'

import footLogo from 'public/mobile-footer-logo.svg'

export default function Footer() {
  return (
    <Flex marginBottom={'60px'} flexDirection={'column'} alignItems="center" width={"80%"}>
      <Box width="60%">
        <Image src={footLogo} alt={'mobile-footer-logo'} />
      </Box>
      <hr style={{ margin: '24px 0', borderWidth: 0, border: '1px solid rgba(0,0,0,0.2)', width: '100%' }}></hr>
      <Text
        sx={{
          fontFamily: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '21px',
          color: '#05050E',
          opacity: 0.5,
        }}
      >
        ©2022 Teleport. All rights reserved.
      </Text>
    </Flex>
  )
}
