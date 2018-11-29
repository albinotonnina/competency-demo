import React, { Component } from "react"
import ArrowsV from "react-icons/lib/fa/arrows-v"
import ArrowsH from "react-icons/lib/fa/arrows-h"
import MagicHat from "react-magic-hat"
import Page from "./Page"
import { ItemsContainer, DemoToolbar } from "../ui.js"

export default class Demo extends Component {
  state = {
    vertical: false,
    isAnimating: false
  }

  setStackVertical = () => this.setState({ vertical: true })

  setStackHorizontal = () => this.setState({ vertical: false })

  onStartAnimation = () => this.setState({ isAnimating: true })

  onEndAnimation = () => this.setState({ isAnimating: false })

  renderFrame = ({ id, page, activePage, actions }) => {
    return (
      <Page
        isActive={page === activePage}
        isAnimating={this.state.isAnimating}
        pageNum={page}
        activePage={activePage}
        actions={actions}
      />
    )
  }

  render() {
    return (
      <ItemsContainer vertical={this.state.vertical}>
        <MagicHat
          moveSeed={`${this.state.vertical}`}
          onStartAnimation={this.onStartAnimation}
          onEndAnimation={this.onEndAnimation}
          renderFrame={this.renderFrame}
        />
        <DemoToolbar>
          <ArrowsH onClick={this.setStackHorizontal} />
          <ArrowsV onClick={this.setStackVertical} />
        </DemoToolbar>
      </ItemsContainer>
    )
  }
}
