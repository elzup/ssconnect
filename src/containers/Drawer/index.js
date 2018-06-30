// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import type { State, Screen } from '../../types'

import { Link } from 'react-router-dom'

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'

import { toggleDrawer } from '../System/actions'
import { getBookmarks } from '../Bookmarks/selectors'

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
          style={{
            width: '300px',
          }}
          onClick={props.toggleDrawer}
          onKeyDown={props.toggleDrawer}
        >
          <List>
            <ListItem>
              <Link to="/">新着</Link>
            </ListItem>
            <ListItem>
              <Link to="/search">検索</Link>
            </ListItem>
            <Divider />
            {props.screens.map((screen, i) => (
              <ListItem key={i}>
                <Link
                  to={`?q=${screen.q}&tag=${screen.tag}&page=${screen.page}`}
                />
                {screen.q}
              </ListItem>
            ))}
          </List>
        </div>
      </SwipeableDrawer>
    )
  }
}

const ms = (state: State) => ({
  open: state.System.drawer.open,
  screens: getBookmarks(state),
})

const conn = connect(
  ms,
  { toggleDrawer: toggleDrawer },
)

export default conn(Drawer)
