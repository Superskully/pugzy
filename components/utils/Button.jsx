import styled, { css } from 'styled-components'

export const Button = styled.button`
    border-radius: 3px;
    padding: 6px 15px;
    margin: 0 10px;
    background: transparent;
    border: 1px solid #798071;

    color: #798071;
    font-size: 14px;
    vertical-align: baseline;
    
    cursor: pointer;

    ${props => props.variant && css`
        color: #F4ACB7;
        border: 1px solid #F4ACB7;
    `}

    ${props => props.primary && css`
        background: #798071;
        color: white;
    `}

    ${props => props.primary && props.variant && css`
        background: #F4ACB7;
        color: white;
    `}

    ${props => props.big && css`
        font-size: 16px;
        padding: 8px 15px;
    `}
`
