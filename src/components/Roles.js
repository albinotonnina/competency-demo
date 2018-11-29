import React from 'react'
import PropTypes from 'prop-types'
import {Frame, HoveredFlexCenter} from '../UI'

export default class Roles extends React.Component {
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
      specialism,
      isActive,
      actions: {setNextFrame, getNextFrame}
    } = this.props
    // debugger //eslint-disable-line
    // const roles = gradeData.roles
    // console.log('roles', roles)

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
              <div className="cardImage cardImage2" />
              <div className="cardMask" />
              <div className="cardWrapper active">
                <h2 className="titleText">{title}</h2>
                <h3 className="question">Question goes here?</h3>
                <p className="information informationLarge">{description}</p>
                <form>
                  {specialism.map(({title, description, levels}) => (
                    <div key={title}>
                      <button
                        className="optionButton"
                        onClick={() =>
                          setNextFrame('Levels', {
                            levels: levels,
                            title: title,
                            description: description
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
