import React from "react"
import styled from "styled-components"

const Quotation = styled.svg`
  height: ${({ size }) => (size ? size : "3.5rem")};
  color: ${({ theme, color }) => (color ? color : theme.colors.primary)};
`

export default ({ size, color, className }) => (
  <Quotation
    size={size}
    color={color}
    viewBox="0 0 44 34"
    className={className}
  >
    <path
      d="M19 16.111V34H0V22.444c0-4.296.816-8.185 2.448-11.666C4.08 7.296 6.8 3.704 10.608 0l6.877 5.222c-3.886 3.778-6.256 7.408-7.11 10.89H19zm25 0V34H25V22.444c0-4.296.816-8.185 2.448-11.666C29.08 7.296 31.8 3.704 35.608 0l6.877 5.222c-3.886 3.778-6.256 7.408-7.11 10.89H44z"
      fill="currentColor"
    />
  </Quotation>
)
