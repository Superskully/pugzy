import { Button } from '../utils/Button'
import { WrapperOut } from '../utils/Wrapper'

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
    font-family: ${props => props.theme.serifFont};
    margin: 0 0 20px;
`

const MidText = styled.span`
    display: block;
    font-size: 18px;
    margin: 0 0 50px;
`

const SearchWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    width: 600px;
    height: 54px;
    padding: 4px;

    border-radius: 25px;
    border: 1px solid ${props => props.theme.lightGrey};
`

const SearchInput = styled.input`
    flex-grow: 1;
    margin: 0 15px;
    border: none;
    border-radius: 23px;
    outline: 0;
    caret-color: ${props => props.theme.primary};
`

const SearchSubmit = styled.button`
    display: inline;
    padding: 0 25px;

    background-color: ${props => props.theme.primary};
    color: #fff;

    height: 44px;
    
    border-radius: 22px;
    border: 0;
`


const Hero = () => (
    <HeroWrapper>
        <WrapperOut>
            <BigText>Where art thrives</BigText>
            <MidText>Pugzy will help you organize the way you enjoy art, broading your inspirations.</MidText>
            <SearchWrapper>
                <SearchInput />
                <SearchSubmit>Explore</SearchSubmit>
            </SearchWrapper>
        </WrapperOut>
    </HeroWrapper>
)

export default Hero
