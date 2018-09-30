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
const Text = styled.span`
    display: block;
    font-family: 'Spectral', 'Helvetica Neue', Arial, sans-serif;

    font-size: 28px;
    margin: 0 auto 30px;
`
const ButtonWrapper = styled.div`
`

const CTA = () => (
    <CTAWrapper>
        <Text>Discover artists. <br/> Build collection.<br/>  Find inspiration.</Text>
        <ButtonWrapper>
            <Button big primary>Join us</Button>
            <Button big>Our vision</Button>
        </ButtonWrapper>
    </CTAWrapper>
)

export default CTA
