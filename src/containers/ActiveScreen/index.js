// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import type { State, Screen } from '../../types'
import { getActiveScreen } from '../ScreensContainer/selectors'

type Props = {
  screen: Screen,
}

class ActiveScreen extends React.Component<Props> {
  render() {
    const { props } = this
    return <div>{props.screen.q}</div>
  }
}

const ms = (state: State) => ({
  screen: getActiveScreen(state),
  system: state.System,
})

const conn: Connector<{}, Props> = connect(ms, {})

export default conn(ActiveScreen)
