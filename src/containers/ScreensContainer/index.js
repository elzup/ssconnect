// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import _ from 'lodash'

import SearchForm from '../SearchFormContainer'
import { deleteSubmit } from './logic'

import type { State, Screen, System } from '../../types'
import LoadingIndicator from '../../components/LoadingIndicator'
import StoryListContainer from '../StoryListContainer'
import AppBar from '../../components/AppBar'

import styled from 'styled-components'

type Props = {
  screens: Screen[],
  system: System,
  deleteSubmit: Function,
}

const NavScreenWrap = styled.div`
  height: ${window.innerHeight - 56}px;
  display: flex;
  flex-direction: column;
`

const ScrollPane = styled.div`
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
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
    if (!display) {
      return null
    }
    return (
      <NavScreenWrap key={screen.id}>
        <AppBar screen={screen} deleteSubmit={this.props.deleteSubmit} />
        <ScrollPane>{this.renderScreenMain(screen)}</ScrollPane>
      </NavScreenWrap>
    )
  }

  renderScreenMain(screen: Screen) {
    if (!screen.loaded) {
      return <LoadingIndicator key={screen.id} />
    }
    if (screen.type === 'search') {
      return (
        <div>
          <SearchForm />
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

const conn: Connector<{}, Props> = connect(ms, { deleteSubmit })

export default conn(Container)
