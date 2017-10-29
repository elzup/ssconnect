// @flow
import { connect, type Connector } from 'react-redux'
import type { State } from '../../types'
import BottomBar, { type Props } from '../../components/BottomBar'
import { switchTab } from '../System/actions'
import _ from 'lodash'

type OProps = {}

const ms = (state: State) => ({
  screens: _.values(state.ScreensContainer),
  system: state.System,
})

const conn: Connector<OProps, Props> = connect(ms, { switchTab })

export default conn(BottomBar)
