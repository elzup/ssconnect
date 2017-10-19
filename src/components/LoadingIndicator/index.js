// @flow
import * as React from 'react'
import type { Screen, System } from '../../types'
import FontAwesome from 'react-fontawesome'
import LinearProgress from 'material-ui/LinearProgress'

export type Props = {}

const LoadingIndicator = ({  }: Props) => (
  <LinearProgress mode="indeterminate" />
)

export default LoadingIndicator
