import React from 'react'
import styled, { StyledComponent } from 'styled-components'

const NavbarEl = styled.nav`
  margin: auto;
  height: 100%;
`

const NavbarList = styled.ul`
  height: 100%;
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
`

export default function Navbar({ children, onMouseLeave }: { children: React.ReactNode; onMouseLeave: () => void }) {
  return (
    <NavbarEl onMouseLeave={onMouseLeave}>
      <NavbarList>{children}</NavbarList>
    </NavbarEl>
  )
}
