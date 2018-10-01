import { Button } from '../utils/Button'

import styled, { css } from 'styled-components'
import React, { Component } from 'react'

const SearchWrapper = styled.div`
    z-index: 10;
    width: 600px;
    height: 54px;
    padding: 4px;

    border-radius: 25px;
    border: 1px solid ${props => props.theme.lightGrey};
    background-color: #fff;

    margin-top: ${props => props.inHero ? '-160px' : '20px' };
    margin-bottom: ${props => props.inHero ? '115px' : '0' };

    transition: all 1s ease-out;
`

const SearchForm = styled.form`
    display: flex;
    justify-content: space-between;

`

const SearchInput = styled.input`
    flex-grow: 1;
    margin: 0 15px;
    border: none;
    border-radius: 23px;
    outline: 0;
    caret-color: ${props => props.theme.primary};
`

const SearchSubmit = styled.input`
    display: inline;
    padding: 0 25px;

    background-color: ${props => props.theme.primary};
    color: #fff;

    height: 44px;
    
    border-radius: 22px;
    border: 0;
`


const SearchBar = (props) => (
    <SearchWrapper {...props}>
        <SearchForm
            onSubmit={e => {
                e.preventDefault()
                props.onSearchSubmit('Ok')
            }}
            action="/page"
            method="get"
        >
            <SearchInput />
            <SearchSubmit type='submit' value='Explore' />
        </SearchForm>
    </SearchWrapper>
)

export default SearchBar
