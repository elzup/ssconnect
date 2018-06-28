// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { deleteSubmit } from './logic'

import type { State, Screen, System } from '../../types'
import LoadingIndicator from '../../components/LoadingIndicator'
import StoryListContainer from '../StoryListContainer'
import AppBar from '../../components/AppBar'

import { loadTags } from '../TagById/logic'
import { loadScreenStoryAll } from '../ScreensContainer/logic'

import styled from 'styled-components'

type Props = {
  screens: Screen[],
  system: System,
  deleteSubmit: Function,
  loadTags: Function,
  loadScreenStoryAll: Function,
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
  componentDidMount() {
    this.props.loadTags()
    this.props.loadScreenStoryAll()
  }

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
    return <StoryListContainer key={screen.id} screen={screen} />
  }
}

const ms = (state: State) => ({
  screens: _.values(state.ScreensContainer),
  system: state.System,
})

const conn = connect(
  ms,
  {
    deleteSubmit,
    loadTags,
    loadScreenStoryAll,
  },
)

export default conn(Container)
