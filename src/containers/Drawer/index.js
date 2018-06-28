// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import type { State, Screen } from '../../types'

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

import { toggleDrawer } from '../System/actions'

type Props = {
  open: boolean,
  screens: Screen[],
  toggleDrawer: typeof toggleDrawer,
}

class Drawer extends React.Component<Props> {
  render() {
    const { props } = this
    return (
      <SwipeableDrawer
        open={props.open}
        onClose={props.toggleDrawer}
        onOpen={props.toggleDrawer}
      >
        <div
          tabIndex={0}
          role="button"
          onClick={props.toggleDrawer}
          onKeyDown={props.toggleDrawer}
        >
          <List>
            {props.screens.map(screen => <ListItem>{screen.q}</ListItem>)}
          </List>
        </div>
      </SwipeableDrawer>
    )
  }
}

const ms = (state: State) => ({
  open: state.System.drawer.open,
  screens: [],
})

const conn = connect(
  ms,
  { toggleDrawer: toggleDrawer },
)

export default conn(Drawer)
