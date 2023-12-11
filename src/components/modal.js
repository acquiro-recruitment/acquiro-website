import React from "react"
import { useState, useEffect } from "react"
import styled, { createGlobalStyle } from "styled-components"
import Modal from "react-modal"
import useScrollPosition from "../hooks/useScrollPosition"
import Brain from "../icons/brain"
import Searching from "../icons/searching"
import Close from "../icons/close"
import theme from "../styles/theme"

Modal.setAppElement("#___gatsby") // For accessibility purposes

const GlobalStyles = createGlobalStyle`
  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 350ms ease-in-out;
  }
  .ReactModal__Overlay--after-open {
    opacity: 1;
  }
  .ReactModal__Overlay--before-close {
    opacity: 0;
  }
`

const MyModal = () => {
  const scrollPos = useScrollPosition()
  const [showModal, setShowModal] = useState(false)
  const [hasClosed, setHasClosed] = useState(false)

  const closeModal = () => {
    setShowModal(false)
    setHasClosed(true)
  }

  useEffect(() => {
    if (!hasClosed && scrollPos > 250) {
      setShowModal(true)
    }
  }, [scrollPos, hasClosed])

  const styles = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.5)",
      zIndex: "1000",
      padding: "2rem",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      borderRadius: "1.25rem",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#fafafa",
    },
  }

  const handleRecruitmentClick = () => {
    closeModal()
    const processSection = document.getElementById("process")
    if (processSection) {
      processSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleInterimClick = () => {
    closeModal()
    const interimSection = document.getElementById("interim")
    if (interimSection) {
      interimSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <GlobalStyles />
      <Modal
        isOpen={showModal}
        style={styles}
        closeTimeoutMS={200}
        onRequestClose={closeModal}
      >
        <Container>
          <Heading>What are you looking for?</Heading>

          <Flex>
            <CardButton onClick={handleRecruitmentClick}>
              <Icon>
                <Brain />
              </Icon>
              <Text>I am a consultant looking for a new role</Text>
            </CardButton>
            <CardButton onClick={handleInterimClick}>
              <Icon>
                <Searching />
              </Icon>
              <Text>I am looking for interim consultants</Text>
            </CardButton>
          </Flex>

          <CloseIcon onClick={closeModal}>
            <Close />
          </CloseIcon>
        </Container>
      </Modal>
    </>
  )
}

export default MyModal

const Container = styled.div`
  position: relative;
  padding: 2rem 0;
  @media (min-width: ${theme.breakpoints.s}) {
    padding: 4rem 6rem;
  }
`

const CloseIcon = styled.button`
  display: block;
  background: none;
  border: none;
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2rem;
  cursor: pointer;
`

const Heading = styled.h1`
  text-align: center;
  font-size: 2.75rem;
  margin-top: 1rem;
`

const Icon = styled.div`
  width: 3.75rem;
  margin: 0 auto 1rem;
  color: ${theme.colors.primary};
  @media (min-width: ${theme.breakpoints.s}) {
    width: 4.5rem;
  }
`

const Text = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 1.25rem;
`

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3.5rem;
  gap: 2rem;
  @media (min-width: ${theme.breakpoints.s}) {
    flex-direction: row;
    gap: 2.5rem;
  }
`

const CardButton = styled.button`
  padding: 2rem 2.5rem;
  background: none;
  border: none;
  border-radius: 1rem;
  background: white;
  max-width: 18rem;
  outline: 3px solid transparent;
  transition: all 0.15s ease-in-out;
  box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px,
    rgba(15, 23, 42, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.1) 0px 4px 6px -4px;
  &:hover {
    outline: 3px solid ${theme.colors.primary};
    cursor: pointer;
  }
`
