import styled, { css } from 'styled-components'

export const Button = styled.button`
    border-radius: 3px;
    padding: 6px 15px;
    margin: 0 10px;
    background: transparent;

    border: 1px solid ${props => props.variant ? props.theme.secondary : props.theme.primary};
    color: ${props => props.variant ? props.theme.secondary : props.theme.primary};

    font-size: 14px;
    vertical-align: baseline;
    
    cursor: pointer;

    :first-child {
        margin-left: 0;
    }
    
    :last-child {
        margin-right: 0;
    }

    ${props => props.primary && css`
        background: ${props => props.variant ? props.theme.secondary : props.theme.primary};
        color: white;
    `}

    ${props => props.big && css`
        font-size: 16px;
        padding: 8px 15px;
    `}
`
