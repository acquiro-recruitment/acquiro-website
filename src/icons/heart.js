import React from "react"
import styled from "styled-components"

const Heart = styled.svg`
  height: ${({ size }) => (size ? size : "3.5rem")};
  color: ${({ theme, color }) => (color ? color : theme.colors.primary)};
`

export default ({ size, color, className }) => (
  <Heart size={size} color={color} viewBox="0 0 72 56" className={className}>
    <g>
      <path
        d="M15.57 36.417L4.453 25.133C-1.16 19.435-1.132 10.225 4.51 4.56a14.319 14.319 0 0 1 20.383.06l9.866 10.016c.69.7 1.814.703 2.51.006L47.32 4.556a14.32 14.32 0 0 1 20.383.06c5.61 5.697 5.585 14.908-.06 20.572l-11.307 11.35-17.888 17.948a3.578 3.578 0 0 1-5.093-.013L15.57 36.417z"
        fill="currentColor"
      />
    </g>
  </Heart>
)
