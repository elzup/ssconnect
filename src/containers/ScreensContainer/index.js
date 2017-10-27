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
    const { props } = this
    return (
      <div>
        {props.screens.map(screen =>
          this.renderScreen(screen, props.system.selectedTab === screen.id),
        )}
      </div>
    )
  }

  renderScreen(screen: Screen, display: boolean) {
    return (
      <div
        style={{
          display: display ? 'block' : 'none',
        }}
      >
        <AppBar showMenuIconButton={false} title={screen.loaded} />
        {this.renderScreenMain(screen)}
      </div>
    )
  }

  renderScreenMain(screen: Screen) {
    if (!screen.loaded) {
      return <LoadingIndicator key={screen.id} />
    }
    return <StoryListContainer key={screen.id} storyIds={screen.storyIds} />
  }
}

const ms = (state: State) => ({
  screens: _.values(state.ScreensContainer),
  system: state.System,
})

const conn: Connector<{}, Props> = connect(ms, {})

export default conn(Container)
