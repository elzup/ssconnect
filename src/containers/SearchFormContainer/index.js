// @flow
import { connect, type Connector } from 'react-redux'
import _ from 'lodash'

import type { State } from '../../types'
import Component, { type Props } from '../../components/SearchForm'
import { searchSubmit } from '../ScreensContainer/logic'

type OProps = {}

const ms = (state: State) => ({
  tags: _.values(state.TagById),
})

const conn: Connector<OProps, Props> = connect(ms, {
  searchSubmit,
})

export default conn(Component)
