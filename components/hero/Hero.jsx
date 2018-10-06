import { Button } from '../utils/Button'
import { WrapperOut } from '../utils/Wrapper'

import styled, { css } from 'styled-components'
import React, { Component } from 'react'

const HeroWrapper = styled.section`
    z-index: -1;
    
    position: relative;
    height: 300px;
    width: 100%;
    padding: 70px 0 0;

    border-bottom: 1px solid ${props => props.theme.lightGrey};
    background-size: cover;
`

const BigText = styled.p`
    font-size: 72px;
    font-family: ${props => props.theme.serifFont};
    margin: 0;
    text-align: center;
`

const MidText = styled.p`
    font-size: 18px;
    margin: 0 0 50px;
    text-align: center;
`

const Hero = () => (
    <HeroWrapper>
        <WrapperOut>
            <BigText>Where art thrives</BigText>
            <br/>
            <MidText>Pugzy will help you organize the way you enjoy art, broading your inspirations.</MidText>
        </WrapperOut>
    </HeroWrapper>
)

export default Hero
