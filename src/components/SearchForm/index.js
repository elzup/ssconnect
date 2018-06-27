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
  searchSubmit: Function,
}

type State = {
  qText: string,
  tagText: string,
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
  constructor(props: Props) {
    super(props)
    this.state = {
      qText: '',
      tagText: '',
    }
  }
  render() {
    const { props, state } = this
    const filteredTags = props.tags.filter(
      tag => tag.name.indexOf(state.tagText) !== -1,
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
                onChange={(e, qText) => {
                  this.setState({ qText })
                }}
              />
            </Row>
            <Row>
              <IconWrap>
                <StarIcon />
              </IconWrap>
              <TextField
                label="タグ"
                onChange={(e, tagText) => {
                  this.setState({ tagText: tagText })
                }}
              />
            </Row>
          </Inputs>
          <Button
            color="primary"
            variant="contained"
            style={{ margin: 5, height: 50, width: 50 }}
            onClick={() => {
              props.searchSubmit(state.qText, state.tagText)
            }}
          >
            検索
          </Button>
        </Row>
        <p>タグ数:{props.tags.length}</p>
        <p>絞り込み:{filteredTags.length}</p>
        <List>
          {filteredTags.map(tag => {
            // HACKME
            const selected = tag.name === state.tagText
            return (
              <ListItem
                key={tag.id}
                onClick={() => {
                  this.setState({ tagText: selected ? '' : tag.name })
                }}
              >
                <div style={{ width: '100%', display: 'flex' }}>
                  <div style={{ flex: 1 }}>
                    <Typography variant="body1">{tag.name}</Typography>
                    <Typography variant="body2">
                      ({tag.taggingsCount})
                    </Typography>
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
