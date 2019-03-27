import { Link, Router } from '../routes'
import React, { Component } from 'react'

import { Button } from '../components/utils/Button'
import { Layout } from '../components/layout/Layout'
import { WrapperOut } from '../components/utils/Wrapper'

import Hero from '../components/hero/Hero'
import CTA from '../components/cta/CTA'
import SearchBar from '../components/searchBar/SearchBar'

import { Title1 } from '../components/utils/Title'
import { GalleryCard } from '../components/utils/GalleryCard'
import { ArtworkCard } from '../components/utils/ArtworkCard'
import { CuratorCard } from '../components/utils/CuratorCard'

import styled from 'styled-components'

const GalleriesWrapper = styled.div`
    margin-top: -50px;
    display: flex;
    transition: all 1s ease-out;
`

const FlexGrid = styled.div`
    display: flex;
    justify-content: space-between;
`

const FlexColumnBig = styled.div`
    padding: 0 25px 0 0;
    flex-shrink: 1;
`

const FlexColumnSmall = styled.div`
    width: 300px;
    flex-shrink: 0;
`

const ArtworksWrapper = styled.div`

`

const CuratorsWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 30px 0 0;
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
                    <FlexGrid>
                        <FlexColumnBig>
                            <Title1>Trending</Title1>
                            <ArtworksWrapper>
                                {tempData.artworks.map(i => 
                                    <ArtworkCard
                                        title={i.title}
                                        desc={i.desc}
                                        img={i.img}
                                        author={i.author}
                                    />
                                )}
                            </ArtworksWrapper>
                        </FlexColumnBig>
                        <FlexColumnSmall>
                            <CTA />
                            <Title1>Top curators</Title1>
                            <CuratorsWrapper>
                                {tempData.curators.map(i => 
                                    <CuratorCard
                                        name={i.name}
                                        img={i.img}
                                    />
                                )}
                            </CuratorsWrapper>
                        </FlexColumnSmall>
                    </FlexGrid>
                </WrapperOut>
            </Layout>
        )
    }
}
  
export default Index

