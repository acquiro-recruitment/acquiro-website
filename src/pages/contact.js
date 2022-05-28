import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import theme from "../styles/theme"
import Seo from "../components/seo"
import LinkedIn from "../icons/linkedin"
import Instagram from "../icons/instagram"
import LinkedInProfileLogo from "../icons/linkedin-profile"

import { Reveal } from "react-awesome-reveal"
import { keyframes } from "@emotion/react"

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 3.125rem, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

const Contact = () => {
  return (
    <Layout>
      <Seo title="Contact" />
      <Wrapper>
        <Reveal keyframes={fadeIn} triggerOnce>
          <Heading>Get in touch</Heading>
        </Reveal>

        <Reveal keyframes={fadeIn} delay={200} triggerOnce>
          <SubHeading>
            Contact us if you'd like to talk about new opportunities, current
            challenges or just get a coffee. Our inbox is open.
          </SubHeading>
        </Reveal>

        <Headshots>
          <Reveal keyframes={fadeIn} delay={400} triggerOnce>
            <Headshot>
              <Image>
                <StaticImage src="../images/lina.jpeg" alt="lina" />
              </Image>
              <Text>
                <span>Lina Sahlberg</span>
                Managing Partner
                <br />
                <a href="mailto:lina.sahlberg@acquirorecruitment.com">
                  lina.sahlberg@acquirorecruitment.com
                </a>
                <br />
                +46 (0) 707 13 15 23
                <br />
                <LinkedInProfile
                  href="https://www.linkedin.com/in/lina-sahlberg-69215118/"
                  target="_blank"
                >
                  <LinkedInProfileLogo />
                </LinkedInProfile>
              </Text>
            </Headshot>
          </Reveal>

          <Reveal keyframes={fadeIn} delay={600} triggerOnce>
            <Headshot>
              <Image>
                <StaticImage src="../images/elias.png" alt="elias" />
              </Image>
              <Text>
                <span>Elias Danger</span>
                Recruitment Consultant / Head of Denmark
                <br />
                <a href="mailto:elias.danger@acquirorecruitment.com">
                  elias.danger@acquirorecruitment.com
                </a>
                <br />
                +46 (0) 708 11 55 87
                <br />
                <LinkedInProfile
                  href="https://www.linkedin.com/in/elias-danger-9312a41b9/"
                  target="_blank"
                >
                  <LinkedInProfileLogo />
                </LinkedInProfile>
              </Text>
            </Headshot>
          </Reveal>
        </Headshots>

        <Reveal keyframes={fadeIn} delay={600} triggerOnce>
          <Info>
            <Column>
              <Address>
                <InfoHeading>Visiting Address</InfoHeading>
                <InfoText>
                  Acquiro International Recruitment
                  <br />
                  STUDIO, Nordenskiöldsgatan 24
                  <br />
                  SE-211 19, Malmö
                </InfoText>
              </Address>

              <Address>
                <InfoHeading>Postal Address</InfoHeading>
                <InfoText>
                  Acquiro International Recruitment AB
                  <br />
                  Regementsgatan 6
                  <br />
                  SE-211 42, Malmö
                </InfoText>
              </Address>
            </Column>

            <Column>
              <div>
                <InfoHeading>Email Address</InfoHeading>
                <InfoText>
                  <a href="mailto:info@acquirorecruitment.com">
                    info@acquirorecruitment.com
                  </a>
                </InfoText>
              </div>

              <div>
                <InfoHeading>Telephone</InfoHeading>
                <InfoText>+46 (0) 10-202 20 32</InfoText>
              </div>

              <div>
                <InfoHeading>Socials</InfoHeading>
                <InfoText>
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
                </InfoText>
              </div>
            </Column>
          </Info>
        </Reveal>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.main`
  margin-top: 1.5rem;
  margin-bottom: 4.75rem;
  @media (min-width: ${theme.breakpoints.s}) {
    margin-bottom: 8rem;
  }
`

const Heading = styled.h1`
  margin-top: 0;
  text-align: center;
  @media (min-width: ${theme.breakpoints.s}) {
    text-align: left;
  }
`

const SubHeading = styled.h3`
  margin: 0;
  font-weight: 500;
  line-height: 1.25;
  font-size: 1.5rem;
  text-align: center;
  @media (min-width: ${theme.breakpoints.s}) {
    font-size: 2.074rem;
    text-align: left;
  }
`

const Headshots = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 3.5rem 0;
  > * + * {
    margin-top: 3.5rem;
  }
  @media (min-width: ${theme.breakpoints.m}) {
    margin: 5rem 0;
    flex-direction: row;
    > * + * {
      margin-top: 0;
    }
  }
`

const Headshot = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  @media (min-width: ${theme.breakpoints.s}) {
    flex-direction: row;
    text-align: left;
  }
`

const Image = styled.div`
  width: 8.75rem;
  border-radius: 50%;
  border: 0.25rem solid ${theme.colors.primary};
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);

  @media (min-width: ${theme.breakpoints.s}) {
    margin-right: 2rem;
  }
`

const Text = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.65;
  a {
    color: ${theme.colors.text};
  }
  span {
    display: block;
    font-size: 1.5rem;
    font-weight: 700;
  }
`

const LinkedInProfile = styled.a`
  svg {
    margin-top: 0.35rem;
    width: 5rem;
  }
`

const Info = styled.p`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0;
  font-size: 1rem;
  @media (min-width: ${theme.breakpoints.s}) {
    flex-direction: row;
    text-align: left;
  }
`

const Column = styled.div`
  & + & {
    margin-top: 1rem;
  }
  > div + div {
    margin-top: 1rem;
  }
  @media (min-width: ${theme.breakpoints.s}) {
    & + & {
      margin-top: 0;
      margin-left: 4rem;
    }
  }
  @media (min-width: ${theme.breakpoints.m}) {
    & + & {
      margin-left: 0;
    }
  }
`

const Address = styled.div`
  width: 100%;
  @media (min-width: ${theme.breakpoints.m}) {
    width: 34.15rem;
  }
`

const InfoHeading = styled.div`
  font-weight: 700;
  font-size: 1.2rem;
`

const InfoText = styled.div`
  font-weight: 500;
  font-size: 1rem;
  a {
    color: ${theme.colors.text};
  }
`

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.75rem;
  color: ${theme.colors.black};
  @media (min-width: ${theme.breakpoints.s}) {
    justify-content: normal;
  }
`

const Icon = styled.a`
  width: 1.35rem;
  height: 1.35rem;
  color: inherit;
  & + & {
    margin-left: 1.15rem;
  }
  &:visited,
  &:hover {
    color: inherit;
  }
`

export default Contact
