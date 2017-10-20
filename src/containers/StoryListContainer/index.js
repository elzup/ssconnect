// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import type { State } from '../../types'
import StoryCellContainer from '../StoryCellContainer'
import styled from 'styled-components'

type Props = {
  storyIds: number[],
}

const Wrap = styled.div`
  height: ${p => p.height}px;
  overflow-y: scroll;
`

class Container extends React.Component<Props> {
  render() {
    const { storyIds } = this.props
    return (
      <Wrap height={window.innerHeight - 66 - 56}>
        {storyIds.map(id => <StoryCellContainer key={id} storyId={id} />)}
      </Wrap>
    )
  }
}

const ms = (state: State, ownProps: Props) => ownProps

const conn: Connector<Props, Props> = connect(ms, {})

export default conn(Container)
