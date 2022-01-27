import styled, { css } from 'styled-components'

export const AuroraWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`

export const AuroraBall = styled.div`
  position: absolute;
  height: 200vh;
  width: 250vw;
  top: ${(props) => props.y};
  left: ${(props) => props.x};
  overflow: hidden;
  border-radius: 60%;
  ${(props) =>
    props.colorOne &&
    css`
      background: radial-gradient(circle at center, ${props.colorOne} 20%, ${props.colorTwo});
    `}
`

export const AuroraFilter = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  overflow: hidden;
  backdrop-filter: blur(2px);
`
