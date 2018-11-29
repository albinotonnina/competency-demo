import React from 'react'
import PropTypes from 'prop-types'
import {Frame, HoveredFlexCenter} from '../UI'

export default class Levels extends React.Component {
  static propTypes = {
    isActive: PropTypes.bool,
    scrollToIndex: PropTypes.number,
    gradeData: PropTypes.object,
    grade: PropTypes.string,
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
    const {
      title,
      description,
      levels,
      isActive,
      actions: {setNextFrame, getNextFrame}
    } = this.props

    return (
      <Frame
        onClickClose={this.goBack}
        isActive={isActive}
        frameWidth="96vw"
        frameHeight={isActive ? '80vh' : '10vh'}
      >
        <HoveredFlexCenter>
          {isActive ? (
            <div>
              <h1>{title}</h1>
              <p>{description}</p>
              {levels.map(({title, description, profile}) => {
                // debugger //eslint-disable-line
                return (
                  <div
                    key={title}
                    onClick={() =>
                      setNextFrame('Profile', {
                        profile,
                        title,
                        description
                      })
                    }
                  >
                    <strong>{title}</strong> - {description}
                  </div>
                )
              })}
            </div>
          ) : (
            <div>
              <h2>{getNextFrame().state.title}</h2>
            </div>
          )}
        </HoveredFlexCenter>
      </Frame>
    )
  }
}
