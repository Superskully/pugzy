import styled, { css } from 'styled-components'

const Wrapper = styled.div`
    display: inline-block;

    width: 290px;
    margin: 0 5px 15px 5px;
    vertical-align: bottom;

    transition: box-shadow .3s;

    :hover {
        box-shadow: 0 0 11px rgba(33, 33, 33, .2);
    }
`

const WrapperBackground = styled.div`
    position: relative;
    width: 100%;
    height: 350px;

    :last-child {
        margin: 0 0 15px 0;
    }

    background: ${props => `url(${props.background}) no-repeat top center`};
    background-size: cover;

    box-shadow: inset 0px 50px 180px 30px rgba(0, 0, 0, 0.6);

    cursor: pointer;
`

const WrapperGradient = styled.div`
    width: 100%;
    height: 100%;
    padding: 30px 25px 20px 30px;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
`

const CardTitle = styled.p`
    margin: 0;
    color: #fff;
    font-size: 36px;
    font-family: ${props => props.theme.serifFont};
    font-weight: 700;
`
const CardDesc = styled.p`
    position: absolute;
    left: 20px;
    right: 20px;
    bottom: 0;

    color: #fff;
    font-size: 16px;
`

const CardMeta = styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;
    height: 40px;
    background-color: #fff;
    border-radius: 0 0 5px 5px;
    border: 1px solid ${props => props.theme.lightGrey};

    color: ${props => props.theme.grey};
    font-size: 12px;

    line-height: 40px;
    padding: 0 15px;
`

const CardMetaAuthor = styled.span`
    color: ${props => props.theme.primary};
`

const CardMetaLikes = styled.span`
    color: ${props => props.theme.grey};
    font-size: 12px;
`

export const GalleryCard = (props) => {
    return(
        <Wrapper>
            <WrapperBackground background={props.background}>
                <WrapperGradient>
                    <CardTitle>{props.title}</CardTitle>
                    <CardDesc><span dangerouslySetInnerHTML={{__html: props.desc}}/></CardDesc>
                </WrapperGradient>
            </WrapperBackground>
            <CardMeta>
                <span>curated by <CardMetaAuthor>{props.author}</CardMetaAuthor></span>
                <CardMetaLikes>{props.likes} ♡</CardMetaLikes>
            </CardMeta>
        </Wrapper>
        
    )
}