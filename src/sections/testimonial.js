import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import Heart from "../icons/heart"
import Quotation from "../icons/quotation"
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
  <Reveal keyframes={fadeIn} fraction={0.5} triggerOnce>
    <Testimonial>
      <StyledHeart />
      <StyledQuotation />
      <Headshot>
        <StaticImage src="../images/rafael.jpg" alt="testimonial" />
      </Headshot>
      <Name>Rafael Rodrigo</Name>
      <Client>Key Account Manager</Client>
      <Quote>
        My experience with Acquiro, was and still is great. The recruitment
        process was smooth and effective. I feel like I had a good amount of
        information, that allowed me to be ready for all the stages in the
        recruitment process. Ultimately, I am glad to have landed in a great
        opportunity thanks to Acquiro, and overall I am grateful that their
        involvement with my case still present after I signed my job contract.
        Sincerely, thank you so much!
      </Quote>
    </Testimonial>
  </Reveal>
)

const Testimonial = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 12rem auto 0;
  padding: 3.5rem 2rem;
  box-shadow: 0 2.1875rem 6.25rem 0 rgba(31, 2, 89, 0.1);
  border-radius: 0.25rem;
  text-align: center;
  @media (min-width: ${theme.breakpoints.s}) {
    width: 45rem;
    padding: 3.5rem 0 4.25rem;
    border-radius: 1rem;
  }
  @media (min-width: ${theme.breakpoints.m}) {
    margin: 18rem auto 0;
  }
`

const Headshot = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%);
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  border: 0.25rem solid ${theme.colors.primary};
  overflow: hidden;
  @media (min-width: ${theme.breakpoints.s}) {
    width: 5.875rem;
    height: 5.875rem;
  }
`

const Name = styled.div`
  font-size: 1.15rem;
  font-weight: 500;
  @media (min-width: ${theme.breakpoints.s}) {
    margin-top: 0.5rem;
  }
`

const Client = styled.div`
  color: ${theme.colors.grey};
  font-size: 0.9rem;
  font-weight: 600;
`

const Quote = styled.div`
  max-width: 36rem;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  font-size: 1rem;
  line-height: 1.6;
  font-weight: 400;
  color: ${theme.colors.text};
  font-style: italic;
  @media (min-width: ${theme.breakpoints.s}) {
    font-size: 1.15rem;
  }
`

const StyledQuotation = styled(Quotation)`
  position: absolute;
  top: -2rem;
  left: -1rem;
  height: 1.5rem;
  color: ${theme.colors.primary};
  @media (min-width: ${theme.breakpoints.s}) {
    top: -1.75rem;
    left: -2rem;
    height: 3rem;
  }
`

const StyledHeart = styled(Heart)`
  position: absolute;
  bottom: 1.5rem;
  right: 0;
  height: 2rem;
  transform: translateX(50%);
  color: ${theme.colors.primary};
  @media (min-width: ${theme.breakpoints.s}) {
    height: 3.5rem;
  }
`
