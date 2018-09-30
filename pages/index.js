import { Link } from '../routes'
import React, { Component } from 'react'

import { Layout } from '../components/layout/Layout'
import { WrapperOut } from '../components/utils/Wrapper'

import Hero from '../components/hero/Hero'
import CTA from '../components/cta/CTA'

import { Title1 } from '../components/utils/Title'
import { GalleryCard } from '../components/utils/Card'

import styled from 'styled-components'

const TEMP_DATA = [
    {
        title: "Lovecraft's Legacy",
        desc: "Maybe the most influential horror writer of the 20th century. </br> </br> He was a pioneer of ‘open content’ and shared world works, by not jealousy guarding his creations but allowing and encouraging other writers to use elements of his work.",
        background: "http://1.bp.blogspot.com/-XU-D8en6CbE/TtUJUqiyLJI/AAAAAAAACv4/J9podUqR3DI/s1600/29.11.11.jpg",
        author: "Tom Lelan"
    },
    {
        title: "Dans l'oeil d'Escher",
        desc: "Impossible objects, explorations of infinity, reflection, symmetry, perspective.",
        background: "https://www.nationalgalleries.org/sites/default/files/styles/thumbnail/public/exhibitions/TeaserEscher.jpg",
        author: "Alt236"
    },
    {
        title: "Refik Anadol",
        desc: "A technology-driven artist. <br/><br/>Embedding media arts into architecture, he questions the possibility of a post digital architectural future in which there are no more non-digital realities.",
        background: "https://i1.wp.com/trendland.com/wp-content/uploads/2018/04/refik-anadol-data-art-melting-memories-2.jpg?fit=1724%2C1150&ssl=1",
        author: "Max"
    },
    {
        title: "Summer of love",
        desc: "A retrospective and curation of works of inadequate fame. <br/> <br/> The ideals and aspirations of the late 1960s as expressed in music, film, fashion and design.",
        background: "https://static1.squarespace.com/static/593070a42994cad2710a6439/t/5b79575603ce646d8c6b9ff8/1534678893213/SUMMER.jpg?format=1000w",
        author: "Jerome"
    }
]

const GalleriesWrapper = styled.div`
    margin-top: -50px;
`

export class Index extends Component {
    render() {
        return (
            <Layout>
                <Hero
                    onSearch={() => {}}
                />
                <WrapperOut>
                    <GalleriesWrapper>
                        {TEMP_DATA.map(i => 
                            <Link
                                key={i.title}
                                route='artwork'
                                params={{slug: 'hello-world', id: 2}}
                            >
                                <a>
                                    <GalleryCard
                                        title={i.title}
                                        desc={i.desc}
                                        background={i.background}
                                        author={i.author}
                                        likes={Math.floor(Math.random() * 1000) + 1}
                                    />
                                </a>
                            </Link>
                        )}
                    </GalleriesWrapper>
                    <CTA />
                </WrapperOut>
            </Layout>
        )
    }
}
  
export default Index

