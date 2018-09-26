// import Link from 'next/link'

//import 'typeface-spectral'
//import 'typeface-karla'
import 'normalize.css'

import '../assets/index.css'

import { WrapperOut } from '../components/utils/Wrapper'
import { Title1 } from '../components/utils/Title'
import { BookCard } from '../components/utils/Card'
import Header from '../components/header/Header'

import styled from 'styled-components'

const Page = styled.div`
  min-width: 960px;
`

const TEMP_DATA = [
    {
        title: "Refik Anadol",
        desc: "A technology-driven artist. <br/><br/>Embedding media arts into architecture, he questions the possibility of a post digital architectural future in which there are no more non-digital realities.",
        background: "https://i1.wp.com/trendland.com/wp-content/uploads/2018/04/refik-anadol-data-art-melting-memories-2.jpg?fit=1724%2C1150&ssl=1",
        author: "Tom Lelan"
    },
    {
        title: "Stendhal Syndrome",
        desc: "Alejandro Jodorowsky Universe",
        background: "https://www.versatile-mag.fr/wp-content/uploads/2016/11/jodorowsky-A4-new-FIN-HD.jpg",
        author: "Alt236"
    },
    {
        title: "TeamLab",
        desc: "Where art meet science",
        background: "https://www.sessions.edu/wp-content/uploads/13409.jpg",
        author: "Artjaws"
    },
    {
        title: "Summer of love",
        desc: "A retrospective and curation of works of inadequate fame. <br/> <br/> The ideals and aspirations of the late 1960s as expressed in music, film, fashion and design.",
        background: "https://static1.squarespace.com/static/593070a42994cad2710a6439/t/5b79575603ce646d8c6b9ff8/1534678893213/SUMMER.jpg?format=1000w",
        author: "Jerome"
    }
]

const Index = () => (
    <Page>
        <Header />
        <WrapperOut>
            <Title1>Trending</Title1>
            {TEMP_DATA.map(i => <BookCard key={i.title} title={i.title} desc={i.desc} background={i.background} author={i.author} likes={Math.floor(Math.random() * 1000) + 1  }/>)}
        </WrapperOut>
    </Page>
)
  
export default Index

