import React from "react"
import styled from "styled-components"

export default ({ author }) => {
  const avatarUrl =
    author?.name === "Acquiro International Recruitment"
      ? null
      : author?.avatar?.url

  return (
    <Bio>
      {avatarUrl && <Avatar src={avatarUrl} alt={author?.name || ``} />}
      {author?.name && (
        <div>
          <BioName>{author.name}</BioName>
          <BioRole>{author?.description || null}</BioRole>
        </div>
      )}
    </Bio>
  )
}

const Bio = styled.div`
  display: flex;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
`

const Avatar = styled.img`
  max-width: 4rem;
  margin-right: 1.25rem;
  height: auto;
  border-radius: 100%;
`

const BioName = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
`

const BioRole = styled.div`
  font-size: 1.1rem;
`
