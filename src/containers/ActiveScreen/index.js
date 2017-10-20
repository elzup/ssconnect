// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import type { State, Screen } from '../../types'
import { getActiveScreen } from '../ScreensContainer/selectors'
import LoadingIndicator from '../../components/LoadingIndicator'
import StoryListContainer from '../StoryListContainer'
import AppBar from 'material-ui/AppBar'

type Props = {
  screen: Screen,
}

class ActiveScreen extends React.Component<Props> {
  render() {
    return (
      <div>
        <AppBar showMenuIconButton={false} title="My AppBar" />
        {this.renderBody()}
      </div>
    )
  }

  renderBody() {
    const { screen } = this.props
    if (!screen.loaded) {
      return <LoadingIndicator />
    }
    return (
      <div>
        <StoryListContainer storyIds={screen.storyIds} />
      </div>
    )
  }
}

const ms = (state: State) => ({
  screen: getActiveScreen(state),
  system: state.System,
})

const conn: Connector<{}, Props> = connect(ms, {})

export default conn(ActiveScreen)
