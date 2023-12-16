import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Form from "../components/form-consultants"
import theme from "../styles/theme"
import Globe from "../images/globe.svg"

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

const FindConsultants = () => (
  <Layout>
    <Wrapper>
      <Info>
        <Reveal keyframes={fadeIn} triggerOnce>
          <Heading>Hire industry-leading interim consultants</Heading>
        </Reveal>

        <Reveal keyframes={fadeIn} delay={200} triggerOnce>
          <Text>
            From tech professionals to exceptional managers and recruitment
            specialists, our talent pool brims with dedicated experts keen on
            driving your projects forward. Start your journey today and unlock
            the potential of Acquiro's interim consultant network by filling out
            the form, it’s completely free of charge and only takes a couple of
            minutes. We will get in contact with you when we have a matching
            consultant, precisely picked to meet and exceed your expectations.
          </Text>
        </Reveal>

        <Reveal keyframes={fadeIn} delay={600} triggerOnce>
          <GlobeContainer>
            <StyledGlobe />
          </GlobeContainer>
        </Reveal>
      </Info>

      <Form />
    </Wrapper>
  </Layout>
)

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2rem;
  margin-bottom: 4rem;
  @media (min-width: ${theme.breakpoints.s}) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 24rem;
  }
`

const Info = styled.aside`
  position: relative;
  margin-bottom: 1.5rem;
  @media (min-width: ${theme.breakpoints.s}) {
    margin-right: 4rem;
  }
  @media (min-width: ${theme.breakpoints.m}) {
    margin-right: 6rem;
  }
`

const Heading = styled.h1`
  margin: 0;
  margin-bottom: 1.75rem;
  font-weight: 800;
  br {
    display: none;
  }
  @media (min-width: ${theme.breakpoints.s}) {
    br {
      display: block;
    }
  }
`

const Text = styled.p`
  font-size: 1.15rem;
  color: ${theme.colors.grey};
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: 0.02em;
`

const GlobeContainer = styled.div`
  display: none;
  position: relative;
  @media (min-width: ${theme.breakpoints.s}) {
    display: block;
  }
`

const StyledGlobe = styled(Globe)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 32.5rem;
  margin: 1rem auto 2rem;
  opacity: 0.4;
  border-radius: 50%;
`

export default FindConsultants
