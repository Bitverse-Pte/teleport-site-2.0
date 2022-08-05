import styled, { keyframes } from 'styled-components'
import { promoteLayer } from './utils'

const getDropdownRootKeyFrame = ({ animatingOut, direction }: { animatingOut: boolean; direction: string }) => {
  if (!animatingOut && direction) return null
  return keyframes`
  from {
    transform: ${animatingOut ? 'rotateX(0)' : 'rotateX(-15deg)'};
    opacity: ${animatingOut ? 1 : 0};
  }
  to {
    transform: ${animatingOut ? 'rotateX(-15deg)' : 'rotateX(0)'};
    opacity: ${animatingOut ? 0 : 1};
  }
`
}

export const DropdownRoot = styled.div<{ animatingOut: boolean; direction: string; duration: number }>`
  transform-origin: 0 0;
  ${promoteLayer}
  animation-name: ${getDropdownRootKeyFrame};
  animation-duration: ${({ duration }) => duration}ms;
  /* use 'forwards' to prevent flicker on leave animation */
  animation-fill-mode: forwards;
  /* flex styles will center the caret child component */
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: -20px;
`

export const Caret = styled.div`
  width: 0;
  height: 0;
  border-width: 10px;
  border-style: solid;
  border-color: transparent transparent #999999;
  /* make sure it's above the main dropdown container so now box-shadow bleeds over it */
  z-index: 1;
  position: relative;
  /* prevent any gap in between caret and main dropdown */
  top: 1px;
`

export const DropdownBackground = styled.div`
  transform-origin: 0 0;
  background: rgba(10, 10, 10, 1);
  // background: rgba(255, 255, 255, 0.1);
  // backdrop-filter: blur(79px);
  mix-blend-mode: normal;
  color: #ffffff;
  border: solid rgba(255, 255, 255, 0.2) 0.5px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 50px 100px  rgba(50, 50, 93, 0.1);
  ${promoteLayer}
`

export const AltBackground = styled.div<{ duration: number }>`
  // background-color: black;
  width: 300%;
  height: 100%;
  position: absolute;
  top: 0;
  left: -100%;
  transform-origin: 0 0;
  // border-radius: 0.5rem;
  z-index: 0;
  transition: transform ${({ duration }) => duration}ms;
`

export const InvertedDiv = styled.div<{ absolute?: boolean }>`
  ${promoteLayer}
  position: ${({ absolute }) => (absolute ? 'absolute' : 'relative')};
  top: 0;
  left: 0;
  &:first-of-type {
    z-index: 1;
  }
  &:not(:first-of-type) {
    z-index: -1;
  }
`
