import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  font-family: 'Archivo Black';
  letter-spacing: -3px;
  font-weight: 400;
  line-height: 60px;
  font-size: 42px;
`;

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
          }}>
          for the <span style={{ color: '#ec8628' }}>Person</span>
          <br />
          not the <span style={{ color: 'black' }}>Position</span>
        </span>
      </StyledH1>
    </div>
  );
}

//
