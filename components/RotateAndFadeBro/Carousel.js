import { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'

const CarouselContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`

const CarouselInner = styled.div`
  position: relative;
  height: ${(props) => props.containerHeight};
  width: ${(props) => props.containerWidth};
`

const CarouselItem = styled.div`
  position: absolute;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  top: ${(props) => props.yOffset};
  transition: transform 0.4s ease, opacity 0.4s ease;
`

export const Carousel = ({ items, ...settings }) => {
  const intervalRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  // Used to determine which items appear above the active item

  // Adding Constants to adjust the scroll here
  const yOffset = settings.yOffset ? settings.yOffset : '360px' // How far apart each item is
  const itemHeight = settings.itemHeight ? settings.itemHeight : 240 // Used to determine the height/spacing of each item
  const halfwayIndex = settings.halfwayIndex ? settings.halfwayIndex : 3 // How many items will apear on the screen (sort of)
  const containerWidth = settings.containerWidth ? settings.containerWidth : '600px' // The glue
  const containerHeight = settings.containerHeight ? settings.containerHeight : '1000px' // The duct tape
  const rotationInterval = settings.rotationInterval ? settings.rotationInterval : 1.5 // rotation speed in seconds

  // Little bit of math don't hurt no one
  const shuffleThreshold = halfwayIndex * itemHeight
  const visibleStyleThreshold = shuffleThreshold / 2

  const determinePlacement = (itemIndex) => {
    if (activeIndex === itemIndex) return 0

    if (itemIndex >= halfwayIndex) {
      if (activeIndex > itemIndex - halfwayIndex) {
        return (itemIndex - activeIndex) * itemHeight
      } else {
        return -(items.length + activeIndex - itemIndex) * itemHeight
      }
    }

    if (itemIndex > activeIndex) {
      return (itemIndex - activeIndex) * itemHeight
    }

    if (itemIndex < activeIndex) {
      if ((activeIndex - itemIndex) * itemHeight >= shuffleThreshold) {
        return (items.length - (activeIndex - itemIndex)) * itemHeight
      }
      return -(activeIndex - itemIndex) * itemHeight
    }
  }

  const rotate = (direction) => {
    setActiveIndex((prevIndex) => {
      if (direction === 'next') {
        if (prevIndex + 1 > items.length - 1) {
          return 0
        }
        return prevIndex + 1
      }

      if (prevIndex - 1 < 0) {
        return items.length - 1
      }

      return prevIndex - 1
    })
  }

  // TODO: Timeout to intersection observer - stop when not visible, start when visible
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      rotate('next')
    }, rotationInterval * 1000)

    return () => {
      clearInterval(intervalRef.current)
    }
  }, [intervalRef])

  return (
    <>
      <button onClick={() => clearInterval(intervalRef.current)}>Stop the wheel pls</button>
      <CarouselContainer>
        <CarouselInner containerHeight={containerHeight} containerWidth={containerWidth}>
          {items.map((item, i) => {
            let shiftValue = determinePlacement(i)
            return (
              <CarouselItem
                key={i}
                yOffset={yOffset}
                visible={Math.abs(shiftValue) <= visibleStyleThreshold}
                style={{
                  transform: `translate(${Math.abs(shiftValue) / 2}px, ${shiftValue}px)`,
                }}>
                {item}
              </CarouselItem>
            )
          })}
        </CarouselInner>
      </CarouselContainer>
    </>
  )
}
