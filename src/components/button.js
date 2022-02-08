import React from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"

export default ({ children, dark, href, wide, state }) => (
  <Button to={href} wide={wide} state={state}>
    <Circle dark={dark}>
      <Arrow dark={dark} />
    </Circle>
    <Text dark={dark}>{children}</Text>
  </Button>
)

const Button = styled(Link)(
  ({ wide }) => css`
    position: relative;
    display: inline-block;
    width: ${wide ? "100%" : "230px"};
    @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
      width: ${wide ? "19rem" : "14rem"};
    }
  `
)

const Circle = styled.div`
  position: relative;
  width: 100%;
  height: 2.25em;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 1.625em;
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    width: 2.25em;
    background: ${({ dark, theme }) => (dark ? theme.colors.accent : "white")};
    ${Button}:hover & {
      width: 100%;
      background: ${({ theme }) => theme.colors.primary};
    }
  }
`

const Arrow = styled.span`
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: 0;
  width: 1.125em;
  height: 0.125em;
  transform: translateX(1rem);
  &:before {
    content: "";
    position: absolute;
    top: -0.25em;
    right: 0.0625em;
    width: 0.625em;
    height: 0.625em;
    border-top: 0.125rem solid white;
    border-right: 0.125rem solid white;
    transform: rotate(45deg);
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    transform: none;
    left: 0.325em;
    &:before {
      border-color: ${({ dark, theme }) =>
        dark ? "white" : theme.colors.primary};
    }
    ${Button}:hover & {
      background: white;
      transform: translateX(1rem);
      &:before {
        border-color: white;
      }
    }
  }
`

const Text = styled.span`
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 0 0 2em;
  padding: 0.4rem 0;
  color: white;
  letter-spacing: 0.05em;
  font-size: 1em;
  font-weight: 600;
  text-align: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    color: ${({ dark, theme }) => (dark ? theme.colors.accent : "white")};
    ${Button}:hover & {
      color: white;
    }
  }
`
