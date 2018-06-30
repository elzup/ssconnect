// @flow
import * as React from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'
import InputAdornment from '@material-ui/core/InputAdornment'

import SearchIcon from '@material-ui/icons/Search'
import StarIcon from '@material-ui/icons/Star'
import RadioCheckedIcon from '@material-ui/icons/RadioButtonChecked'
import RadioUnCheckedIcon from '@material-ui/icons/RadioButtonUnchecked'

import styled from 'styled-components'
import type { Tag } from '../../types'

export type Props = {
  tags: Tag[],
  searchSubmit: ({ q: string, tag: string }) => void,
}

type State = {
  q: string,
  tag: string,
  filteredTags: Tag[],
}

const Wrapper = styled.div`
  padding: 10px;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

class Component extends React.Component<Props, State> {
  searchRef: ?HTMLInputElement

  state = {
    q: '',
    tag: '',
    filteredTags: [],
  }

  componentDidMount() {
    this.setState({ filteredTags: this.props.tags })
  }

  filterTag = (tag: string) => {
    const tl = tag.toLowerCase()
    const filteredTags = this.props.tags.filter(
      t => t.name.toLowerCase().indexOf(tl) !== -1,
    )
    this.setState({ filteredTags })
  }

  render() {
    const { props, state } = this
    return (
      <Wrapper>
        <Row>
          <div>
            <TextField
              label="キーワード・作品・キャラ"
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              onChange={e => {
                this.setState({ q: e.target.value })
              }}
            />
            <TextField
              label="タグ"
              inputRef={r => {
                this.searchRef = r
              }}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={e => {
                const tag = e.target.value
                this.setState({ tag })
                this.filterTag(tag)
              }}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <StarIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </Row>
        <Button
          color="primary"
          variant="contained"
          fullWidth
          onClick={() => {
            props.searchSubmit({ q: state.q, tag: state.tag })
          }}
        >
          検索
        </Button>
        <p>タグ数:{props.tags.length}</p>
        <p>絞り込み:{state.filteredTags.length}</p>
        <List>
          {state.filteredTags.map(t => {
            // HACKME
            const selected = t.name === state.tag
            return (
              <ListItem
                key={t.id}
                onClick={() => {
                  const tag = selected ? '' : t.name
                  this.setState({ tag })
                  this.filterTag(tag)
                  if (this.searchRef) {
                    this.searchRef.value = tag
                  }
                }}
              >
                <div style={{ width: '100%', display: 'flex' }}>
                  <div style={{ flex: 1 }}>
                    <Typography variant="body1">{t.name}</Typography>
                    <Typography variant="body2">({t.taggingsCount})</Typography>
                  </div>
                  <div style={{ flex: 0 }}>
                    {selected ? <RadioCheckedIcon /> : <RadioUnCheckedIcon />}
                  </div>
                </div>
              </ListItem>
            )
          })}
        </List>
      </Wrapper>
    )
  }
}

export default Component
