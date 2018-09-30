import styled from 'styled-components'

import Header from '../header/Header'
import { WrapperOut } from '../utils/Wrapper'

import 'normalize.css'
import '../../assets/index.css'

const Page = styled.div`
    min-width: 960px;
`

export const Layout = (props) => (
    <Page>
        <Header />
        {props.children}
    </Page>
)

export const LayoutWrappedOut = (props) => (
    <Page>
        <Header />
        <WrapperOut>{props.children}</WrapperOut> 
    </Page>
)
