import React from 'react'
import Image from 'components/Image'
import { Flex, Text, Box } from 'rebass'

import footLogo from 'public/mobile-footer-logo.svg'

export default function Footer() {
  return (
    <Flex marginBottom={'32px'} flexDirection={'column'} alignItems="center" width={"80%"}>
      <Box>
        <Image src={footLogo} alt={'mobile-footer-logo'} height={35} />
      </Box>
      <hr style={{ margin: '12px 0', borderWidth: 0, border: '0.5px solid rgba(0,0,0,0.2)', width: '100%' }}></hr>
      <Text
        sx={{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '10px',
            lineHeight: '10px',
            transform: 'scale(0.7)',
            color: '#05050E',
            opacity: 0.5,
        }}
      >
        ©2022 Teleport. All rights reserved.
      </Text>
    </Flex>
  )
}
