// @flow
import { connect } from 'react-redux'
import _ from 'lodash'
import { withRouter, type RouterHistory } from 'react-router-dom'
import queryString from 'query-string'

import type { State } from '../../types'
import Component from '../../components/SearchForm'

type OProps = {
  history: RouterHistory,
}

const ms = (state: State, op: OProps) => {
  // HACKME
  const tags = _.values(state.TagById)
  tags.sort((a, b) => b.taggingsCount - a.taggingsCount)

  return {
    tags,
    searchSubmit: ({ q, tag }) => {
      op.history.push({
        pathname: '/',
        search: queryString.stringify({ q, tag }),
      })
    },
  }
}

const conn = connect(
  ms,
  {},
)

export default withRouter(conn(Component))
