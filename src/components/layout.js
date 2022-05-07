import React from "react"
import styled, { ThemeProvider } from "styled-components"
import theme from "../styles/theme"
import Header from "./header"
import Footer from "./footer"
import HeroVideo from "./hero-video"

export default ({ children, isHomePage }) => (
  <ThemeProvider theme={theme}>
    {isHomePage && <HeroVideo />}
    <Header isHomePage={isHomePage} />
    <Wrapper>
      <main>{children}</main>
    </Wrapper>
    <Footer />
  </ThemeProvider>
)

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.wrapper};
  padding-right: 2rem;
  padding-left: 2rem;
`
