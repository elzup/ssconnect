// @flow
import { connect } from 'react-redux'
import type { State } from '../../types'
import BottomBar from '../../components/BottomBar'
import { switchTab } from '../System/actions'
import _ from 'lodash'

const ms = (state: State) => ({
  screens: _.values(state.ScreensContainer),
  system: state.System,
})

const conn = connect(
  ms,
  { switchTab },
)

export default conn(BottomBar)
