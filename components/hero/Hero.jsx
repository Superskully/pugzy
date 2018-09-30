import { Button } from '../utils/Button'
import { WrapperOut } from '../utils/Wrapper'

import styled, { css } from 'styled-components'
import React, { Component } from 'react'

const HeroWrapper = styled.section`
    z-index: -1;
    
    position: relative;
    height: 400px;
    width: 100%;
    padding: 70px 0 0;

    background: url('/static/home_bg.png') no-repeat top right;
`

const BigText = styled.p`
    display: inline-block;
    font-size: 48px;
    font-family: ${props => props.theme.serifFont};
    margin: 0 0 20px;
    padding: 2px 10px 2px 0;
    background-color: #fff;
`

const MidText = styled.p`
    display: inline-block;
    font-size: 18px;
    margin: 0 0 50px;
    padding: 2px 10px 2px 0;
    background-color: #fff;
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
