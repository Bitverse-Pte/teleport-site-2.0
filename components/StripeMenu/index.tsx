import React, { useCallback, useMemo, useState } from 'react'
import { Flipper } from 'react-flip-toolkit'

import Navbar from './Navbar'
import NavbarItem from './Navbar/NavbarItem'
import DropdownContainer from './DropdownContainer'
import DocsDropdown from './DropdownContents/DocsDropdown'
import ToolDropdown from './DropdownContents/ToolDropdown'
/* import GovernanceDropdown from './DropdownContents/GovernanceDropdown'
import EcoSystemDropdown from './DropdownContents/EcoSystemDropdown'
 */
import CommunityDropdown from './DropdownContents/CommunityDropdown'

const navbarConfig = [
  { title: 'Docs', dropdown: DocsDropdown },
  { title: 'Tool', dropdown: ToolDropdown },
  // { title: 'Governance', dropdown: GovernanceDrop },
  // { title: 'Ecosystem', dropdown: EcoSystemDrop },
  { title: 'Community', dropdown: CommunityDropdown },
  // {
  //   title: 'Ambassador',
  //   logo: ambassadorLogo,
  //   dropdown: null,
  // },
]

export default function AnimatedNavbar({ duration }: { duration: number }) {
  const [animatingOut, setAnimatingOut] = useState(false)
  const [activeIndices, setActiveIndices] = useState<number[]>([])
  const [animatingOutTimeout, setAnimatingOutTimeout] = useState(0)

  const resetDropdownState = useCallback((i: number) => {
    setActiveIndices([i])
    setAnimatingOut(false)
    setAnimatingOutTimeout(0)
  }, [])

  const onMouseEnter = useCallback(
    (i: number) => {
      if (animatingOutTimeout) {
        clearTimeout(animatingOutTimeout)
        resetDropdownState(i)
        return
      }
      if (activeIndices[activeIndices.length - 1] === i) return

      setActiveIndices((pre) => [...pre, i])
      setAnimatingOut(false)
    },
    [animatingOutTimeout, activeIndices, resetDropdownState]
  )

  const onMouseLeave = useCallback(() => {
    setAnimatingOut(true)
    setAnimatingOutTimeout(window.setTimeout(resetDropdownState, duration))
  }, [duration, resetDropdownState])

  const currentIndex = useMemo(() => {
    return activeIndices[activeIndices.length - 1]
  }, [activeIndices])

  const prevIndex = useMemo(() => {
    if (activeIndices.length > 1) {
      return activeIndices[activeIndices.length - 2]
    }
    return NaN
  }, [activeIndices])

  const CurrentDropdown = useMemo(() => {
    if (navbarConfig[currentIndex]) {
      return navbarConfig[currentIndex].dropdown
    }
  }, [currentIndex])

  const PrevDropdown = useMemo(() => {
    if (navbarConfig[prevIndex]) {
      return navbarConfig[prevIndex].dropdown
    }
  }, [prevIndex])

  const direction = useMemo(() => (currentIndex > prevIndex ? 'right' : 'left'), [currentIndex, prevIndex])

  return (
    <Flipper flipKey={currentIndex} spring={duration === 300 ? 'noWobble' : { stiffness: 10, damping: 10 }} className="stripe-menu-container">
      <Navbar onMouseLeave={onMouseLeave}>
        {navbarConfig.map(({ title }, index) => {
          return (
            <NavbarItem key={title} title={title} index={index} onMouseEnter={onMouseEnter}>
              {currentIndex === index && (
                <DropdownContainer direction={direction} animatingOut={animatingOut} duration={duration}>
                  {CurrentDropdown && <CurrentDropdown />}
                  {PrevDropdown && <PrevDropdown />}
                </DropdownContainer>
              )}
            </NavbarItem>
          )
        })}
      </Navbar>
    </Flipper>
  )
}
