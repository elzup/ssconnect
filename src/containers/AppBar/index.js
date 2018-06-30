// @flow
import { connect } from 'react-redux'
import type { State } from '../../types'
import AppBar from '../../components/AppBar'

import { toggleDrawer } from '../System/actions'
import { toggleBookmark } from '../Bookmarks/logic'

const ms = (state: State) => ({})

const conn = connect(
  ms,
  {
    toggleDrawer,
    toggleBookmark,
  },
)

export default conn(AppBar)
