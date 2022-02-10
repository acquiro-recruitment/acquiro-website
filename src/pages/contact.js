import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import theme from "../styles/theme"
import Seo from "../components/seo"

import { Reveal } from "react-awesome-reveal"
import { keyframes } from "@emotion/react"

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 50px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

const Contact = () => {
  return (
    <Layout>
      {/* <Seo title="All posts" /> */}
      <Wrapper>
        <Reveal keyframes={fadeIn} triggerOnce>
          <Heading>Get in touch</Heading>
        </Reveal>

        <Reveal keyframes={fadeIn} delay={200} triggerOnce>
          <SubHeading>
            Contact us if you'd like to talk about new opporunities, current
            challenges or just get a coffee. The inbox is open.
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
                lina.sahlberg@acquirorecruitment.com
                <br />
                +46 (0) 707 13 15 23
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
                Recruiting Consultant
                <br />
                elias.danger@acquirorecruitment.com
                <br />
                +46 (0) 708 11 55 87
              </Text>
            </Headshot>
          </Reveal>
        </Headshots>

        <Reveal keyframes={fadeIn} delay={600} triggerOnce>
          <Info>
            <Address>
              <InfoHeading>Visiting Address</InfoHeading>
              <InfoText>
                Acquiro International Recruitment
                <br />
                STUDIO, Nordenskiöldsgatan 24
                <br />
                211 19, Malmö
                <br />
                Sweden
              </InfoText>
            </Address>

            <div>
              <div>
                <InfoHeading>Email Address</InfoHeading>
                <InfoText>info@acquirorecruitment.com</InfoText>
              </div>

              <Phone>
                <InfoHeading>Telephone</InfoHeading>
                <InfoText>+46 (0) 707 13 15 23</InfoText>
              </Phone>
            </div>
          </Info>
        </Reveal>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.main`
  margin-top: 2rem;
  margin-bottom: 2rem;
  @media (min-width: ${theme.breakpoints.s}) {
    margin-bottom: 8rem;
  }
`

const Heading = styled.h1`
  margin-top: 0;
`

const SubHeading = styled.h3`
  margin: 0;
  font-weight: 500;
  line-height: 1.25;
`

const Headshots = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 6rem 0;
`

const Headshot = styled.div`
  display: flex;
  align-items: center;
`

const Image = styled.div`
  width: 140px;
  margin-right: 2rem;
  border-radius: 50%;
  border: 4px solid ${theme.colors.primary};
  overflow: hidden;
`

const Text = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.65;

  span {
    display: block;
    font-size: 1.5rem;
    font-weight: 700;
  }
`

const Info = styled.p`
  display: flex;
  margin: 0;
  font-size: 1rem;
`

const Address = styled.div`
  width: 550px;
`

const Phone = styled.div`
  margin-top: 1rem;
`

const InfoHeading = styled.div`
  font-weight: 700;
  font-size: 1.2rem;
`

const InfoText = styled.div`
  font-weight: 500;
  font-size: 1rem;
`

export default Contact
