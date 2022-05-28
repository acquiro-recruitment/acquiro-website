import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import theme from "../styles/theme"
import LinkedIn from "../icons/linkedin"
import Instagram from "../icons/instagram"

export default ({ light }) => {
  const getYear = () => new Date().getFullYear()

  return (
    <Footer light={light}>
      <Container>
        <FooterContent>
          <ContactLink to="/sign-up" light={light}>
            <span>Let's start a conversation.</span>
            Sign up now
            <svg viewBox="0 0 19 13">
              <path
                d="M12.484 12.676c.206 0 .396-.039.57-.117.174-.078.346-.206.517-.384l4.22-4.38c.185-.199.325-.38.421-.543.096-.164.144-.356.144-.576 0-.22-.048-.41-.144-.57a3.37 3.37 0 00-.421-.538l-4.22-4.391a1.693 1.693 0 00-.517-.384 1.376 1.376 0 00-.57-.117c-.17 0-.336.034-.496.101-.16.068-.304.158-.431.272-.128.114-.231.247-.31.4a1.072 1.072 0 00-.117.495c0 .22.04.414.118.581.078.167.206.343.383.528l2.142 2.206H1.86c-.484 0-.86.126-1.13.378-.27.252-.405.599-.405 1.04 0 .44.135.786.405 1.038s.646.379 1.13.379h11.914L11.631 10.3a1.986 1.986 0 00-.383.532c-.079.17-.118.366-.118.587 0 .17.04.332.118.484.078.153.18.286.309.4.127.114.271.204.431.272.16.067.325.101.496.101z"
                fill="currentColor"
                fillRule="nonzero"
              />
            </svg>
          </ContactLink>
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
          <Copyright>Copyright Acquiro International Recruitment</Copyright>
        </FooterContent>
      </Container>
    </Footer>
  )
}

const Footer = styled.footer`
  position: relative;
  display: flex;
  align-items: center;
  background-color: ${theme.colors.black};
  color: white;
`

const Container = styled.div`
  width: ${theme.layout.wrapper};
  margin: 0 auto;
`

const FooterContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 2.5rem;
  padding-bottom: 3.5rem;
`

const ContactLink = styled(Link)`
  margin-top: 0.75rem;
  color: ${theme.colors.primary};
  font-size: 1.25rem;
  text-align: center;
  font-weight: 600;
  line-height: 1.8;
  span {
    display: block;
    font-size: 1.5rem;
    color: white;
    font-weight: 700;
  }
  svg {
    width: 0.875rem;
    margin-left: 0.35rem;
    margin-bottom: 0.025rem;
    color: white;
    transition: all 0.2s ease-in-out;
  }
  &:hover {
    cursor: pointer;
    svg {
      opacity: 1;
      transform: translateX(0.25rem);
    }
  }
  @media (min-width: ${theme.breakpoints.s}) {
    margin-bottom: 3.5rem;
    line-height: 1.6;
    font-size: 1.75rem;
    span {
      font-size: 2.5rem;
    }
    svg {
      width: 1.375rem;
      margin-left: 0.5rem;
      margin-bottom: 0.05rem;
      opacity: 0.35;
    }
  }
`

const Icons = styled.div`
  display: flex;
  margin-bottom: 3rem;
  margin-top: 2rem;
  color: white;
  @media (min-width: ${theme.breakpoints.s}) {
    margin-top: 0;
    margin-bottom: 3.75rem;
  }
`

const Icon = styled.a`
  width: 1.5rem;
  height: 1.5rem;
  color: inherit;
  & + & {
    margin-left: 2.5rem;
  }
  &:visited,
  &:hover {
    color: inherit;
  }
`

const Copyright = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: white;
  @media (min-width: ${theme.breakpoints.s}) {
    font-size: 1.1rem;
  }
`
