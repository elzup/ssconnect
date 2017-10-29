// @flow
import * as React from 'react'
import FontAwesome from 'react-fontawesome'
import _ from 'lodash'
import styled from 'styled-components'
import Slider from 'material-ui/Slider'
import FlatButton from 'material-ui/FlatButton'

import type { ScreenLoaded, System, PageInfo } from '../../types'

export type Props = {
  screen: ScreenLoaded,
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

const Infos = styled.div`
  text-align: center;
`

class Component extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      page: props.screen.pageInfo.page,
    }
  }
  render() {
    const { screen, pageChange } = this.props
    const { pageInfo } = screen
    return (
      <Wrapper>
        <Controls>
          <FlatButton
            label="←"
            primary
            disabled={pageInfo.prev === false}
            style={{ margin: '15px 0' }}
            onClick={() => {
              if (pageInfo.prev === false) {
                return
              }
              pageChange(screen, pageInfo.prev)
            }}
          />
          <Slider
            min={0}
            max={pageInfo.total}
            step={1}
            defaultValue={pageInfo.page}
            style={{ width: '100%', margin: '0' }}
            onChange={(_, value) => {
              this.setState({ page: value })
            }}
            onDragStop={() => {
              pageChange(screen, this.state.page)
            }}
          />

          <FlatButton
            label="→"
            primary
            disabled={pageInfo.next === false}
            style={{ margin: '15px 0' }}
            onClick={() => {
              if (pageInfo.next === false) {
                return
              }
              pageChange(screen, pageInfo.next)
            }}
          />
        </Controls>
        <Infos>
          {this.state.page}/{pageInfo.total}
        </Infos>
      </Wrapper>
    )
  }
}
export default Component
