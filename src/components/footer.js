import React from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"
import LinkedIn from "../icons/linkedin"
import Instagram from "../icons/instagram"

export default ({ light }) => {
  const getYear = () => new Date().getFullYear()

  return (
    <Footer light={light}>
      <Container>
        <FooterContent>
          <Copyright>Acquiro © Copyright {getYear()}</Copyright>
          <ContactLink to="/sign-up" light={light}>
            {/* <span>Do you have any questions?</span> */}
            <span>Let's start a conversation.</span>
            {/* Contact us */}
            Sign up now
            <svg viewBox="0 0 19 13">
              <path
                d="M12.484 12.676c.206 0 .396-.039.57-.117.174-.078.346-.206.517-.384l4.22-4.38c.185-.199.325-.38.421-.543.096-.164.144-.356.144-.576 0-.22-.048-.41-.144-.57a3.37 3.37 0 00-.421-.538l-4.22-4.391a1.693 1.693 0 00-.517-.384 1.376 1.376 0 00-.57-.117c-.17 0-.336.034-.496.101-.16.068-.304.158-.431.272-.128.114-.231.247-.31.4a1.072 1.072 0 00-.117.495c0 .22.04.414.118.581.078.167.206.343.383.528l2.142 2.206H1.86c-.484 0-.86.126-1.13.378-.27.252-.405.599-.405 1.04 0 .44.135.786.405 1.038s.646.379 1.13.379h11.914L11.631 10.3a1.986 1.986 0 00-.383.532c-.079.17-.118.366-.118.587 0 .17.04.332.118.484.078.153.18.286.309.4.127.114.271.204.431.272.16.067.325.101.496.101z"
                fill="currentColor"
                fillRule="nonzero"
              />
            </svg>
          </ContactLink>
          <Icons light={light}>
            <Icon
              href="https://linkedin.com/company/youxventures/"
              target="_blank"
            >
              <LinkedIn />
            </Icon>
            <Icon href="https://instagram.com/youxventures/" target="_blank">
              <Instagram />
            </Icon>
          </Icons>
        </FooterContent>
      </Container>
    </Footer>
  )
}

const Footer = styled.footer`
  position: relative;
  display: flex;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 3rem;
  background-color: ${({ theme }) => theme.colors.black};
  color: white
  min-height: 220px;
  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    flex-direction: row;
    justify-content: space-between;
    padding-top: 0;
    padding-bottom: 0;
    min-height: 400px;
  }
`

const Container = styled.div`
  width: ${({ theme }) => theme.layout.wrapper};
  margin: 0 auto;
`

const FooterContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: 6rem;
    margin-bottom: 4rem;
  }
`

const Copyright = styled.div`
  order: 1;
  margin-top: 1.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: white;
  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    order: 0;
    width: 280px;
    margin-top: 0;
    font-size: 1.1rem;
  }
`

const Icons = styled.div`
  display: flex;
  margin: 2rem 0 1rem;
  color: white;
  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    justify-content: flex-end;
    width: 280px;
    margin: 0;
  }
`

const Icon = styled.a`
  width: 24px;
  height: 24px;
  color: inherit;
  & + & {
    margin-left: 40px;
  }
  &:visited,
  &:hover {
    color: inherit;
  }
`

const ContactLink = styled(Link)`
  display: inline-block;
  margin-top: 0.75rem;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
  text-align: center;
  font-weight: 600;
  line-height: 1.8;
  span {
    display: block;
    font-size: 1rem;
    color: white;
    font-weight: 700;
  }
  svg {
    width: 14px;
    margin-left: 0.35rem;
    margin-bottom: 0.025rem;
    color: white;
    transition: all 0.2s ease-in-out;
  }
  &:hover {
    cursor: pointer;
    svg {
      opacity: 1;
      transform: translateX(4px);
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    margin-bottom: 7rem;
    line-height: 1.6;
    font-size: 1.75rem;
    span {
      font-size: 2.5rem;
    }
    svg {
      width: 22px;
      margin-left: 0.5rem;
      margin-bottom: 0.05rem;
      opacity: 0.35;
    }
  }
`
