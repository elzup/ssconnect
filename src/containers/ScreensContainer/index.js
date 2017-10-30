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
    return (
      <div
        key={screen.id}
        style={{
          display: display ? 'block' : 'none',
        }}
      >
        <Fixer>
          <AppBar screen={screen} />
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
