// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import type { State } from '../../types'
import StoryCellContainer from '../StoryCellContainer'

type Props = {
  storyIds: number[],
}

class Container extends React.Component<Props> {
  render() {
    const { storyIds } = this.props
    return (
      <div>
        {storyIds.map(id => <StoryCellContainer key={id} storyId={id} />)}
      </div>
    )
  }
}

const ms = (state: State, ownProps: Props) => ownProps

const conn: Connector<Props, Props> = connect(ms, {})

export default conn(Container)
