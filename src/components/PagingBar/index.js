// @flow
import * as React from 'react'
import FontAwesome from 'react-fontawesome'
import _ from 'lodash'
import styled from 'styled-components'
import Slider from 'material-ui/Slider'
import FlatButton from 'material-ui/FlatButton'

import type { Screen, System, PageInfo } from '../../types'

export type Props = {
  pageInfo: PageInfo,
  pageChange: Function,
}

export type State = {
  page: number,
}

const Wrapper = styled.div`
  width: 100%;
`

const Controls = styled.div`
  display: flex;
  width: 100%;
`

class Component extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      page: props.pageInfo.page,
    }
  }
  render() {
    const { pageInfo, pageChange } = this.props
    return (
      <Wrapper>
        <Controls>
          <FlatButton
            backgroundColor="gray"
            label="←"
            onClick={() => {
              if (pageInfo.prev === false) {
                return
              }
              pageChange(pageInfo.prev)
            }}
          />
          <Slider
            min={0}
            max={pageInfo.total}
            step={1}
            defaultValue={pageInfo.page}
            style={{ width: '100%' }}
            onChange={(_, value) => {
              this.setState({ page: value })
            }}
            onDragStop={() => {
              pageChange(this.state.page)
            }}
          />

          <FlatButton
            backgroundColor="gray"
            label="→"
            onClick={() => {
              if (pageInfo.next === false) {
                return
              }
              pageChange(pageInfo.next)
            }}
          />
        </Controls>
        <p>
          {this.state.page}/{pageInfo.total}
        </p>
      </Wrapper>
    )
  }
}
export default Component
