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

const A = p => <a {...p}>{p.children}</a>

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
            <ListItem button component={Link} to="/">
              <ListItemIcon>
                <TrendingUpIcon />
              </ListItemIcon>
              <ListItemText>新着</ListItemText>
            </ListItem>

            <ListItem button component={Link} to="/search">
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
              <ListItemText>検索</ListItemText>
            </ListItem>
            <Divider />
            <ListSubheader>お気に入り</ListSubheader>
            {props.screens.length === 0 && (
              <ListItem>
                <ListItemText>---</ListItemText>
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
            <ListItem
              button
              component={A}
              href="https://github.com/elzup/ssconnect"
            >
              <ListItemIcon>
                <CodeIcon />
              </ListItemIcon>
              <ListItemText>コード</ListItemText>
            </ListItem>
            <ListItem button component={A} href="https://elzup.com">
              <ListItemIcon>
                <AuthorIcon />
              </ListItemIcon>
              <ListItemText>アプリ開発者</ListItemText>
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
