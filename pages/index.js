import { Link, Router } from '../routes'
import React, { Component } from 'react'

import { Layout } from '../components/layout/Layout'
import { WrapperOut } from '../components/utils/Wrapper'

import Hero from '../components/hero/Hero'
import CTA from '../components/cta/CTA'
import SearchBar from '../components/searchBar/SearchBar'

import { Title1 } from '../components/utils/Title'
import { GalleryCard } from '../components/utils/Card'

import styled from 'styled-components'

const GalleriesWrapper = styled.div`
    margin-top: -50px;
    display: flex;
    transition: all 1s ease-out;
`

export class Index extends Component {

    render() {
        const { tempData } = this.props

        return (
            <Layout>
                <Hero />
                <WrapperOut>
                    <SearchBar
                        inHero
                        onSearchSubmit={query => Router.pushRoute('search', { query })}
                    />
                    <GalleriesWrapper>
                        {tempData.galleries.map(i => 
                            <Link
                                key={i.title}
                                route='artwork'
                                params={{slug: 'hello-world', id: 2}}
                            >
                                <GalleryCard
                                    title={i.title}
                                    desc={i.desc}
                                    background={i.background}
                                    author={i.author}
                                    likes={Math.floor(Math.random() * 1000) + 1}
                                />
                            </Link>
                        )}
                    </GalleriesWrapper>
                    <CTA />
                    <Title1>Most popular</Title1>
                </WrapperOut>
            </Layout>
        )
    }
}
  
export default Index

