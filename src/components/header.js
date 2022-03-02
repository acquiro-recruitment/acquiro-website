import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import theme from "../styles/theme"
import LinkedIn from "../icons/linkedin"
import Instagram from "../icons/instagram"
import Logo from "../images/logo.svg"
import LogoWhite from "../images/logo_white.svg"

export default () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <Header>
      <LogoWrapper to="/">
        <Logo />
      </LogoWrapper>

      <Nav>
        <NavLink activeClassName="active" to="/about-us">
          About
        </NavLink>
        <NavLink activeClassName="active" to="/sign-up">
          Sign up
        </NavLink>
        <NavLink activeClassName="active" to="/blog">
          Blog
        </NavLink>
        <NavLink activeClassName="active" to="/contact">
          Contact
        </NavLink>
      </Nav>

      <Hamburger
        aria-label="Toggle menu"
        aria-expanded={showMenu}
        onClick={() => setShowMenu(!showMenu)}
      >
        <span />
        <span />
        <span />
      </Hamburger>

      <MobileMenu
        style={{
          transform: `${showMenu ? "none" : "translate3d(100vw, 0, 0)"}`,
        }}
      >
        <MobileHeader>
          <LogoWrapper to="/">
            <LogoWhite />
          </LogoWrapper>

          <Hamburger
            aria-label="Toggle menu"
            aria-expanded={showMenu}
            onClick={() => setShowMenu(!showMenu)}
            mobile
          >
            <span />
            <span />
            <span />
          </Hamburger>
        </MobileHeader>

        <MobileNav>
          <NavLink activeClassName="active" to="/about-us">
            About
          </NavLink>
          <NavLink activeClassName="active" to="/sign-up">
            Sign Up
          </NavLink>
          <NavLink activeClassName="active" to="/blog">
            Blog
          </NavLink>
          <NavLink activeClassName="active" to="/contact">
            Contact
          </NavLink>
        </MobileNav>

        <Icons>
          <Icon
            href="https://www.linkedin.com/company/acquiro-international-recruitment/"
            target="_blank"
          >
            <LinkedIn />
          </Icon>
          <Icon
            href="https://www.instagram.com/acquiro.recruitment/"
            target="_blank"
          >
            <Instagram />
          </Icon>
        </Icons>
      </MobileMenu>
    </Header>
  )
}

const partlyActive = (className) => ({ isPartiallyCurrent }) => ({
  className: className + (isPartiallyCurrent ? ` active` : ``),
})

const PartlyActiveLink = ({ className, ...rest }) => (
  <Link getProps={partlyActive(className)} {...rest} />
)

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.5rem 0 2.5rem;
`

const LogoWrapper = styled(Link)`
  display: block;
  width: 8.75rem;
`

const Nav = styled.nav`
  display: none;

  > * + * {
    margin-left: 2rem;
  }

  @media (min-width: ${theme.breakpoints.s}) {
    display: flex;
  }
`

const NavLink = styled(PartlyActiveLink)`
  font-weight: 600;
  font-size: 1.1rem;
  color: ${theme.colors.black};
  transition: color 0.15s ease-in-out;
  &:hover {
    text-decoration: none;
  }
  &.active,
  &:focus,
  &:hover {
    color: ${theme.colors.primary};
  }
`

const Hamburger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  padding: 0;
  background: transparent;
  border: none;
  z-index: 2;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  span {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ mobile }) =>
      mobile ? "white" : theme.colors.primary};
  }

  @media (min-width: ${theme.breakpoints.s}) {
    display: none;
  }
`

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${theme.z.mobileMenu};
  background: ${theme.colors.black};
  transition: transform 0.15s ease-in-out;
  will-change: transform;
  @media (min-width: ${theme.breakpoints.s}) {
    display: none;
  }
`

const MobileHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 2.5rem 2rem;
`

const MobileNav = styled.nav`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -65%);
  text-align: center;
  a {
    display: block;
    width: 100%;
    font-size: 3.1vh;
    color: white;
    &.active {
      color: ${theme.colors.primary};
    }
  }
  a + a {
    margin-top: 1rem;
  }
`

const Icons = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 8.5rem;
  left: 50%;
  transform: translateX(-50%);
`

const Icon = styled.a`
  width: 3vh;
  color: white;
  .LinkedIn,
  .Unsplash {
    width: 2.9vh;
  }
  & + & {
    margin-left: 30px;
  }
  &:visited {
    fill: white;
  }
`
