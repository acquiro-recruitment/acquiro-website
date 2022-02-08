import React from "react"
import styled from "styled-components"
import Flex from "../icons/flex"
import Relocation from "../icons/relocation"
import Growth from "../icons/growth"

import { Fade } from "react-awesome-reveal"

export default () => (
  <Process>
    <Steps>
      <Fade delay={200} direction="up" triggerOnce>
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
      </Fade>

      <Fade delay={400} direction="up" triggerOnce>
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
      </Fade>

      <Fade delay={600} direction="up" triggerOnce>
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
      </Fade>
    </Steps>
  </Process>
)

const Process = styled.div`
  position: relative;
  padding-top: 6rem;
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
  width: 300px;
  text-align: center;
`

const StepIcon = styled.div`
  width: 60px;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.primary};
  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    width: 100px;
    &.icon-flex {
      width: 80px;
    }
    &.icon-relocation {
      width: 80px;
    }
    &.icon-growth {
      width: 80px;
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
