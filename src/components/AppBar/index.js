// @flow

import * as React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

type Props = {
  title: string,
  deleteSubmit?: Function,
}

const Component = (props: Props) => (
  <AppBar position="static" color="primary">
    <Toolbar color="inherit">
      <Typography variant="title" color="inherit" style={{ flex: 1 }}>
        {props.title}
      </Typography>
      <div>
        {props.deleteSubmit && (
          <Button color="inherit" onClick={props.deleteSubmit}>
            x
          </Button>
        )}
      </div>
    </Toolbar>
  </AppBar>
)

export default Component
