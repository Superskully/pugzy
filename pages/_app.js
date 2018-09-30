import React from 'react'
import App, { Container } from 'next/app'

import { ThemeProvider } from 'styled-components'
import { primaryTheme } from '../assets/globalStyle'

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
                    <Component {...pageProps} />
                </ThemeProvider>
            </Container>
        )
    }
}