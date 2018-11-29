import React from "react"
import styled from "styled-components"
import TimesCircleIcon from "react-icons/lib/fa/times-circle"

import { css } from "styled-components"

export const media = {
  handheld: (...args) => css`
    @media (max-width: 420px) {
      ${css(...args)};
    }
  `
}

export const ItemsContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ vertical }) => (vertical ? "column" : "row")};
  ${media.handheld`
    flex-direction: column-reverse;
  `};
`

export const Container = styled.div`
  width: ${props => props.frameWidth || "auto"};
  height: ${props => props.frameHeight || "auto"};
  margin-right: 16px;
  position: relative;
  display: flex;
  transform-origin: 0 50%;
  & > * {
    flex: 1 1 auto;
    overflow: auto;
  }
  ${media.handheld`
    width: 100%;
    height: 50%;
    margin-right:0;
  `};
`

export const Hovered = styled.div`
  background: white;
  padding: 1em 1em;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
  border-radius: 0.28571429rem;
  border: 1px solid rgba(0, 0, 0, 0.09);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    & h3 {
      pointer-events: none;
      opacity: 0.7;
    }
  }
`

export const Content = styled.div`
  background: lightskyblue;
  padding: 1em 1em;
  border-radius: 0.28571429rem;
  border: 1px solid rgba(34, 36, 38, 0.15);
  flex: 1 1 auto;
  overflow-y: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;

  &:hover {
    cursor: pointer;
  }
`

export const CloseIcon = styled(TimesCircleIcon)`
  cursor: pointer;
  font-size: 2rem;
  position: absolute;
  right: -8px;
  top: -8px;
  color: #ff383f;
  transition: color 200ms ease-in;
  &:hover {
    color: #a9a9a9;
  }
  ${media.handheld`
  right:0;
  top: 0;
  `};
`

const CloseIconWrapper = styled.span`
  flex: 0;
  transition: opacity 400ms ease-in-out;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  pointer-events: ${({ isVisible }) => (isVisible ? "auto" : "none")};
`

export const DemoToolbar = styled.div`
  position: fixed;
  bottom: 16px;
  right: 16px;
  display: flex;
  ${media.handheld`
    display: none;
  `};
`

export const Frame = ({
  isActive,
  onClickClose,
  frameWidth,
  frameHeight,
  pageNum,
  render,
  children
}) => (
  <Container
    isActive={isActive}
    frameWidth={frameWidth}
    frameHeight={frameHeight}>
    {render ? render() : children}
    {
      <CloseIconWrapper isVisible={isActive && pageNum > 1}>
        <CloseIcon type="close-square" onClick={onClickClose} />
      </CloseIconWrapper>
    }
  </Container>
)
