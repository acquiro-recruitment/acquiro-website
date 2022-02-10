import React, { useState } from "react"
import styled, { css } from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import theme from "../styles/theme"
import Fade from "react-awesome-reveal"
import Globe from "../images/globe.svg"

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

const SignUp = () => {
  const [selected, setSelected] = useState(false)

  return (
    <Layout>
      {/* <Seo title="All posts" /> */}
      <Wrapper>
        <Info>
          <Reveal keyframes={fadeIn} triggerOnce>
            <Heading>
              We would love to
              <br /> hear from you.
            </Heading>
          </Reveal>

          <Reveal keyframes={fadeIn} delay={200} triggerOnce>
            <Text>
              Whether you're in the early stages of work discovery or urgently
              looking for new hires, we respond to every inquiry within one
              business day.
              <br />
              <br />
              Simply fill out the form with as much context as you're willing to
              share and we can schedule a phone/video call or meeting.
            </Text>
          </Reveal>

          <Reveal keyframes={fadeIn} delay={600} triggerOnce>
            <GlobeContainer>
              <StyledGlobe />
            </GlobeContainer>
          </Reveal>
        </Info>

        <Form method="POST" selected={selected}>
          <Reveal keyframes={fadeIn} delay={600} triggerOnce>
            <div>
              <label htmlFor="name">Who are you?</label>

              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
              />
            </div>

            <div>
              <label htmlFor="contact">How can we reach you?</label>

              <input
                type="email"
                name="contact"
                id="contact"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="topic">What are you looking for?</label>

              <select
                name="topic"
                id="topic"
                required
                onChange={(e) => setSelected(e.target.value)}
              >
                <option value="">Select from the menu</option>
                <option value="candidate">I'm looking for work</option>
                <option value="client">I'm hiring</option>
                <option value="other">Just Saying Hi!</option>
              </select>
            </div>

            <div>
              <label htmlFor="industry">
                What industry are you in? (optional)
              </label>

              <input
                type="text"
                name="industry"
                id="industry"
                placeholder="Enter your industry"
                autocomplete="off"
              />
            </div>

            {/*
            <label htmlFor="linkedin">LinkedIn profile address (optional)</label>

            <input
              type="text"
              name="linkedin"
              id="linkedin"
              placeholder="Link to profile"
              autocomplete="off"
            /> */}

            <div>
              <label htmlFor="message">Message (optional)</label>

              <input
                type="text"
                name="message"
                id="message"
                placeholder="Write us a message"
              />
            </div>

            <button type="submit">
              Submit
              <svg width="16" height="11">
                <path
                  d="M10.79 10.648c.182 0 .351-.035.506-.104.154-.07.307-.183.458-.34L15.5 6.316a2.87 2.87 0 00.373-.482.99.99 0 00.128-.511.965.965 0 00-.128-.506 2.991 2.991 0 00-.373-.478L11.754.444a1.502 1.502 0 00-.458-.34A1.22 1.22 0 0010.79 0c-.152 0-.298.03-.44.09-.142.06-.27.14-.383.241-.114.1-.205.219-.274.355a.951.951 0 00-.104.44c0 .195.034.367.104.515.069.148.182.304.34.468l1.9 1.957H1.363c-.429 0-.763.112-1.003.336-.24.224-.359.531-.359.922 0 .39.12.698.36.922.239.224.573.336 1.002.336h10.572l-1.9 1.957a1.762 1.762 0 00-.341.473c-.07.151-.104.324-.104.52 0 .151.034.295.104.43.069.136.16.254.274.355.113.1.241.181.383.24.142.06.288.09.44.09z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </Reveal>
        </Form>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2rem;
  margin-bottom: 2rem;
  @media (min-width: ${theme.breakpoints.s}) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 18rem;
  }
`

const Info = styled.aside`
  position: relative;
  margin-bottom: 1.5rem;
  @media (min-width: ${theme.breakpoints.s}) {
    margin-top: 0;
    margin-bottom: 0;
    margin-right: 6rem;
  }
`

const Heading = styled.h1`
  margin: 0;
  margin-bottom: 1.75rem;
  font-size: 2rem;
  font-weight: 800;
  @media (min-width: ${theme.breakpoints.s}) {
    font-size: 3rem;
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
  position: relative;
`

const StyledGlobe = styled(Globe)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 520px;
  margin: 2rem auto 0;
  background: radial-gradient(60% 90% at 50% 30%, #e1eff5c5 2%, #ffffffe8 100%);
  opacity: 0.4;
  border-radius: 50%;
`

const Form = styled.form(
  ({ selected }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 420px;
    label,
    span {
      display: block;
      margin-bottom: 0.75rem;
      padding-left: 1px;
      color: ${theme.colors.black};
      font-weight: 700;
      font-size: 0.9rem;
    }
    input {
      width: 100%;
      margin-bottom: 3.25rem;
      padding-bottom: 0.25rem;
      padding-left: 0;
      border: none;
      border-bottom: 1px solid #e7e3f1;
      font-size: 1rem;
      color: ${theme.colors.dark};
      -webkit-border-radius: 0;
      -moz-border-radius: 0;
      border-radius: none;
      &::placeholder {
        color: ${theme.colors.grey};
      }
      &:focus {
        outline: none;
        border-color: ${theme.colors.dark};
      }
      &:not(:placeholder-shown) {
        border-color: ${theme.colors.dark};
      }
      @media (min-width: ${theme.breakpoints.s}) {
        font-size: 1.35rem;
        padding: 1px 2px;
      }
    }
    input:-webkit-autofill,
    input:-webkit-autofill:focus {
      transition: background-color 600000s 0s, color 600000s 0s;
    }
    select {
      width: 100%;
      margin-bottom: 3.25rem;
      padding-bottom: 2px;
      padding-left: 0;
      border: none;
      box-shadow: inset 0 -1px 0 0 #e7e3f1;
      font-size: 1rem;
      color: ${theme.colors.grey};
      -moz-appearance: none;
      -webkit-appearance: none;
      appearance: none;
      -webkit-border-radius: 0;
      -moz-border-radius: 0;
      border-radius: none;
      outline: none;
      background: url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0Ljk1IDEwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9LmNscy0ye2ZpbGw6IzQ0NDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmFycm93czwvdGl0bGU+PHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iNC45NSIgaGVpZ2h0PSIxMCIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSIxLjQxIDQuNjcgMi40OCAzLjE4IDMuNTQgNC42NyAxLjQxIDQuNjciLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMy41NCA1LjMzIDIuNDggNi44MiAxLjQxIDUuMzMgMy41NCA1LjMzIi8+PC9zdmc+)
        no-repeat 100% 50%;
      &:focus {
        outline: none;
        border: none;
        box-shadow: inset 0 -1px 0 0 ${theme.colors.primary} !important;
      }
      @media (min-width: ${theme.breakpoints.s}) {
        font-size: 1.35rem;
      }
      ${selected && selectedStyles};
    }
    input[type="checkbox"] {
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
      &:checked + label {
        color: ${theme.colors.primary} !important;
        &:after {
          border-color: ${theme.colors.primary};
        }
        svg {
          opacity: 1;
        }
      }
    }
    button {
      margin: 0.75rem auto 1.25rem;
      width: 100%;
      height: 55px;
      padding-left: 0.75rem;
      color: white;
      font-weight: 800;
      background: ${theme.colors.black};
      font-size: 1.25rem;
      border-radius: 35px;
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
          transform: translateX(4px);
        }
      }
      @media (min-width: ${theme.breakpoints.s}) {
        margin: 1rem auto 0;
        font-size: 1.15rem;
      }
    }
  `
)

const selectedStyles = css`
  color: ${theme.colors.dark};
  box-shadow: inset 0 -1px 0 0 ${theme.colors.primary};
`

const Checkbox = styled.label`
  position: relative;
  color: ${theme.colors.primary};
  line-height: 30px;
  font-size: 1rem !important;
  color: ${theme.colors.grey} !important;
  font-weight: 600 !important;
  user-select: none;
  cursor: pointer;
  &:after {
    content: "";
    height: 30px;
    width: 30px;
    margin-right: 1rem;
    float: left;
    border: 1px solid ${theme.colors.grey};
    border-radius: 6px;
  }
  @media (min-width: ${theme.breakpoints.s}) {
    font-size: 1.35rem !important;
  }
`

const Checkmark = styled.svg`
  position: absolute;
  top: 10px;
  left: 8px;
  opacity: 0;
`

const Blurb = styled.div`
  position: relative;
  margin-top: 5rem;
  margin-bottom: 4rem;
  max-width: 220px;
  display: none;
  &:after {
    content: "";
    position: absolute;
    top: -4rem;
    bottom: 2.5rem;
    width: 50px;
    height: 50px;
    background-color: #ff5c83;
    border-radius: 50%;
  }
  @media (min-width: ${theme.breakpoints.s}) {
    display: block;
    max-width: 480px;
    margin-top: -6rem;
  }
  @media (min-width: ${theme.breakpoints.xl}) {
    margin-top: -4rem;
  }
`

export default SignUp
