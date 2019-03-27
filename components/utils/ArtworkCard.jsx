import styled, { css } from 'styled-components'

const Wrapper = styled.div`
    margin: 0 0 15px 0;
    height: 150px;
`

const CardImg = styled.div`
    display: inline-block;
    float: left;
    margin: 0 20px 0 0;
    width: 250px;
    height: 100%;
    background: ${props => `url(${props.img}) no-repeat center center`};
    background-size: cover;
`

const CardTitle = styled.p`
    margin: 0 0 10px;
    font-weight: 700;
    font-size: 22px;
`
const CardDesc = styled.p`
    margin: 0 0 10px;
    font-size: 18px;
    color: ${props => props.theme.grey};
`

const CardMeta = styled.div`
    height: 100%;
    padding: 0 15px;
`

const CardAuthor = styled.span`
    color: ${props => props.theme.primary};
`

export const ArtworkCard = (props) => {
    return(
        <Wrapper>
            <CardImg img={props.img}/>    
            <CardMeta>
                <CardTitle>{props.title}</CardTitle>
                <CardDesc>{props.desc}</CardDesc>
                <CardAuthor>{props.author}</CardAuthor>
            </CardMeta>
        </Wrapper>
        
    )
}