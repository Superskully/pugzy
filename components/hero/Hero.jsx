import { Button } from '../utils/Button'

import styled, { css } from 'styled-components'
import React, { Component } from 'react'

const HeroWrapper = styled.section`
    position: relative;
    height: 410px;
    width: 100%;
    padding: 70px 0 0;

`

const BigText = styled.span`
    display: block;
    
    font-size: 48px;
    font-family: 'Spectral', 'Helvetica Neue', Arial, sans-serif;
    text-align: center;

    margin: 0 auto 20px;
`

const MidText = styled.span`
    display: block;
    
    font-size: 20px;
    text-align: center;

    margin: 0 auto 50px;
`

const SearchWrapper = styled.div`
    display: flex;
    
    width: 600px;
    height: 60px;

    border-radius: 30px;
    border: 1px solid #eee;

    margin: 0 auto;
`

const SearchInput = styled.input`
    border: none;
`

const SearchSubmit = styled.button`

`


const Hero = () => (
    <HeroWrapper>
        <BigText>Where art thrives</BigText>
        <MidText>Pugzy will help you organize the way you enjoy art, broading your inspirations.</MidText>
        {/* <SearchWrapper>
            <SearchInput />
            <SearchSubmit>Search</SearchSubmit>
        </SearchWrapper> */}
    </HeroWrapper>
)

export default Hero
