import { Button } from '../utils/Button'

import styled, { css } from 'styled-components'
import React, { Component } from 'react'

const CTAWrapper = styled.section`
    height: 210px;
    width: 100%;

    margin: 20px auto;
    padding: 20px;

    background-color: #E8EBE4;
`
const Text = styled.p`
    font-family: ${props => props.theme.serifFont};

    font-size: 28px;
    margin: 0 auto 10px;
    
`
const ButtonWrapper = styled.div`
    margin-top: 15px;
`

const CTA = () => (
    <CTAWrapper>
        <Text>Discover artists.</Text>
        <Text>Build collection.</Text>
        <Text>Find inspiration.</Text>
        <ButtonWrapper>
            <Button big primary variant>Join us</Button>
            <Button big variant>Our vision</Button>
        </ButtonWrapper>
    </CTAWrapper>
)

export default CTA
