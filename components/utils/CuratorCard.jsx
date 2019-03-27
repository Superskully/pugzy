import styled, { css } from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    margin: 0 0 15px 0;
    width: 80px;

    flex-direction: column;
    align-items: center;
`

const CardImg = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    border: 1px solid ${props => props.theme.lightGrey};

    background: ${props => `url(${props.img}) no-repeat center center`};
    background-size: cover;
`

const CardTitle = styled.p`
    margin: 10px 0 10px;
    font-size: 12px;
    text-align: center;
`

const CardMeta = styled.div`
    height: 100%;
    padding: 0 15px;
`

export const CuratorCard = (props) => {
    return(
        <Wrapper>
            <CardImg img={props.img} />    
            <CardTitle>
                {props.name}
            </CardTitle>
        </Wrapper>
        
    )
}