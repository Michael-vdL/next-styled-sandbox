import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 100px;
  padding-top: 40px;
  font-size: 0.75em;
  & > div {
    color: white;
    font-size: 0.9em;
    border-radius: 7px;
    padding: 10px 20px;
    background: rgba(255, 247, 174, 0.2);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.12);
    backdrop-filter: blur(29px);
  }
`

const CardLabel = styled.div`
  display: block;
  width: auto;
  max-width: 65%;
  height: auto;
  padding: 10px 20px;
`

const CardGlassBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 360px;
  height: 100px;
  margin-top: 5px;
  padding: 10px 20px;
`

const GlassBoxContent = styled.div`
  width: 100%;
`

const GlassPersonContainer = styled.img`
  box-sizing: border-box;
  display: block;
  position: relative;
  height: 200px;
  min-height: 200px;
  width: auto;
  top: -110px;
  left: 80px;
`

export const CarouselCards = () => {
  return (
    <CardContainer>
      <CardLabel>Sarah, Software Engineer</CardLabel>
      <CardGlassBox>
        <GlassBoxContent>Words go here and we keep</GlassBoxContent>
        <GlassPersonContainer src={'./1x/girl-glass-2-8.png'} />
      </CardGlassBox>
    </CardContainer>
  )
}
