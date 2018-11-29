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
    const {isActive, actions: {setNextFrame, getNextFrame}} = this.props

    const {title, description, int_ext, cta_question} = Data

    return (
      <Frame
        onClickClose={this.goBack}
        isActive={isActive}
        frameWidth="96vw"
        frameHeight={isActive ? '80vh' : '10vh'}
      >
        <HoveredFlexCenter>
          {isActive ? (
            <div className="canvas">
              <div className="cardImage cardImage1" />
              <div className="cardMask" />
              <div className="cardWrapper active">
                <h2 className="titleText">{title}</h2>
                <h3 className="question">{cta_question}</h3>
                <p className="information informationLarge">{description}</p>
                <form>
                  <h3
                    className="question"
                    onClick={() => setNextFrame('Grades', {data: int_ext[0]})}
                  >
                    {int_ext[0].title}
                  </h3>
                  <h3
                    className="question"
                    onClick={() => setNextFrame('Grades', {data: int_ext[1]})}
                  >
                    {int_ext[1].title}
                  </h3>
                </form>
              </div>
            </div>
          ) : (
            <div>
              <h2>{getNextFrame().state.data.title}</h2>
            </div>
          )}
        </HoveredFlexCenter>
      </Frame>
    )
  }
}
