import React from 'react'
import {Spin, Icon} from 'antd'
import styled, {css} from 'styled-components'

export const media = {
  handheld: (...args) => css`
    @media (max-width: 1024px) {
      ${css(...args)};
    }
  `
}

const Container = styled.div`
  width: ${props => props.frameWidth || '50vw'};
  height: ${props => props.frameHeight || 'auto'};
  z-index: ${props => (props.isActive ? 33 : 66)};
  position: relative;
  display: flex;
  transform-origin: 50% 50%;
  & > * {
    flex: 1 1 auto;
    overflow: auto;
  }
`

const CloseIcon = styled(Icon)`
  cursor: pointer;
  font-size: 2rem;
  position: absolute;
  right: 0px;
  top: 0px;
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
  opacity: ${({isVisible}) => (isVisible ? 1 : 0)};
  pointer-events: ${({isVisible}) => (isVisible ? 'auto' : 'none')};
`

export const ActionIcon = styled(Icon)`
  transition: all 200ms ease-out;
  font-size: 1.2rem;
  color: #a9a9a9;
  cursor: pointer;
  &:hover {
    color: #61dafb;
    transform: scale(1.2);
  }
`

export const Hovered = styled.div`
  background: white;
  padding: 1em 1em;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
  border-radius: 0.28571429rem;
  border: 1px solid rgba(0, 0, 0, 0.09);
`

export const HoveredFlexCenter = styled.div`
  background: white;
  padding: 1em 1em;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
  border-radius: 0.28571429rem;
  border: 1px solid rgba(0, 0, 0, 0.09);
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const ItemsContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({vertical}) => (vertical ? 'column' : 'row')};
`

export const Frame = ({
  isActive,
  onClickClose,
  frameWidth,
  frameHeight,
  render,
  children
}) => (
  <Container
    isActive={isActive}
    frameWidth={frameWidth}
    frameHeight={frameHeight}
  >
    {render ? render() : children}
    {
      <CloseIconWrapper isVisible={isActive}>
        <CloseIcon type="close-square" onClick={onClickClose} />
      </CloseIconWrapper>
    }
  </Container>
)

const Header = styled.header`
  width: 15rem;
  height: 16rem;
  display: flex;
  align-items: center;
  transition: all 400ms ease-in;
  will-change: transform, opacity, filter;
`

const StartButton = styled.a`
  background-image: -webkit-linear-gradient(top, #f4f1ee, #fff);
  background-image: linear-gradient(top, #f4f1ee, #fff);
  border-radius: 50%;
  box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.3), inset 0px 4px 1px 1px white,
    inset 0px -3px 1px 1px rgba(204, 198, 197, 0.5);
  display: block;
  height: 240px;
  position: relative;
  width: 240px;
  transition: all 0.2s linear;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-image: -webkit-linear-gradient(top, #fff, #f4f1ee);
    background-image: linear-gradient(top, #fff, #f4f1ee);
    color: #0088cc;
  }

  ${props =>
    props.isOpen
      ? `
    background-image: -webkit-linear-gradient(top, #efedec, #f7f4f4);
    background-image: linear-gradient(top, #efedec, #f7f4f4);
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.4),
    inset 0px -3px 1px 1px rgba(204, 198, 197, 0.5);
    opacity: 0;
  `
      : ''};
`

export const AppHeader = props => (
  <Header>
    <StartButton href="#" onClick={this.handleChange} {...props}>
      <div className="App-header">
        <svg viewBox="0 0 841.9 595.3" className="App-logo">
          <text />
        </svg>
      </div>
    </StartButton>
  </Header>
)

const SpinnerWrapper = styled.div`
  transition: opacity 300ms ease-in-out;
  opacity: ${({isVisible}) => (isVisible ? 1 : 0)};
  pointer-events: ${({isVisible}) => (isVisible ? 'auto' : 'none')};
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Spinner = props => (
  <SpinnerWrapper {...props}>
    <Spin size="large" />
  </SpinnerWrapper>
)
