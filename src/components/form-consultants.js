import React, { useState } from "react"
import { Link } from "gatsby"
import styled, { css, keyframes as frames } from "styled-components"
import { Reveal } from "react-awesome-reveal"
import { keyframes } from "@emotion/react"
import theme from "../styles/theme"

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

export default () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [expertise, setExpertise] = useState("")
  const [role, setRole] = useState("")
  const [accepted, setAccepted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    setLoading(true)

    const fields = {
      fields: {
        Name: name,
        Email: email,
        Company: company,
        Function: expertise,
        Other: role,
        TermsAccepted: accepted,
        Created: new Date(),
      },
    }

    postToAirtable(e, fields)
  }

  const postToAirtable = (e, fields) => {
    fetch("https://api.airtable.com/v0/apphyJYGHPGRxQPNo/requests", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GATSBY_AIRTABLE_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fields),
    })
      .then((res) => {
        if (res.status === 200) {
          setLoading(false)
          setSubmitted(true)
          setError(false)
          setExpertise("")
          e.target.reset()
        } else {
          console.log(res)
          setLoading(false)
          setError(true)
        }
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
        setError(true)
      })
  }

  return (
    <Reveal keyframes={fadeIn} delay={600} triggerOnce>
      <Form expertise={expertise} onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="name">Who are you?</label>

          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="company">Where do you work?</label>

          <input
            type="text"
            name="company"
            id="company"
            placeholder="Company or organization"
            autoComplete="off"
            required
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="contact">How can we reach you?</label>

          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="expertise">
            Which area are you looking for consultants in?
          </label>
          <select
            name="expertise"
            id="expertise"
            onChange={(e) => setExpertise(e.target.value)}
          >
            <option value="">Select area of expertise</option>
            <option value="HR/Recruitment">HR/Recruitment</option>
            <option value="Tech/Engineering">Tech/Engineering</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {expertise === "Other" && (
          <div>
            <label htmlFor="name">Please specify:</label>

            <input
              type="text"
              name="Role"
              id="Role"
              placeholder="Area of expertise"
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
        )}

        <div>
          <input
            type="checkbox"
            id="accepted"
            name="accepted"
            onChange={() => setAccepted(!accepted)}
          />
          <Checkbox htmlFor="accepted">
            <Checkmark width="15" height="12">
              <path
                d="M11.94.94a1.5 1.5 0 012.224 2.007l-.103.114L6 11.12.94 6.064a1.5 1.5 0 012.006-2.225l.114.103L6 6.878 11.94.939z"
                fill="#270174"
              />
            </Checkmark>
            Accept our{" "}
            <Link to="/terms" target="_blank" rel="noreferrer">
              terms & conditions?
            </Link>
          </Checkbox>
        </div>

        <div>
          {submitted ? (
            <ThankYou>
              Your submission has been received.
              <br />
              Thank you!
            </ThankYou>
          ) : (
            <button type="submit" disabled={!accepted || loading}>
              {loading ? "Submitting" : "Submit"}
              {loading ? (
                <Spinner />
              ) : (
                <svg width="16" height="11">
                  <path
                    d="M10.79 10.648c.182 0 .351-.035.506-.104.154-.07.307-.183.458-.34L15.5 6.316a2.87 2.87 0 00.373-.482.99.99 0 00.128-.511.965.965 0 00-.128-.506 2.991 2.991 0 00-.373-.478L11.754.444a1.502 1.502 0 00-.458-.34A1.22 1.22 0 0010.79 0c-.152 0-.298.03-.44.09-.142.06-.27.14-.383.241-.114.1-.205.219-.274.355a.951.951 0 00-.104.44c0 .195.034.367.104.515.069.148.182.304.34.468l1.9 1.957H1.363c-.429 0-.763.112-1.003.336-.24.224-.359.531-.359.922 0 .39.12.698.36.922.239.224.573.336 1.002.336h10.572l-1.9 1.957a1.762 1.762 0 00-.341.473c-.07.151-.104.324-.104.52 0 .151.034.295.104.43.069.136.16.254.274.355.113.1.241.181.383.24.142.06.288.09.44.09z"
                    fill="currentColor"
                  />
                </svg>
              )}
            </button>
          )}
        </div>

        <div>
          {error && (
            <ErrorMessage>
              There was an unexpected error.
              <br /> Please try again or send us an{" "}
              <Link to="/contact">email.</Link>
            </ErrorMessage>
          )}
        </div>
      </Form>
    </Reveal>
  )
}

