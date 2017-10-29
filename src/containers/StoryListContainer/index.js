// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import type { State, PageInfo, Screen } from '../../types'
import StoryCellContainer from '../StoryCellContainer'
import PagingBar from '../../components/PagingBar'
import styled from 'styled-components'
import { pageChange } from '../ScreensContainer/logic'

type Props = {
  screen: Screen,
  pageChange: Function,
}

type OProps = {
  screen: Screen,
}

const Wrap = styled.div`
  height: ${p => p.height}px;
  overflow-y: scroll;
`

class Container extends React.Component<Props> {
  render() {
    const { props } = this
    if (!props.screen.loaded) {
      return null
    }
    return (
      <Wrap>
        <PagingBar
          pageInfo={props.screen.pageInfo}
          pageChange={props.pageChange}
        />
        {props.screen.storyIds.map(id => (
          <StoryCellContainer key={id} storyId={id} />
        ))}
        <PagingBar
          pageInfo={
            props.screen.loaded
              ? props.screen.pageInfo
              : { next: 0, prev: 0, total: 0, page: 0 }
          }
          pageChange={props.pageChange}
        />
      </Wrap>
    )
  }
}

const ms = (state: State, ownProps: OProps) => ownProps

const conn: Connector<OProps, Props> = connect(ms, { pageChange })

export default conn(Container)
