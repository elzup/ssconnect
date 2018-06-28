// @flow

import * as React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'

type Props = {
  title: string,
  deleteSubmit?: Function,
  toggleDrawer: Function,
}

const Component = (props: Props) => (
  <AppBar position="static" color="primary">
    <Toolbar color="inherit">
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={props.toggleDrawer}
      >
        <MenuIcon />
      </IconButton>
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
