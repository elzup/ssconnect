// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import type { State, Screen } from '../../types'

import { Link } from 'react-router-dom'

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import Divider from '@material-ui/core/Divider'
import TrendingUpIcon from '@material-ui/icons/TrendingUp'
import SearchIcon from '@material-ui/icons/Search'
import CodeIcon from '@material-ui/icons/Code'
import AuthorIcon from '@material-ui/icons/ThumbUp'

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
              <ListItemIcon>
                <TrendingUpIcon />
              </ListItemIcon>
              <Link to="/">
                <ListItemText>新着</ListItemText>
              </Link>
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
              <Link to="/search">
                <ListItemText>検索</ListItemText>
              </Link>
            </ListItem>
            <Divider />
            <ListSubheader>お気に入り</ListSubheader>
            {props.screens.length === 0 && (
              <ListItem>
                <ListItemText>----</ListItemText>
              </ListItem>
            )}
            {props.screens.map((screen, i) => (
              <ListItem key={i}>
                <Link
                  to={`/?q=${screen.q}&tag=${screen.tag}&page=${screen.page}`}
                >
                  <ListItemText>{screen.label}</ListItemText>
                </Link>
              </ListItem>
            ))}
            <Divider />
            <ListItem>
              <ListItemIcon>
                <CodeIcon />
              </ListItemIcon>
              <a href="https://github.com/elzup/ssconnect">
                <ListItemText>コード</ListItemText>
              </a>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AuthorIcon />
              </ListItemIcon>
              <a href="https://elzup.com">
                <ListItemText>アプリ開発者</ListItemText>
              </a>
            </ListItem>
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
