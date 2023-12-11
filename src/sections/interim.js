import React from "react"
import styled from "styled-components"
import theme from "../styles/theme"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const StyledSection = () => {
  return (
    <Section id="interim">
      <Content>
        <Heading>Find Your Interim Consultant Today</Heading>
        <Text>
          Our consultants bring flexibility and diverse expertise. We offer
          interim solutions within recruitment and talent acquisition as well as
          technical specialists to match the dynamic needs of your projects.
          We're not just recruiters; we're your trusted long-term partners –
          always working flexibly based on your changing needs, without
          compromising on quality. Let us know what you are looking for and
          access the right interim talent tailored to your unique needs.
        </Text>
        <ContactLink to="/find-consultants">
          Find Your Consultant Now
          <svg viewBox="0 0 19 13">
            <path
              d="M12.484 12.676c.206 0 .396-.039.57-.117.174-.078.346-.206.517-.384l4.22-4.38c.185-.199.325-.38.421-.543.096-.164.144-.356.144-.576 0-.22-.048-.41-.144-.57a3.37 3.37 0 00-.421-.538l-4.22-4.391a1.693 1.693 0 00-.517-.384 1.376 1.376 0 00-.57-.117c-.17 0-.336.034-.496.101-.16.068-.304.158-.431.272-.128.114-.231.247-.31.4a1.072 1.072 0 00-.117.495c0 .22.04.414.118.581.078.167.206.343.383.528l2.142 2.206H1.86c-.484 0-.86.126-1.13.378-.27.252-.405.599-.405 1.04 0 .44.135.786.405 1.038s.646.379 1.13.379h11.914L11.631 10.3a1.986 1.986 0 00-.383.532c-.079.17-.118.366-.118.587 0 .17.04.332.118.484.078.153.18.286.309.4.127.114.271.204.431.272.16.067.325.101.496.101z"
              fill="currentColor"
              fillRule="nonzero"
            />
          </svg>
        </ContactLink>
      </Content>

      <Image>
        <StaticImage src="../images/consultant.jpg" alt="consultant" />
      </Image>
    </Section>
  )
}

export default StyledSection

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 2rem;
  padding-top: 6rem;
  @media (min-width: ${theme.breakpoints.s}) {
    flex-direction: row;
    padding-top: 8rem;
    gap: 4rem;
    scroll-margin-top: 4ex;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: ${theme.breakpoints.s}) {
    width: 50%;
  }
`

const Heading = styled.h2`
  margin-bottom: 2rem;
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.2;
  @media (min-width: ${theme.breakpoints.s}) {
    font-size: 3.25rem;
  }
`

const Text = styled.p`
  margin-bottom: 2rem;
  font-size: 1.25rem;
  line-height: 1.6;
  @media (min-width: ${theme.breakpoints.s}) {
    font-size: 1.15rem;
  }
`

const Image = styled.div`
  width: 100%;
  img {
    border-radius: 1rem;
  }
  @media (min-width: ${theme.breakpoints.s}) {
    width: 50%;
  }
`

const ContactLink = styled(Link)`
  margin-top: 0.75rem;
  color: ${theme.colors.black};
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.8;
  svg {
    width: 0.875rem;
    margin-left: 0.35rem;
    margin-bottom: 0.025rem;
    color: ${theme.colors.primary};
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
    svg {
      width: 1.375rem;
      margin-left: 0.5rem;
      margin-bottom: 0.05rem;
      opacity: 0.35;
    }
  }
`
