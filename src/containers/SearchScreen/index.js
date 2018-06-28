// @flow
import * as React from 'react'
import { connect } from 'react-redux'

import type { State } from '../../types'
import SearchForm from './SearchForm'
import AppBar from '../../components/AppBar'

import { loadTags } from '../TagById/logic'

type Props = {
  loadTags: typeof loadTags,
}

class Container extends React.Component<Props> {
  componentDidMount() {
    this.props.loadTags()
  }

  render() {
    return (
      <div>
        <AppBar title={'検索'} />
        <SearchForm />
      </div>
    )
  }
}

const ms = (state: State) => ({})

const conn = connect(
  ms,
  {
    loadTags,
  },
)

export default conn(Container)
