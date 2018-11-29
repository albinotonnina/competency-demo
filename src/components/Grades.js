import React from 'react'
import PropTypes from 'prop-types'
import {Frame, HoveredFlexCenter} from '../UI'

export default class Grades extends React.Component {
  static propTypes = {
    isActive: PropTypes.bool,
    scrollToIndex: PropTypes.number,
    data: PropTypes.object,
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
    const {data, isActive, actions: {setNextFrame, getNextFrame}} = this.props
    const {title, department} = data

    const grades = department.values

    // debugger //eslint-disable-line
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
              {grades.map(({title, description, specialism}) => (
                <div
                  key={title}
                  onClick={() =>
                    setNextFrame('Roles', {title, description, specialism})
                  }
                >
                  <div>
                    <strong>{title}</strong> - {description}
                  </div>
                </div>
              ))}
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
