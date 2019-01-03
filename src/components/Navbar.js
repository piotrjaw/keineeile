import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { lighten, timingFunctions } from 'polished'
import styled from 'styled-components'
import Icon from './Icon'
import Logo from './Logo'
import RenderOnSize from './RenderOnSize'
import { lvha, media, palette, underline } from './common-styles'

const DIRECTION = "up"

const LogoWrapper = styled(Logo)`
  width: 180px;

  ${
    media.phone`
      width: 235px;
    `
  }
`

const Nav = styled.nav`
  height: 65px;
  padding: 0;
  position: relative;

  ${
    media.tablet`
      background-color: transparent;
      height: 129px;
      padding: 0 64px;
    `
  }
`

const addActiveRouteStyle = (props) => props.to === window.location.pathname
  ? underline
  : ``

const StyledLink = styled(AniLink)`
  ${addActiveRouteStyle}
  ${lvha`
    color: ${palette('text')}
    text-decoration: none;
  `}

  :hover {
    color: ${lighten(0.45, palette('text'))}
  }

  font-size: 14px;
  font-weight: 700;
  height: 30px;
  line-height: 30px;
  position: relative;
  text-transform: uppercase;
  transition: color .3s;

  ${
    media.tablet`
      z-index: 3;
    `
  }
`

const LogoLink = styled(AniLink)`
  left: 3px;
  position: absolute;
  top: 3px;
  z-index: 3;

  ${
    media.tablet`
      flex-grow: 1;
      position: static;
      text-align: center;
    `
  }
`

const LeftLink = styled(StyledLink)`
  ${
    media.tablet`
      margin-right: 42px;
    `
  }
`

const RightLink = styled(StyledLink)`
  ${
    media.tablet`
      margin-left: 42px;
    `
  }
`

const MenuWrapper = styled.div`
  align-items: center;
  background-color: ${palette('background', 'white')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 65px 0 0;
  position: absolute;
  width: 100%;
  transition: top .4s ${timingFunctions('easeOutBack')};
  top: ${(({ isMenuOpen }) => isMenuOpen ? '0' : '-200%')};
  z-index: 1;

  :after {
    background-color: ${palette('background', 'white')};
    content: '';
    display: block;
    width: 100%;
    height: 70px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }

  ${
    media.tablet`
      background-color: transparent;
      flex-direction: row;
      height: 100%;
      padding: 0;
      position: static;

      :after {
        content: none;
      }
    `
  }
`

const HamburgerButton = styled.button`
  border: none;
  color: ${palette('background', 'gray')};
  cursor: pointer;
  display: block;
  height: 32px;
  outline: 0;
  padding: 0;
  position: absolute;
  right: 10px;
  top: 9px;
  transition: color .2s;
  z-index: 3;

  :focus {
    outline: 0;
  }

  :hover {
    color: ${lighten(0.3, palette('background', 'gray'))};
  }

  ${
    media.phone`
      top: 17px;
    `
  }
`

const Blind = styled.div`
  background-color: ${palette('background', 'white')};
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 2;
`

const Navbar = class extends React.Component {
  state = {}

  handleButtonClick = () => {
    this.setState(({ isMenuOpen }) => ({ isMenuOpen: !isMenuOpen }))
  }

  render() {
    const { isMenuOpen } = this.state
    return (
      <Nav role="navigation" aria-label="main-navigation">
        <RenderOnSize
          size="tablet"
          up={ false }
        >
          <LogoLink
            to="/"
            title="Logo"
            cover
            direction={ DIRECTION }
            bg={ palette('background', 'active') }
          >
            <LogoWrapper />
          </LogoLink>
        </RenderOnSize>
        <MenuWrapper isMenuOpen={ isMenuOpen }>
          <LeftLink
            to="/"
            cover
            direction={ DIRECTION }
            bg={ palette('background', 'active') }
          >
            Home
          </LeftLink>
          <LeftLink
            to="/about"
            cover
            direction={ DIRECTION }
            bg={ palette('background', 'active') }
          >
            O nas
          </LeftLink>
          <RenderOnSize size="tablet">
            <LogoLink
              to="/"
              title="Logo"
              cover
              direction={ DIRECTION }
              bg={ palette('background', 'active') }
            >
              <LogoWrapper />
            </LogoLink>
          </RenderOnSize>
          <RightLink
            to="/companies"
            cover
            direction={ DIRECTION }
            bg={ palette('background', 'active') }
          >
            Dla firm
          </RightLink>
          <RightLink
            to="/contact"
            cover
            direction={ DIRECTION }
            bg={ palette('background', 'active') }
          >
            Kontakt
          </RightLink>
        </MenuWrapper>
        <RenderOnSize
          size="tablet"
          up={ false }
        >
          <HamburgerButton
            onClick={ this.handleButtonClick }
          >
            <Icon
              name={ this.state.isMenuOpen ? "close" : "menu" }
              size="32"
            />
          </HamburgerButton>
          <Blind />
        </RenderOnSize>
      </Nav>
    )
  }
}

export default Navbar
