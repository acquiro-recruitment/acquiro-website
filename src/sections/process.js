import React from "react"
import styled from "styled-components"
import Flex from "../icons/flex"
import Relocation from "../icons/relocation"
import Growth from "../icons/growth"
import theme from "../styles/theme"
import { Reveal } from "react-awesome-reveal"
import { keyframes } from "@emotion/react"
import { Link } from "gatsby"

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
  <>
    <Process>
      <Steps id="process">
        <Reveal keyframes={fadeIn} fraction={1} triggerOnce>
          <Step>
            <StepIcon className="icon-flex">
              <Flex />
            </StepIcon>
            <StepHeading>Recruitment</StepHeading>
            <Text>
              We recruit Managers and technical specialists globally for
              placement in Scandinavia or remote. We also offer interim
              solutions within recruitment and talent acquisition.
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
              Moving to a new country is a big deal and the process raises many
              questions. We support all our clients and candidates with
              information and advice during the whole process. We also help with
              all practical aspects through partners.
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
              Our commitment does not end when we place a candidate. We do
              follow-ups 6 and 12 months after each recruitment to make sure
              that everything is going well. We also have a one year guarantee
              on all our recruitments.
            </Text>
          </Step>
        </Reveal>
      </Steps>
    </Process>

    <Reveal delay={300} keyframes={fadeIn} fraction={1} triggerOnce>
      <Button to="/sign-up">
        Sign up now
        <svg width="16" height="11">
          <path
            d="M10.79 10.648c.182 0 .351-.035.506-.104.154-.07.307-.183.458-.34L15.5 6.316a2.87 2.87 0 00.373-.482.99.99 0 00.128-.511.965.965 0 00-.128-.506 2.991 2.991 0 00-.373-.478L11.754.444a1.502 1.502 0 00-.458-.34A1.22 1.22 0 0010.79 0c-.152 0-.298.03-.44.09-.142.06-.27.14-.383.241-.114.1-.205.219-.274.355a.951.951 0 00-.104.44c0 .195.034.367.104.515.069.148.182.304.34.468l1.9 1.957H1.363c-.429 0-.763.112-1.003.336-.24.224-.359.531-.359.922 0 .39.12.698.36.922.239.224.573.336 1.002.336h10.572l-1.9 1.957a1.762 1.762 0 00-.341.473c-.07.151-.104.324-.104.52 0 .151.034.295.104.43.069.136.16.254.274.355.113.1.241.181.383.24.142.06.288.09.44.09z"
            fill="currentColor"
          />
        </svg>
      </Button>
    </Reveal>
  </>
)

const Process = styled.div`
  position: relative;
  padding-top: 74vw;

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

  @media (min-width: ${theme.breakpoints.s}) {
    flex-direction: row;
    justify-content: space-between;
    scroll-margin-top: 20ex;
  }
`

const Step = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 18.5rem;
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
  font-size: 1rem;
`

const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3.4375rem;
  padding-left: 0.75rem;
  max-width: 16rem;
  margin: 4rem auto 0;
  color: white;
  font-weight: 700;
  background: ${theme.colors.black};
  font-size: 1.25rem;
  border-radius: 2.1875rem;
  border: none;
  cursor: pointer;
  svg {
    margin-left: 0.5rem;
    transition: all 0.2s ease-in-out;
    color: ${theme.colors.primary};
  }
  &:focus,
  &:hover {
    outline: none;
    svg {
      opacity: 1;
      color: white;
      transform: translateX(0.25rem);
    }
  }
  &:disabled {
    pointer-events: none;
    opacity: 0.65;
  }
  @media (min-width: ${theme.breakpoints.s}) {
    font-size: 1.15rem;
  }
`
