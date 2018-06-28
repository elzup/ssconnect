// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import queryString from 'query-string'

import { deleteSubmit } from './logic'

import type { State, Screen } from '../../types'
import StoryListContainer from '../StoryListContainer'
import AppBar from '../AppBar'
import Drawer from '../Drawer'

type OProps = {
  location: Location,
}

type Props = {
  screen: Screen,
  deleteSubmit: Function,
}

class Container extends React.Component<Props> {
  render() {
    const { props } = this
    return (
      <div>
        <AppBar title={'debug'} deleteSubmit={props.deleteSubmit} />
        <StoryListContainer screen={props.screen} />
        <Drawer />
      </div>
    )
  }
}

const ms = (state: State, op: OProps) => {
  const parsed = queryString.parse(op.location.search)
  const { q = '', tag = '', page = 1 } = parsed
  return {
    screen: { q, tag, page: Number(page) },
  }
}

const conn = connect(
  ms,
  {
    deleteSubmit,
  },
)

export default conn(Container)
