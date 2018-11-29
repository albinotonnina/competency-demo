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
            <div>
              <h1>{title}</h1>
              <p>{description}</p>
              {specialism.map(role => {
                // debugger //eslint-disable-line
                return (
                  <div
                    key={role.title}
                    onClick={() =>
                      setNextFrame('Levels', {
                        levels: role.levels,
                        title: role.title,
                        description: role.description
                      })
                    }
                  >
                    <strong>{role.title}</strong> - {role.description}
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
