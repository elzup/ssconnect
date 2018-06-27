// @flow

import * as React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import { getTitle } from '../../utils'
import type { Screen } from '../../types'

type Props = {
  screen: Screen,
  deleteSubmit: Function,
}

const Component = (props: Props) => {
  const { screen, deleteSubmit } = props

  return (
    <AppBar position="static" color="primary">
      <Toolbar color="inherit">
        <Typography variant="title" color="inherit" style={{ flex: 1 }}>
          {getTitle(screen)}
        </Typography>
        <div>
          {screen.type === 'profile' && (
            <Button onClick={deleteSubmit(screen.id)}>x</Button>
          )}
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Component
