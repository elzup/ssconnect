// @flow
import * as React from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'

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
}

const Wrapper = styled.div`
  padding: 10px;
`

const Inputs = styled.div`
  width: 70%;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

const IconWrap = styled.div`
  margin: 15px auto;
  width: 2em;
`

class Component extends React.Component<Props, State> {
  searchRef: ?HTMLInputElement

  state = {
    q: '',
    tag: '',
  }

  render() {
    const { props, state } = this
    const filteredTags = props.tags.filter(
      tag => tag.name.indexOf(state.tag) !== -1,
    )
    return (
      <Wrapper>
        <Row>
          <Inputs>
            <Row>
              <IconWrap>
                <SearchIcon />
              </IconWrap>
              <TextField
                label="キーワード・作品・キャラ"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={e => {
                  this.setState({ q: e.target.value })
                }}
              />
            </Row>
            <Row>
              <IconWrap>
                <StarIcon />
              </IconWrap>
              <TextField
                label="タグ"
                inputRef={r => {
                  this.searchRef = r
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={e => {
                  this.setState({ tag: e.target.value })
                }}
              />
            </Row>
          </Inputs>
          <Button
            color="primary"
            variant="contained"
            style={{ margin: 5, height: 50, width: 50 }}
            onClick={() => {
              props.searchSubmit({ q: state.q, tag: state.tag })
            }}
          >
            検索
          </Button>
        </Row>
        <p>タグ数:{props.tags.length}</p>
        <p>絞り込み:{filteredTags.length}</p>
        <List>
          {filteredTags.map(t => {
            // HACKME
            const selected = t.name === state.tag
            return (
              <ListItem
                key={t.id}
                onClick={() => {
                  const tag = selected ? '' : t.name
                  this.setState({ tag })
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
