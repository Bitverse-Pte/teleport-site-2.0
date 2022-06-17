import React, { useCallback } from 'react'
import styled from 'styled-components'

const NavbarItemTitle = styled.button`
  background: transparent;
  border: 0;
  font-weight: bold;
  font-family: inherit;
  font-size: 18px;
  padding: 0.5rem;
  color: white;
  display: flex;
  justify-content: center;
  transition: opacity 250ms;
  cursor: pointer;
  /* position above the dropdown, otherwise the dropdown will cover up the bottom sliver of the buttons */
  position: relative;
  z-index: 2;
  &:hover,
  &:focus {
    opacity: 0.7;
    outline: none;
  }
`

const NavbarItemEl = styled.li`
  position: relative;
`

const DropdownSlot = styled.div`
  z-index: 999;
  border-radius: 0.5rem;
  box-shadow: 0 50px 100px -20px rgb(50 50 93 / 25%), 0 30px 60px -30px rgb(0 0 0 / 30%), 0 -18px 60px -10px rgb(0 0 0 / 3%);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  perspective: 1500px;
`

export default function NavbarItem({ onMouseEnter, title, index, children }: { onMouseEnter: (index: number) => void; title: string; index: number; children: React.ReactNode }) {
  const onMouseEnterWrapper = useCallback(() => {
    onMouseEnter(index)
  }, [onMouseEnter, index])

  return (
    <NavbarItemEl onMouseEnter={onMouseEnterWrapper} onFocus={onMouseEnterWrapper}>
      <NavbarItemTitle>{title}</NavbarItemTitle>
      <DropdownSlot>{children}</DropdownSlot>
    </NavbarItemEl>
  )
}
