import React from "react"
import styled from "styled-components"
import Flex from "../icons/flex"
import Relocation from "../icons/relocation"
import Growth from "../icons/growth"
import theme from "../styles/theme"
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

export default () => (
  <Process>
    <Steps>
      <Reveal keyframes={fadeIn} fraction={1} triggerOnce>
        <Step>
          <StepIcon className="icon-flex">
            <Flex />
          </StepIcon>
          <StepHeading>Recruitment</StepHeading>
          <Text>
            Are you looking for work or need new hires for your company?
            <br />
            We can help you either way.
          </Text>
        </Step>
      </Reveal>

      <Reveal delay={300} keyframes={fadeIn} fraction={1} triggerOnce>
        <Step>
          <StepIcon className="icon-relocation">
            <Relocation />
          </StepIcon>
          <StepHeading>Relocation</StepHeading>
          <Text>
            We will give you all the support you need to successfully relocate
            to your country of choice.
          </Text>
        </Step>
      </Reveal>

      <Reveal delay={600} keyframes={fadeIn} fraction={1} triggerOnce>
        <Step>
          <StepIcon className="icon-growth">
            <Growth />
          </StepIcon>
          <StepHeading>Adaptation</StepHeading>
          <Text>
            We do follow-ups 6 and 12 months after each placement to make sure
            that everything is going well.
          </Text>
        </Step>
      </Reveal>
    </Steps>
  </Process>
)

const Process = styled.div`
  position: relative;
  padding-top: 86vw;

  @media (min-width: ${theme.breakpoints.s}) {
    padding-top: calc(100vh + 12rem);
  }
`

const Steps = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 3.5rem;

  @media (min-width: ${theme.breakpoints.m}) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const Step = styled.div`
  display: flex;
  flex-direction: column;
  width: 18.75rem;
  text-align: center;
`

const StepIcon = styled.div`
  width: 3.75rem;
  margin: 0 auto;
  color: ${theme.colors.primary};
  @media (min-width: ${theme.breakpoints.s}) {
    width: 6.25rem;
    &.icon-flex {
      width: 5rem;
    }
    &.icon-relocation {
      width: 5rem;
    }
    &.icon-growth {
      width: 5rem;
    }
  }
`

const StepHeading = styled.h4`
  margin-top: 1rem;
  margin-bottom: 1rem;
`

const Text = styled.p`
  margin: 0;
  font-size: 1.1rem;
`
