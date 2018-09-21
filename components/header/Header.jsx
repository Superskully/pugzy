import { Button } from '../utils/Button'

import styled, { css } from 'styled-components'
import React, { Component } from 'react'

const HeaderWrapper = styled.header`
  height: 66px;
  width: 100%;
  padding: 0 20px;
  border-bottom: 1px solid #e9e9e9;
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
  font-family: 'Spectral', 'Helvetica Neue', Arial, sans-serif;
`

const HeaderNav = styled.nav`
  flex-grow: 1;
`

const HeaderNavItem = styled.nav`
  display: inline-block;
  margin: 0 25px 0 0;

  font-size: 16px;
  color: #999;
  font-weight: 300;
  cursor: pointer;

  transition: color 300ms linear;

  &:hover {
    color: #F4ACB7;
  }

  ${props => props.disabled && css`
    color: #e9e9e9;
    &:hover {
      color: #e9e9e9;
    }
  `}
`

export class Header extends Component {
  render() {
    return (
    <HeaderWrapper>
      <HeaderInside>
        {/* <HeaderLogo src={logo} alt="logo" /> */}
        <HeaderAppName>Pugzy</HeaderAppName>
        <HeaderNav>
          <HeaderNavItem>Explore</HeaderNavItem>
          <HeaderNavItem disabled>Boards</HeaderNavItem>
          <HeaderNavItem disabled>Artists</HeaderNavItem>
          <HeaderNavItem disabled>Trending</HeaderNavItem>
        </HeaderNav>
        <div>
          <Button>Login</Button>
          <Button primary>Signup</Button>
        </div>
      </HeaderInside>
    </HeaderWrapper>
    )
  }
}

export default Header
