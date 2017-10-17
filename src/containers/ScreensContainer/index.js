// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import type { State, Product } from '../../types'
import * as selectors from './selectors'
import Screens, { type Props } from '../../components/Screens'
import { switchTab } from '../System/actions'

type OProps = {}

const ms = (state: State) => ({
  screens: state.ScreensContainer,
  system: state.System,
})

const conn: Connector<OProps, Props> = connect(ms, { switchTab })

export default conn(Screens)
