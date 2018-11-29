import React from "react"
import PropTypes from "prop-types"
import { Hovered, Frame } from "../ui.js"

export default class DemoPage extends React.Component {
  static propTypes = {
    isActive: PropTypes.bool,
    pageNum: PropTypes.number,
    activePage: PropTypes.number,

    frames: PropTypes.shape({
      setNextFrame: PropTypes.func,
      setFrame: PropTypes.func
    })
  }

  handleClick = event => {
    const { isActive, isAnimating } = this.props
    return !isAnimating
      ? isActive ? this.goForward(event) : this.goBack(event)
      : null
  }

  goBack = event => {
    event.stopPropagation()
    const { actions, activePage } = this.props
    actions.closeFrame(activePage)
  }

  goForward = event => {
    event.stopPropagation()
    const { actions } = this.props
    actions.setNextFrame("dummy")
  }

  render() {
    const { isActive, pageNum } = this.props

    return (
      <Frame onClickClose={this.goBack} isActive={isActive} pageNum={pageNum}>
        <Hovered onClick={this.handleClick}>
          <h3>View {pageNum}</h3>
        </Hovered>
      </Frame>
    )
  }
}
