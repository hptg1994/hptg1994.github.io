import React from 'react'
import style from "styled-components"
import Wave from './Wave';

const SectionGroup = style.div`
  background:url(${props => props.image});
  height :720px;
  background-size:cover;
  display:grid;
  grid-template-rows:300px auto
  grid-gap:20px;
  position:relative;
  @media(max-width:640px){
    height:820px;
  }
`

const SectionLogo = style.img`
  align-self:end
  width:128px;
  margin:0 auto;

`

const SectionTitleGroup = style.div`
  display:grid;
  grid-template-columns:300px auto;
  margin: 0 40px;
  grid-gap:20px;
  grid-template-rows:auto 100%;
  @media(max-width: 720px){
    grid-template-columns: 1fr;
  }
`

const SectionTitle = style.h3`
  color:white;
  font-size:60px;
  margin:0;
  line-height:1.2;
  @media(max-width: 720px){
    font-size: 40px;
  }
`

const SectionText = style.p`
  color:white;
`

const WaveButtom = style.div`
  position: absolute;
  width:100%;
  bottom:-6px;
`

const WaveTop = style.div`
  position:absolute;
  width:100%;
  top:-6px;
  transform:rotate(180deg)
`

const Section = props => (
  <SectionGroup image={props.image}>
    <WaveTop><Wave /></WaveTop>
    <WaveButtom> <Wave /> </WaveButtom>
    <SectionLogo src={props.logo} />
    <SectionTitleGroup >
      <SectionTitle>{props.title}</SectionTitle>
      <SectionText>{props.text}</SectionText>
    </SectionTitleGroup>
  </SectionGroup>
)

export default Section;