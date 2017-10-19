// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import type { State, Screen } from '../../types'
import { getActiveScreen } from '../ScreensContainer/selectors'
import LoadingIndicator from '../../components/LoadingIndicator'

type Props = {
  screen: Screen,
}

class ActiveScreen extends React.Component<Props> {
  render() {
    const { screen } = this.props
    if (!screen.loaded) {
      return <LoadingIndicator />
    }
    return <div>{screen.storyIds.length}</div>
  }
}

const ms = (state: State) => ({
  screen: getActiveScreen(state),
  system: state.System,
})

const conn: Connector<{}, Props> = connect(ms, {})

export default conn(ActiveScreen)
