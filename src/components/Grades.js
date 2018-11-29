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
            <div className="canvas">
              <div className="cardImage cardImage4" />
              <div className="cardMask" />
              <div className="cardWrapper active">
                <h2 className="titleText">{title}</h2>
                <h3 className="question">Question goes here?</h3>
                <p className="information informationLarge">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
                  <br />
                  <br />
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <form>
                  {grades.map(({title, description, specialism}) => (
                    <div key={title}>
                      <button
                        className="optionButton"
                        onClick={() =>
                          setNextFrame('Roles', {
                            title,
                            description,
                            specialism
                          })
                        }
                      >
                        {title}
                      </button>
                      <p className="information withBottomMargin">
                        {description}
                      </p>
                    </div>
                  ))}
                </form>
              </div>
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
