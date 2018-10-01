import { Link, Router } from '../routes'
import React, { Component } from 'react'

import { Layout } from '../components/layout/Layout'
import { WrapperOut } from '../components/utils/Wrapper'

import SearchBar from '../components/searchBar/SearchBar'

import styled from 'styled-components'

export class Search extends Component {

    render() {
        return (
            <Layout>
                <WrapperOut>
                    <SearchBar />
                </WrapperOut>
            </Layout>
        )
    }
}
  
export default Search

