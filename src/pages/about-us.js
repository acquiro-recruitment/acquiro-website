import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { useSpring, animated } from "react-spring"
import theme from "../styles/theme"
import Button from "../components/button"
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

const About = () => {
  const recruitments = useSpring({
    val: 90,
    from: { val: 60 },
    delay: 600,
    config: { tension: 50, friction: 10 },
  })

  const years = useSpring({
    val: 8,
    from: { val: 1 },
    delay: 1000,
    config: { tension: 50, friction: 10 },
  })

  return (
    <Layout>
      {/* <Seo title="All posts" /> */}
      <Container>
        <Info>
          <Text>
            <Reveal keyframes={fadeIn} triggerOnce cascade duration={600}>
              <p>
                Acquiro is a digital recruitment agency focusing on
                international specialist and tech recruitment. We have 8 years'
                experience of international recruitment for global Scandinavian
                companies from almost all parts of the world.
              </p>
              <p>
                When we recruit a great candidate for a key position it is the
                starting point of a chain reaction. The company and the
                customers will profit. The team and the people close to them
                will prosper. Eventually the business will grow and new bridges
                will be built.
              </p>
              <p>
                When you create a diverse team, no matter how big or small,
                bridges are built between people and perceptions. And bridges
                create new opportunities. And new opportunities create growth.
              </p>
            </Reveal>
          </Text>

          <Reveal keyframes={fadeIn} delay={600} triggerOnce>
            <Button dark href="/sign-up">
              Sign up now
            </Button>
          </Reveal>
        </Info>

        <NumbersWrapper>
          <Reveal keyframes={fadeIn} delay={400} triggerOnce>
            <Numbers>
              <animated.h1>
                {recruitments.val.interpolate((val) => Math.floor(val))}
              </animated.h1>
              <h1>+</h1>
              <Description>
                recruited
                <br />
                candidates
              </Description>
            </Numbers>
          </Reveal>

          <Reveal keyframes={fadeIn} delay={600} triggerOnce>
            <Numbers marginTop>
              <animated.h1>
                {years.val.interpolate((val) => Math.floor(val))}
              </animated.h1>
              <Description>
                years
                <br />
                in business
              </Description>
            </Numbers>
          </Reveal>

          <GlobeContainer>
            <StyledGlobe />
          </GlobeContainer>
        </NumbersWrapper>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 4rem auto 10rem;
`

const Info = styled.div`
  width: 38.75rem;
`

const NumbersWrapper = styled.div`
  position: relative;
  flex: 1;
`

const Numbers = styled.div`
  text-align: right;
  margin-top: ${({ marginTop }) => (marginTop ? "4rem" : 0)};
  h1 {
    display: inline-block;
    margin: 0;
    font-size: 5rem;
  }
  & + & {
    margin-top: 4rem;
  }
`

const Description = styled.span`
  display: block;
  font-size: 1.25rem;
  letter-spacing: -0.025em;
  line-height: 1.875rem;
  margin-top: 0.25rem;
  margin-bottom: -1.25rem;
`

const GlobeContainer = styled.div`
  position: absolute;
  top: 8rem;
  right: 1rem;
  width: 37.5rem;
  z-index: -1;
  opacity: 0.75;
`

const StyledGlobe = styled(Globe)`
  margin: 2rem auto 0;
  background: radial-gradient(60% 90% at 50% 30%, #cbe9f6c5 2%, #ffffffe8 100%);
  opacity: 0.1;
  border-radius: 50%;
`

const Text = styled.p`
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeSpeed;
  -webkit-text-size-adjust: 100%;
  font-feature-settings: "kern";
  visibility: visible;
  color: ${theme.colors.black};
  margin: 0 0 4rem;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  font-size: 1.25rem;
`

export default About
