import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Logo from "../images/logo.svg"

export default () => (
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
  </Header>
)

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

const LogoWrapper = styled(PartlyActiveLink)`
  display: block;
  width: 8.75rem;
`

const Nav = styled.nav`
  display: flex;

  > * + * {
    margin-left: 2rem;
  }
`

const NavLink = styled(PartlyActiveLink)`
  font-weight: 600;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.black};
  transition: color 0.15s ease-in-out;
  &:hover {
    text-decoration: none;
  }
  &.active,
  &:focus,
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`
