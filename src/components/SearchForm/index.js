// @flow
import * as React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { List, ListItem } from 'material-ui/List'
import FontAwesome from 'react-fontawesome'
import styled from 'styled-components'

type Props = {
  tags: string[],
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
      tag => tag.indexOf(state.tagText) !== -1,
    )
    return (
      <Wrapper>
        <Row>
          <Inputs>
            <Row>
              <IconWrap>
                <FontAwesome name="search" />
              </IconWrap>
              <TextField
                hintText="キーワード・作品・キャラ"
                value={state.qText}
                onChange={(event: Object, newValue: string) => {
                  this.setState({
                    qText: newValue,
                  })
                }}
              />
            </Row>
            <Row>
              <IconWrap>
                <FontAwesome name="tag" />
              </IconWrap>
              <TextField
                hintText="タグ"
                value={state.tagText}
                onChange={(event: Object, newValue: string) => {
                  console.log(newValue)
                  this.setState({
                    tagText: newValue,
                  })
                }}
              />
            </Row>
          </Inputs>
          <RaisedButton
            style={{ margin: 5, paddingTop: 25, width: 50 }}
            label="検索"
            onClick={() => {
              props.searchSubmit(state.qText, state.tagText)
            }}
          />
        </Row>
        <p>タグ数:{props.tags.length}</p>
        <p>絞り込み:{filteredTags.length}</p>
        <List>
          {filteredTags.map(tag => {
            // HACKME
            const selected = tag === state.tagText
            return (
              <ListItem
                rightIcon={
                  <FontAwesome
                    name={selected ? 'times-circle-o' : 'circle-thin'}
                  />
                }
                primaryText={tag}
                onClick={() => {
                  this.setState({ tagText: selected ? '' : tag })
                }}
                secondaryText="..."
              />
            )
          })}
        </List>
      </Wrapper>
    )
  }
}

export default Component
