import React from "react"
import styled from "styled-components"
import Flex from "../icons/flex"
import Relocation from "../icons/relocation"
import Growth from "../icons/growth"

import { Reveal } from "react-awesome-reveal"
import { keyframes } from "@emotion/react"

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 4.6875rem, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

export default () => (
  <Process>
    <Steps>
      <Reveal delay={200} fraction={1} keyframes={fadeIn} triggerOnce>
        <Step>
          <StepIcon className="icon-flex">
            <Flex />
          </StepIcon>
          <StepHeading>Recruitment</StepHeading>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
            harum ad quae officia expedita!
          </Text>
        </Step>
      </Reveal>

      <Reveal delay={400} fraction={1} keyframes={fadeIn} triggerOnce>
        <Step>
          <StepIcon className="icon-relocation">
            <Relocation />
          </StepIcon>
          <StepHeading>Relocation</StepHeading>
          <Text>
            Quaerat totam, dolor sit amet consectetur adipisicing elit. Aliquid
            harum ad quae officia expedita!
          </Text>
        </Step>
      </Reveal>

      <Reveal delay={600} fraction={1} keyframes={fadeIn} triggerOnce>
        <Step>
          <StepIcon className="icon-growth">
            <Growth />
          </StepIcon>
          <StepHeading>Adaptation</StepHeading>
          <Text>
            Adipisicing ipsum, dolor sit amet consectetur adipisicing elit.
            Aliquid harum ad quae officia expedita!
          </Text>
        </Step>
      </Reveal>
    </Steps>
  </Process>
)

const Process = styled.div`
  position: relative;
  padding-top: 16rem;
`

const Heading = styled.h1`
  margin-bottom: 6rem;
  font-size: 2.5rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
`

const Steps = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const Step = styled.div`
  display: flex;
  flex-direction: column;
  width: 18.75;
  text-align: center;
`

const StepIcon = styled.div`
  width: 3.75rem;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.primary};
  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
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
  font-size: 1.1rem;
`
