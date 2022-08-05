import React, { useCallback, useLayoutEffect, useRef, useState } from 'react'
import { Box, Flex } from 'rebass'
import styled from 'styled-components'

export const NavbarItemTitle = styled.button`
  background: transparent;
  cursor: auto;
  border: 0;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  color: white;
  display: flex;
  justify-content: center;
  transition: transform 250ms ease-in-out;
  /* position above the dropdown, otherwise the dropdown will cover up the bottom sliver of the buttons */
  position: relative;
  z-index: 2;
  &:hover,
  &:focus {
    // opacity: 0.7;
    outline: none;
    .nav-menu-title:after {
      transform: scaleX(1);
    }
  }
  & .nav-menu-title:after {
    display: block;
    content: '';
    border-bottom: solid white 2px;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
    transform-origin: 0% 50%;
  }
`

export const NavbarItemEl = styled.li`
  padding: 0.5rem;
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 42px;
  @media screen and (max-width: 1300px) {
    margin: 0 21px;
  }
  @media screen and (max-width: 1000px) {
    margin: 0 12px;
  }
  @media screen and (max-width: 840px) {
    margin: 0 6px;
  }
`

const DropdownSlot = styled.div`
  z-index: 999;
  // border-radius: 0.5rem;
  // box-shadow: 0 50px 100px -20px rgb(50 50 93 / 25%), 0 30px 60px -30px rgb(0 0 0 / 30%), 0 -18px 60px -10px rgb(0 0 0 / 3%);
  position: absolute;
  left: 0;
  transform: translateY(70px);
  perspective: 1500px;
  font-family: 'Poppins';
  font-style: normal;
  font-size: 18px;
  font-weight: bold;
`

export default function NavbarItem({ onMouseEnter, title, index, children }: { onMouseEnter: (index: number) => void; title: string; index: number; children: React.ReactNode }) {
  const onMouseEnterWrapper = useCallback(() => {
    onMouseEnter(index)
  }, [onMouseEnter, index])

  return (
    <NavbarItemEl onMouseEnter={onMouseEnterWrapper} onFocus={onMouseEnterWrapper}>
      <NavbarItemTitle>
        {/* <Flex height={'100%'} width={'100%'} sx={{ position: 'relative' }}> */}
        <Box className="nav-menu-title">{title}</Box>
        <DropdownSlot>{children}</DropdownSlot>
        {/* </Flex> */}
      </NavbarItemTitle>
    </NavbarItemEl>
  )
}
