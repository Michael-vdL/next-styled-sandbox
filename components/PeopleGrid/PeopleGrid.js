import React from 'react';
import styled, { keyframes } from 'styled-components';

const ParentGrid = styled.div`
  height: auto;
  width: 500px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 200px 1fr;
  /* background: lightgreen; */
  align-items: start;
  justify-items: center;
`;

const PersonGridEle = styled.div`
  height: 140%;
  width: 90%;
  display: flex;
  justify-content: center;
  grid-row: 2/3;
  grid-column: ${(props) => props.gridCol};
  &.filterElement {
    filter: blur(40px);
  }
`;

const PersonThing = styled.div`
    width: 80%;
    height: 300px;
    grid-column: ${(props) => props.gridCol}
    align-items: center;
    justify-content: center;
`;

const ColorKeyframe = keyframes`
    0%{ 
        transform: scale(0);
    }
    30%{
        transform: scale(1);
    }
    70%{
        transform: scale(1);
    }
    100%{
        transform: scale(1);
    }
`;

const LightSource = styled.div`
  height: 170px;
  margin-top: -10px;
  width: 170px;
  /* border-radius: 50% 50% 0px 0px; */
  opacity: 0.9;
  z-index: ${(props) => props.zIndex};
  animation: ${ColorKeyframe} 8s;
  animation-iteration-count: 1;
  background: ${(props) => props.bgColor};
  transform: scale(1);
  margin: ${(props) => props.margin};
  :hover {
  }
`;

const HeadModel = styled.div`
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: cover;
  background-size: 90%;
  background-size: ${(props) => props.size};
  align-self: center;
  margin-top: -80px;
  width: 300px;
  height: 350px;
  grid-row: 2/3;

  animation: none;
  transform: scale(1);
  opacity: 1;
  border-radius: 10px;
`;

const NameBox = styled.div`
  height: 35%;
  align-self: center;
  width: 90%;
  border-radius: 20px;
  background: white;
  z-index: 8;
  grid-row: 1/2;
  grid-column: ${(props) => props.gridCol};
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.5);
  padding: 10px;
`;

const StrikeKeyframes = keyframes`
  0%{
    width: 0;
  },
  100%{
    width: 100%;
  }
`;
const StrikeThroughText = styled.span`
  position: relative;
  :after {
    position: absolute;
    content: ' ';
    top: 50%;
    left: 0;
    width: 100%;
    height: 3px;
    background: black;
    animation-name: ${StrikeKeyframes} 3s;
    animation-iteration-count: 1;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
  }
`;

const LightSource2 = styled(LightSource)``;

export default function PeopleGrid() {
  return (
    <ParentGrid>
      <PersonGridEle className='filterElement' gridCol={'1/2'}>
        <LightSource
          bgColor={
            'radial-gradient(54.31% 54.31% at 50.04% 49.96%, #0A345C 44.47%, rgba(208, 233, 255, 0) 100%);'
          }
        />
      </PersonGridEle>
      <PersonGridEle gridCol={'1/2'}>
        <HeadModel size={'105%'} src={'./1x/girl-glass-3-8.png'} zIndex={'5'} />
      </PersonGridEle>

      <NameBox gridCol='1/2'>
        Hi I'm <span className='strike'>an idiot</span>. Hire me
      </NameBox>

      <PersonGridEle className='filterElement' gridCol={'2/3'}>
        <LightSource
          margin={'-10px 0 0 -50px'}
          bgColor={
            'radial-gradient(54.31% 54.31% at 50.04% 49.96%, #DC7E28 44.47%, rgba(248, 225, 204, 0) 100%)'
          }
        />
      </PersonGridEle>
      <PersonGridEle gridCol={'2/3'}>
        <HeadModel src={'./1x/guy-glass-2-8.png'} zIndex={'5'} />
      </PersonGridEle>

      <NameBox gridCol='2/3' />
    </ParentGrid>
  );
}
