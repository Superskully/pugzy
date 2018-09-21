// import Link from 'next/link'

//import 'typeface-spectral'
//import 'typeface-karla'
import 'normalize.css'

import '../assets/index.css'

import { WrapperOut } from '../components/utils/Wrapper'
import { Title1 } from '../components/utils/Title'
import Header from '../components/header/Header'

import styled from 'styled-components'

const Page = styled.div`
  min-width: 960px;
`

const Index = () => (
    <Page>
        <Header />
        <WrapperOut>
            <Title1>Latests</Title1>
            <Title1>Trending</Title1>
            {['1', '2', '3', '4', '5'].map(i => <img key={i} src ="https://picsum.photos/350/200?random" alt="artwork"/>)}
            <img src ="https://placeimg.com/640/480/any" alt="artwork"/>
            <img src ="https://placeimg.com/640/480/any" alt="artwork"/>
        </WrapperOut>
    </Page>
)
  
export default Index

