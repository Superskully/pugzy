import { Link } from '../../routes'
import { Button } from '../utils/Button'

import styled, { css } from 'styled-components'
import React, { Component } from 'react'

const HeaderWrapper = styled.header`
  height: 66px;
  width: 100%;
  padding: 0 20px;
  border-bottom: 1px solid ${props => props.theme.lightGrey};
`

const HeaderInside = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  justify-content: flex-start;
  align-items: center;
`

const HeaderLogo = styled.img`
  height: 36px;
`

const HeaderAppName = styled.h1`
  align-items: center;
  margin-right: 60px;
  font-weight: 300;
  font-size: 24px;
  font-family: ${props => props.theme.serifFont};
`

const HeaderNav = styled.nav`
  flex-grow: 1;
`

const HeaderNavItem = styled.nav`
  display: inline-block;
  margin: 0 25px 0 0;

  font-size: 16px;
  color: ${props => props.theme.grey};
  font-weight: 300;
  cursor: pointer;

  transition: color 300ms linear;

  &:hover {
    color: ${props => props.theme.primary};
  }

  ${props => props.disabled && css`
    color: ${props => props.theme.lightGrey};
    &:hover {
      color: ${props => props.theme.lightGrey};
    }
  `}
`

export class Header extends Component {
  render() {
    return (
    <HeaderWrapper>
      <HeaderInside>
        <Link route='home'>
          <HeaderAppName>Pugzy</HeaderAppName>
        </Link>
        <HeaderNav>
          <HeaderNavItem>Galleries</HeaderNavItem>
          <HeaderNavItem disabled>Search</HeaderNavItem>
          <HeaderNavItem disabled>Artists</HeaderNavItem>
        </HeaderNav>
        <div>
          <Button variant>Login</Button>
          <Button primary variant>Signup</Button>
        </div>
      </HeaderInside>
    </HeaderWrapper>
    )
  }
}

export default Header
