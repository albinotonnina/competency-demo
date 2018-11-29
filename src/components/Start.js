import React from 'react'
import PropTypes from 'prop-types'
import {Frame, HoveredFlexCenter} from '../UI'
import Data from '../hackathon.json'

export default class Start extends React.Component {
  static propTypes = {
    isActive: PropTypes.bool,
    scrollToIndex: PropTypes.number,
    actions: PropTypes.shape({
      setNextFrame: PropTypes.func,
      getNextFrame: PropTypes.func,
      replaceFrame: PropTypes.func,
      closeFrame: PropTypes.func,
      closeCurrentFrame: PropTypes.func,
      getCurrentFrame: PropTypes.func,
      setCurrentFrame: PropTypes.func
    })
  }

  goBack = event => {
    this.props.actions.closeCurrentFrame()
  }

  render() {
    const {isActive, actions: {setNextFrame}} = this.props

    const {title, description, int_ext, cta_question} = Data

    return (
      <Frame
        onClickClose={this.goBack}
        isActive={isActive}
        frameWidth="96vw"
        frameHeight={isActive ? '80vh' : '10vh'}
      >
        <HoveredFlexCenter>
          <h1>{title}</h1>
          <p>{description}</p>
          <h2>{cta_question}</h2>
          <p onClick={() => setNextFrame('Grades', {data: int_ext[0]})}>
            {int_ext[0].title}
          </p>
          <p onClick={() => setNextFrame('Grades', {data: int_ext[1]})}>
            {int_ext[1].title}
          </p>
        </HoveredFlexCenter>
      </Frame>
    )
  }
}
