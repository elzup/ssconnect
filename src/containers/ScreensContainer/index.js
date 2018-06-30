// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import queryString from 'query-string'

import { deleteSubmit } from './logic'

import type { State, Screen } from '../../types'
import StoryListContainer from '../StoryListContainer'
import AppBar from '../AppBar'
import Drawer from '../Drawer'
import { buildScreen } from '../../utils'

import { bookmarked } from '../Bookmarks/selectors'

type OProps = {
  location: Location,
}

type Props = {
  screen: Screen,
  bookmarked: boolean,
  deleteSubmit: Function,
}

class Container extends React.Component<Props> {
  render() {
    const { props } = this
    return (
      <div>
        <AppBar
          title={props.screen.label}
          deleteSubmit={props.deleteSubmit}
          bookmark={{
            screen: props.screen,
            bookmarked: props.bookmarked,
          }}
        />
        <StoryListContainer screen={props.screen} />
        <Drawer />
      </div>
    )
  }
}

const ms = (state: State, op: OProps) => {
  const parsed = queryString.parse(op.location.search)
  const { q = '', tag = '', page = 1 } = parsed
  const screen = buildScreen(q, tag, page)
  return {
    screen,
    bookmarked: bookmarked(state, screen),
  }
}

const conn = connect(
  ms,
  {
    deleteSubmit,
  },
)

export default conn(Container)
