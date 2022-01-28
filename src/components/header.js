import { Link } from "gatsby"
import styled from "styled-components"
import Logo from "../images/logo.svg"

const Header = () => {
  return (
    <Container>
      <LogoWrapper to="/">
        <Logo />
      </LogoWrapper>
      <nav>
        <Link to="/about-us">About us</Link>
        <Link to="/move-to-sweden">Move to Sweden</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.5rem 0 6rem;
`

const LogoWrapper = styled(Link)`
  display: block;
  width: 140px;
`

export default Header
