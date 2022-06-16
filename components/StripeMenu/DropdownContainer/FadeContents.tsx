import React, { forwardRef } from 'react'
import styled, { keyframes } from 'styled-components'
import { promoteLayer } from './utils'

const getFadeContainerKeyFrame = ({ animatingOut, direction }: { direction: string; animatingOut: boolean }) => {
  if (!direction) return
  return keyframes`
  to {
    transform: translateX(0px);
    opacity: ${animatingOut ? 0 : 1};
  }
`
}
const FadeContainer = styled.div<{ duration: number; direction: string; animatingOut: boolean }>`
  ${promoteLayer}
  animation-name: ${getFadeContainerKeyFrame};
  animation-duration: ${({ duration }) => duration}ms;
  animation-fill-mode: forwards;
  opacity: ${({ direction, animatingOut }) => (direction && !animatingOut ? 0 : 1)};
  top: 0;
  left: 0;
`

/* const propTypes = {
  duration: PropTypes.number,
  direction: PropTypes.oneOf(['right', 'left']),
  animatingOut: PropTypes.bool,
  children: PropTypes.node,
} */

function FadeContents({ children, duration, animatingOut = false, direction, ref }: { duration: number; animatingOut?: boolean; direction: string; ref: React.RefObject<HTMLDivElement> } & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return (
    <FadeContainer
      // prevent screen readers from reading out hidden content
      aria-hidden={animatingOut}
      animatingOut={animatingOut}
      direction={direction}
      duration={duration}
      ref={ref}
    >
      {children}
    </FadeContainer>
  )
}
export default forwardRef(FadeContents)
