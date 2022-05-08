import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { isMobile } from "react-device-detect"
import theme from "../styles/theme"
import LinkedIn from "../icons/linkedin"
import Instagram from "../icons/instagram"
import Logo from "../images/logo.svg"
import LogoWhite from "../images/logo_white.svg"

export default ({ isHomePage }) => {
  const [showMenu, setShowMenu] = useState(false)
  const [insideVideo, setInsideVideo] = useState(true)

  useEffect(() => {
    if (typeof window === "undefined" || !isHomePage) return

    const onScroll = (e) => {
      const scrollTop = e.target.documentElement.scrollTop
      const distance = 600

      if (scrollTop > distance) {
        setInsideVideo(false)
      } else {
        setInsideVideo(true)
      }
    }
    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <HeaderWrapper isHomePage={isHomePage} insideVideo={insideVideo}>
      <Header>
        <LogoWrapper to="/" insideVideo={insideVideo} isHomePage={isHomePage}>
          <Logo />
        </LogoWrapper>

        <Nav>
          <NavLink
            isHomePage={isHomePage}
            insideVideo={insideVideo}
            activeClassName="active"
            to="/about-us"
          >
            About
          </NavLink>
          <NavLink
            isHomePage={isHomePage}
            insideVideo={insideVideo}
            activeClassName="active"
            to="/sign-up"
          >
            Sign up
          </NavLink>
          <NavLink
            isHomePage={isHomePage}
            insideVideo={insideVideo}
            activeClassName="active"
            to="/blog"
          >
            Blog
          </NavLink>
          <NavLink
            isHomePage={isHomePage}
            insideVideo={insideVideo}
            activeClassName="active"
            to="/contact"
          >
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
    </HeaderWrapper>
  )
}

const partlyActive = (className) => ({ isPartiallyCurrent }) => ({
  className: className + (isPartiallyCurrent ? ` active` : ``),
})

const PartlyActiveLink = ({ className, ...rest }) => (
  <Link getProps={partlyActive(className)} {...rest} />
)

const HeaderWrapper = styled.div`
  position: ${({ isHomePage }) =>
    isHomePage && !isMobile ? "fixed" : "relative"};
  width: 100%;
  z-index: 2;
  box-shadow: ${({ isHomePage, insideVideo }) =>
    isHomePage && !insideVideo ? "0px 4px 15px rgb(0 0 0 / 10%)" : "none"};
  background: ${({ isHomePage, insideVideo }) =>
    isHomePage && !insideVideo ? "white" : "transparent"};
  transition: all 0.25s ease-in-out;
`

const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.layout.wrapper};
  margin: 0 auto;
  padding: 1.5rem 2rem;
  z-index: 2;
  transition: padding 0.25s ease-in-out;
`

const LogoWrapper = styled(Link)`
  display: block;
  width: 8.75rem;
  color: #3b393c;

  @media (min-width: ${theme.breakpoints.s}) {
    color: ${({ isHomePage, insideVideo }) =>
      insideVideo && isHomePage ? "white" : "#3B393C"};
  }
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
  color: ${({ isHomePage, insideVideo }) =>
    isHomePage && insideVideo ? theme.colors.white : theme.colors.black};
  transition: color 0.25s ease-in-out;
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
