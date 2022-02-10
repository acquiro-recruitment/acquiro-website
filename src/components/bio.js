import React from "react"
import styled from "styled-components"
import theme from "../styles/theme"

export default ({ author, small }) => {
  const avatarUrl =
    author?.name === "Acquiro International Recruitment"
      ? null
      : author?.avatar?.url

  return (
    <Bio small={small}>
      {avatarUrl && (
        <Avatar src={avatarUrl} small={small} alt={author?.name || ``} />
      )}
      {author?.name && (
        <div>
          <BioName small={small}>{author.name}</BioName>
          {!small && <BioRole>{author?.description || null}</BioRole>}
        </div>
      )}
    </Bio>
  )
}

const Bio = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ small }) => (small ? "0" : "2rem 0")};
  color: ${theme.colors.black};
`

const Avatar = styled.img`
  width: ${({ small }) => (small ? "2.25rem" : "4rem")};
  margin-right: ${({ small }) => (small ? "0.85rem" : "1.25rem")};
  height: auto;
  border-radius: 100%;
`

const BioName = styled.div`
  font-size: ${({ small }) => (small ? "1rem" : "1.25rem")};
  font-weight: 600;
`

const BioRole = styled.div`
  font-size: 1.1rem;
`
