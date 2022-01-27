import React from 'react'
import styled from 'styled-components'

const StyledH1 = styled.h1`
  font-family: 'Archivo Black';
  letter-spacing: -3px;
  font-weight: 400;
  line-height: 60px;
  font-size: 42px;
  color: white;
`

const FancyGradient = styled.span`
  background: linear-gradient(
    259.2deg,
    #c73d5d -21.61%,
    #b52719 -21.6%,
    #788dd9 29.03%,
    #ff0404 65.98%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export default function StatementSection() {
  return (
    <div style={{ alignSelf: 'center' }}>
      <StyledH1>
        We hire
        <br />
        <span
          style={{
            fontWeight: '800',
            fontSize: '60px',
            textTransform: 'uppercase',
            lineHeight: '0px',
            color: 'white',
          }}>
          for the <FancyGradient>Person</FancyGradient>
          <br />
          not the <span style={{ color: 'white' }}>Position</span>
        </span>
      </StyledH1>
    </div>
  )
}

//
