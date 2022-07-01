import { Box } from 'rebass'
import styled from 'styled-components'

export const Heading = styled.h3<{ noMarginBottom?: boolean; notAllowSelect?: boolean }>`
  text-transform: capitalize;
  font-weight: bold;
  font-size: 18px;
  margin-top: 0;
  display: flex;
  align-items: center;
  color: white;
  white-space: nowrap;
  line-height: 48px;
  margin-bottom: ${({ noMarginBottom }) => (noMarginBottom ? 0 : '1rem')};
  color: ${({ color }) => (color ? `${color}` : 'var(--blue)')};
  transition: all 250ms ease-in-out;
  ${({ notAllowSelect = false }) =>
    notAllowSelect
      ? ''
      : `&:hover,
  &:focus {
    cursor: pointer;
    // opacity: 0.7;
    color: #59c3aa;
    outline: none;
    transform: translateX(5px);
  }`}
`

export const HeadingLink = Heading.withComponent('li')

export const LinkList = styled.ul<{ marginLeft?: string }>`
  li {
    margin-bottom: 1rem;
  }

  li:last-of-type {
    margin-bottom: 0;
  }

  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : 0)};
`

export const Icon = styled.div`
  width: 13px;
  height: 13px;
  margin-right: 13px;
  background-color: var(--blue);
  opacity: 0.8;
  display: inline-block;
`

export const DropdownSection = styled.div`
  position: relative;
  z-index: 1;
`

export const DropdownEl = styled(Box)<{ width?: string }>`
  width: ${({ width }) => width || '5rem'};
`
