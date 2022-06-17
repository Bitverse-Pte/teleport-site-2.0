import React, { memo } from 'react'
import { FooterStyled } from './styled'
import Link from 'next/link'
import Image from 'components/Image'

import teleportHorizontal from 'public/images/teleport-horizontal.svg'

const Footer = () => {
  return (
    <FooterStyled>
      <div className="wrapFooter centerView">
        <Link href="/">
          <a>
            <Image className="imgLogoHorizontal" src={teleportHorizontal} alt={'footer-horizontal-line'} />
          </a>
        </Link>
        <div className="lineFooter"></div>
        <div className="textCopyright">©2022 Teleport. All rights reserved.</div>
      </div>
    </FooterStyled>
  )
}

export default memo(Footer)
