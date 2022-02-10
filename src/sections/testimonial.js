import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import Heart from "../icons/heart"
import Quotation from "../icons/quotation"

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
  <Reveal keyframes={fadeIn} fraction={1} triggerOnce>
    <Testimonial>
      <StyledHeart />
      <StyledQuotation />
      <Headshot>
        <StaticImage src="../images/testimonial.jpg" alt="testimonial" />
      </Headshot>
      <Name>Kevin Ivan</Name>
      <Client>Senior Software Engineer</Client>
      <Quote>
        Acquiro Recruitment is an incredible group of individuals that helped me
        find my dream job. Dolor sit amet consectetur, adipisicing elit. Vero
        commodi repudiandae id corrupti, amet non cumque consequuntur quis at
        deleniti sit amet!
      </Quote>
    </Testimonial>
  </Reveal>
)

const Testimonial = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 18rem auto 0;
  padding: 3.5rem 2rem;
  box-shadow: 0 2.1875rem 6.25rem 0 rgba(31, 2, 89, 0.1);
  border-radius: 0.25rem;
  text-align: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    width: 37.5rem;
    padding: 3.5rem 0;
    border-radius: 1rem;
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
  border: 0.3125 solid ${({ theme }) => theme.colors.primary};
  overflow: hidden;
  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    width: 5.875rem;
    height: 5.875rem;
  }
`

const Name = styled.div`
  font-size: 1.15rem;
  font-weight: 500;
  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    margin-top: 0;
  }
`

const Client = styled.div`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 0.9rem;
  font-weight: 600;
`

const Quote = styled.div`
  max-width: 28.125rem;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  font-size: 1rem;
  line-height: 1.6;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  font-style: italic;
  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    font-size: 1.15rem;
  }
`

const StyledQuotation = styled(Quotation)`
  position: absolute;
  top: -2rem;
  left: -1rem;
  height: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
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
  color: ${({ theme }) => theme.colors.primary};
  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    height: 3.5rem;
  }
`
