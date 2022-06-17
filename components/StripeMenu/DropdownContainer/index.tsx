import React, { Component, Children, createRef, useRef, useEffect } from 'react'
import { Flipped } from 'react-flip-toolkit'
import { DropdownRoot, Caret, DropdownBackground, AltBackground, InvertedDiv } from './Components'
import FadeContents from './FadeContents'

const getFirstDropdownSectionHeight = (el: HTMLDivElement) => {
  if (!el || !el.querySelector || !el.querySelector('*[data-first-dropdown-section]')) return 0
  return (el.querySelector('*[data-first-dropdown-section]') as HTMLDivElement).offsetHeight // offsetHeight
}

const immediateSetTranslateY = (el: HTMLDivElement, translateY: number) => {
  el.style.transform = `translateY(${translateY}px)`
  el.style.transition = 'transform 0s'
  requestAnimationFrame(() => (el.style.transitionDuration = ''))
}

const updateAltBackground = ({ altBackground, prevDropdown, currentDropdown }: any) => {
  const prevHeight = getFirstDropdownSectionHeight(prevDropdown)
  const currentHeight = getFirstDropdownSectionHeight(currentDropdown)

  if (prevHeight) {
    // transition the grey ("alt") background from its previous height to its current height
    immediateSetTranslateY(altBackground, prevHeight)
    requestAnimationFrame(() => {
      altBackground.style.transform = `translateY(${currentHeight}px)`
    })
  } else {
    // just immediately set the background to the appropriate height
    // since we don't have a stored value
    immediateSetTranslateY(altBackground, currentHeight)
  }
}

export default function DropdownContainer({ children, animatingOut, direction, duration }: { children: React.ReactNode; animatingOut: boolean; direction: string; duration: number }) {
  const currentDropdownEl = useRef<HTMLDivElement>()
  const prevDropdownEl = useRef<HTMLDivElement>()
  const altBackgroundEl = useRef<HTMLDivElement>()

  useEffect(() => {
    updateAltBackground({
      altBackground: altBackgroundEl.current,
      prevDropdown: prevDropdownEl.current,
      currentDropdown: currentDropdownEl.current,
    })
  }, [duration])

  const [currentDropdown, prevDropdown] = Children.toArray(children)
  return (
    <DropdownRoot direction={direction} animatingOut={animatingOut} duration={duration}>
      {/* <Flipped flipId="dropdown-caret">
        <Caret />
      </Flipped> */}
      <Flipped flipId="dropdown">
        <DropdownBackground>
          <Flipped inverseFlipId="dropdown">
            <InvertedDiv>
              <AltBackground ref={altBackgroundEl as React.RefObject<HTMLDivElement>} duration={duration} />
              <FadeContents direction={direction} duration={duration} ref={currentDropdownEl}>
                {currentDropdown}
              </FadeContents>
            </InvertedDiv>
          </Flipped>

          <Flipped inverseFlipId="dropdown" scale>
            <InvertedDiv absolute>
              {prevDropdown && (
                <FadeContents animatingOut direction={direction} duration={duration} ref={prevDropdownEl}>
                  {prevDropdown}
                </FadeContents>
              )}
            </InvertedDiv>
          </Flipped>
        </DropdownBackground>
      </Flipped>
    </DropdownRoot>
  )
}
