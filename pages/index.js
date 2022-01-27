import Head from 'next/head'
import Image from 'next/image'
import PeopleGrid from '../components/PeopleGrid/PeopleGrid'
import StatementSection from '../components/StatementSection/StatementSection'
import styles from '../styles/Home.module.css'
import { AuroraWrapper, AuroraBall, AuroraFilter } from '../components/AuroraBackground/AuroraBall'
import styled from 'styled-components'
import { Carousel } from '../components/RotateAndFadeBro/Carousel'

const MovedToAStyledComponent = styled.div`
  display: flex;
  flex-direction: row;
  gap: '50px';
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-image: url('Desktop - 4.png');
  background-repeat: no-repeat;
  background-position: auto;
  background-size: 100% 100%;
`

const TestImage = styled.div`
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: cover;
  background-size: 90%;
  background-size: ${(props) => props.size};
  width: 500px;
  height: 240px;
`

export default function Home() {
  // It uh... breaks after 5 items (maybe changing it so there are always less than 5 items and the items get pushed from a hidden array to a displayed array)
  const items = [
    <TestImage key={0} src='Girl.png' />,
    <TestImage key={1} src='Girl.png' />,
    <TestImage key={2} src='Girl.png' />,
    <TestImage key={3} src='Girl.png' />,
    <TestImage key={4} src='Girl.png' />,
    <TestImage key={5} src='Girl.png' />,
  ]

  const settings = {
    yOffset: '360px',
    itemHeight: 240,
    halfWayIndex: 3,
    containerWidth: '600px',
    containerHeight: '1000px',
    rotationInterval: 1.5,
  }

  return (
    <>
      {/* <AuroraWrapper>
        <AuroraBall x={'-25%'} y={'-50%'} colorOne={'#E27F1C'} colorTwo={'rgba(226, 127, 28, 0)'} />
        <AuroraBall x={'45%'} y={'-40%'} colorOne={'#D26900'} colorTwo={'rgba(226, 127, 28, 0)'} />
        <AuroraBall x={'-30%'} y={'50%'} colorOne={'#FDEB52'} colorTwo={'rgba(226, 127, 28, 0)'} />
        <AuroraFilter />
      </AuroraWrapper> */}
      {/* <MovedToAStyledComponent>
        <PeopleGrid />
      </MovedToAStyledComponent> */}
      <MovedToAStyledComponent>
        <StatementSection />
        <Carousel items={items} {...settings} />
      </MovedToAStyledComponent>
    </>
  )
}