const spin = frames`
  to {
    transform: rotate(360deg);
  }
`

const Spinner = styled.div`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  margin-left: 0.5rem;
  border: 0.25em solid white;
  border-right-color: transparent;
  border-radius: 50%;
  animation: ${spin} 0.75s linear infinite;
`

const ErrorMessage = styled.div`
  font-size: 1rem;
  font-weight: 500;
  margin-top: 0.5rem;
  color: #ce0e0e;
  text-align: center;
`

const Form = styled.form(
  ({ expertise }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 26.25rem;
    label,
    span {
      display: block;
      margin-bottom: 0.75rem;
      padding-left: 0.0625rem;
      color: ${theme.colors.black};
      font-weight: 700;
      font-size: 0.9rem;
    }
    input {
      width: 100%;
      margin-bottom: 3rem;
      padding-bottom: 0.25rem;
      padding-left: 0;
      border: none;
      border-bottom: 0.0625rem solid #e7e3f1;
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
        font-size: 1.25rem;
        padding: 0.0625rem 0.125rem;
      }
    }
    input:-webkit-autofill,
    input:-webkit-autofill:focus {
      transition: background-color 600000s 0s, color 600000s 0s;
    }
    input[type="file"] {
      padding-top: 0.5rem;
      font-size: 1rem;
      border: none;
      cursor: pointer !important;
      color: #5d646e;
    }
    select {
      width: 100%;
      margin-bottom: 3rem;
      padding-bottom: 0.125rem;
      padding-left: 0;
      border: none;
      box-shadow: inset 0 -0.0625rem 0 0 #e7e3f1;
      font-size: 1rem;
      color: ${theme.colors.grey};
      -moz-appearance: none;
      -webkit-appearance: none;
      appearance: none;
      -webkit-border-radius: 0;
      -moz-border-radius: 0;
      border-radius: none;
      outline: none;
      cursor: pointer;
      background: url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0Ljk1IDEwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9LmNscy0ye2ZpbGw6IzQ0NDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmFycm93czwvdGl0bGU+PHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iNC45NSIgaGVpZ2h0PSIxMCIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSIxLjQxIDQuNjcgMi40OCAzLjE4IDMuNTQgNC42NyAxLjQxIDQuNjciLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMy41NCA1LjMzIDIuNDggNi44MiAxLjQxIDUuMzMgMy41NCA1LjMzIi8+PC9zdmc+)
        no-repeat 100% 50%;
      &:focus {
        outline: none;
        border: none;
        box-shadow: inset 0 -0.0625rem 0 0 ${theme.colors.primary} !important;
      }
      @media (min-width: ${theme.breakpoints.s}) {
        font-size: 1.25rem;
      }
    }
    select[name="expertise"] {
      ${expertise && selectedStyles};
    }
    input[type="checkbox"] {
      position: absolute;
      width: 1px;
      height: 1px;
      margin: -1px;
      padding: 0;
      border: 0;
      clip: rect(0 0 0 0);
      overflow: hidden;
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
      width: 100%;
      height: 3.4375rem;
      padding-left: 0.75rem;
      color: white;
      font-weight: 800;
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
    }
    @media (min-width: ${theme.breakpoints.s}) {
      min-width: 24rem;
    }
  `
)

const selectedStyles = css`
  color: ${theme.colors.dark};
  box-shadow: inset 0 -0.0625rem 0 0 ${theme.colors.primary};
`

const Checkbox = styled.label`
  position: relative;
  margin-bottom: 3rem !important;
  color: ${theme.colors.primary};
  line-height: 30px;
  cursor: pointer;
  font-size: 1rem;
  color: ${theme.colors.grey};
  font-weight: 600;
  user-select: none;
  &:after {
    content: "";
    height: 26px;
    width: 26px;
    margin-top: 2px;
    margin-right: 1rem;
    float: left;
    border: 1px solid ${theme.colors.grey};
    border-radius: 6px;
  }
  @media (min-width: ${theme.breakpoints.s}) {
    font-size: 1.35rem;
  }
  a {
    text-decoration: underline;
    &:hover {
      text-decoration: underline;
    }
  }
`

const Checkmark = styled.svg`
  position: absolute;
  top: 9px;
  left: 7px;
  opacity: 0;
`

const ThankYou = styled.div`
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-size: 1.1rem;
  font-weight: 500;
  text-align: center;
  border: 2px solid #36bd09;
  border-radius: 0.75rem;
`
