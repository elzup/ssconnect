// @flow
import { connect } from 'react-redux'
import type { State } from '../../types'
import AppBar from '../../components/AppBar'

import { toggleDrawer } from '../System/actions'

const ms = (state: State) => ({})

const conn = connect(
  ms,
  {
    toggleDrawer,
  },
)

export default conn(AppBar)
