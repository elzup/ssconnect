// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import _ from 'lodash'

import type { State, Screen, System } from '../../types'
import LoadingIndicator from '../../components/LoadingIndicator'
import StoryListContainer from '../StoryListContainer'
import AppBar from 'material-ui/AppBar'

import styled from 'styled-components'

type Props = {
  screens: Screen[],
  system: System,
}

const Fixer = styled.div`
  position: fixed;
  width: 100%;
`

const FixerMargin = styled.div`
  padding: 64px 0 54px;
`

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
    const title = screen.type === 'new' ? 'Home' : screen.q
    return (
      <div
        key={screen.id}
        style={{
          display: display ? 'block' : 'none',
        }}
      >
        <Fixer>
          <AppBar showMenuIconButton={false} title={title} />
        </Fixer>
        <FixerMargin>{this.renderScreenMain(screen)}</FixerMargin>
      </div>
    )
  }

  renderScreenMain(screen: Screen) {
    if (!screen.loaded) {
      return <LoadingIndicator key={screen.id} />
    }
    if (screen.type === 'search') {
      return (
        <div>
          <input type="text" />
          <StoryListContainer key={screen.id} screen={screen} />
        </div>
      )
    }
    return <StoryListContainer key={screen.id} screen={screen} />
  }
}

const ms = (state: State) => ({
  screens: _.values(state.ScreensContainer),
  system: state.System,
})

const conn: Connector<{}, Props> = connect(ms, {})

export default conn(Container)
