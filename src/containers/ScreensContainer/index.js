// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import _ from 'lodash'

import type { State, Screen, System } from '../../types'
import LoadingIndicator from '../../components/LoadingIndicator'
import StoryListContainer from '../StoryListContainer'
import AppBar from 'material-ui/AppBar'

type Props = {
  screens: Screen[],
  system: System,
}

class Container extends React.Component<Props> {
  render() {
    return (
      <div>
        <AppBar showMenuIconButton={false} title="My AppBar" />
        {this.renderBody()}
      </div>
    )
  }

  renderBody() {
    const { props } = this
    return (
      <div>
        {props.screens.map(screen => {
          if (!screen.loaded) {
            return <LoadingIndicator key={screen.id} />
          }
          return (
            <div
              style={{
                display:
                  props.system.selectedTab === screen.id ? 'block' : 'none',
              }}
            >
              <StoryListContainer key={screen.id} storyIds={screen.storyIds} />
            </div>
          )
        })}
      </div>
    )
  }

  renderScreen(screen: Screen) {}
}

const ms = (state: State) => ({
  screens: _.values(state.ScreensContainer),
  system: state.System,
})

const conn: Connector<{}, Props> = connect(ms, {})

export default conn(Container)
