import styled from "styled-components"

const Bio = ({ author }) => {
  const avatarUrl =
    author?.name === "Acquiro International Recruitment"
      ? null
      : author?.avatar?.url

  return (
    <Container>
      {avatarUrl && (
        <img alt={author?.name || ``} className="bio-avatar" src={avatarUrl} />
      )}
      {author?.name && (
        <div>
          <strong>{author.name}</strong>
          <br />
          {author?.description || null}
        </div>
      )}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 2.5rem 0 6rem;
`

export default Bio
