// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import type { State, Product } from '../../types'
import * as selectors from './selectors'
import Screens, { type Props as TProps } from '../../components/Screens'

type Props = {}

const ms = (state: State) => ({
  screens: state.ScreensContainer,
})

const conn: Connector<Props, TProps> = connect(ms, {})

export default conn(Screens)
