import React from 'react'
import App, { Container } from 'next/app'

import { ThemeProvider } from 'styled-components'
import { primaryTheme } from '../assets/globalStyle'

const TEMP_DATA = 

{
    galleries: [
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
    ],
    artworks: [

    ]
}

export default class MyApp extends App {
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }
        return { pageProps }
  }

    render () {
        const { Component, pageProps } = this.props

        return (
            <Container>
                <ThemeProvider theme={primaryTheme}>
                    <Component
                        {...pageProps}
                        tempData={TEMP_DATA}
                    />
                </ThemeProvider>
            </Container>
        )
    }
}