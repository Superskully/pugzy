import { Button } from '../utils/Button'

import styled, { css } from 'styled-components'
import React, { Component } from 'react'

const HeroWrapper = styled.section`
    height: 210px;
    width: 100%;
`

const BigText = styled.span`
    display: block;
    
    font-size: 48px;
    font-family: 'Spectral', 'Helvetica Neue', Arial, sans-serif;
    text-align: center;

    margin: 120px auto 20px;
`

const MidText = styled.span`
    display: block;
    
    font-size: 20px;
    text-align: center;

    margin: 0 auto 30px;
`

const ButtonWrapper = styled.div`
    text-align: center;
    margin: 0 auto;
`


const Hero = () => (
    <HeroWrapper>
        <BigText>Where art thrives</BigText>
        <MidText>Discover artists. Build collection. Find inspiration.</MidText>
        <ButtonWrapper>
            <Button big primary variant>Join us</Button>
            <Button big variant>Our vision</Button>
        </ButtonWrapper>
    </HeroWrapper>
)

export default Hero
