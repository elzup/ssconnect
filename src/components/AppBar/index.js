// @flow

import * as React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'

import MenuIcon from '@material-ui/icons/Menu'
import StarIcon from '@material-ui/icons/Star'
import StarBorderIcon from '@material-ui/icons/StarBorder'

import type { Screen } from '../../types'

type Props = {
  title: string,
  toggleDrawer: Function,
  toggleBookmark: Function,
  bookmark?: {
    screen: Screen,
    bookmarked: boolean,
  },
}

const Component = (props: Props) => {
  const { bookmark } = props
  return (
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
          {bookmark && (
            <Button
              color="inherit"
              onClick={() => props.toggleBookmark(bookmark.screen)}
            >
              {bookmark.bookmarked ? <StarIcon /> : <StarBorderIcon />}
            </Button>
          )}
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Component
