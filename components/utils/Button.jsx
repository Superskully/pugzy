import styled, { css } from 'styled-components'

export const Button = styled.button`
    border-radius: 3px;
    padding: 6px 15px;
    margin: 0 10px;
    background: transparent;
    border: 1px solid #F4ACB7;

    color: #F4ACB7;
    font-size: 14px;
    vertical-align: baseline;
    
    cursor: pointer;

    ${props => props.primary && css`
        background: #F4ACB7;
        color: white;
    `}
`
