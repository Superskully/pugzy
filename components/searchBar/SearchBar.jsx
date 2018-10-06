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
    margin: ${props => props.inHero ? '-80px' : '20px' } auto ${props => props.inHero ? '115px' : '0' };

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

    :placeholder {
        color: ${props => props.theme.lightGrey};
    }
`

export class SearchBar extends Component {

    state = {
        value: ''
    }

    handleChange = event => {
        this.setState({ value: event.target.value })
    }

    render() {
        const { inHero, onSearchSubmit } = this.props
        const { value } = this.state

        return (
            <SearchWrapper
                inHero={inHero}
            >
                <SearchForm
                    onSubmit={e => {
                        e.preventDefault()
                        onSearchSubmit(value)
                    }}
                    action="/page"
                    method="get"
                >
                    <SearchInput
                        onChange={this.handleChange}
                        placeholder='Search'
                        value={value}
                    />
                    <SearchSubmit
                        type='submit'
                        value='Explore'
                    />
                </SearchForm>
            </SearchWrapper>
        )
    }
}

export default SearchBar
