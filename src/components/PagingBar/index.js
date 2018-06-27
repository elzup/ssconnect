// @flow
import * as React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import Slider from '@material-ui/lab/Slider'

import PrevIcon from '@material-ui/icons/ArrowBack'
import NextIcon from '@material-ui/icons/ArrowForward'

import type { ScreenLoaded } from '../../types'

export type Props = {
  screen: $Shape<ScreenLoaded>,
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
  padding: 20px;
`

const Infos = styled.div`
  text-align: center;
  display: flex;
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
          <Slider
            min={1}
            max={pageInfo.total}
            step={1}
            value={this.state.page}
            defaultValue={pageInfo.page}
            onChange={(_, value) => {
              this.setState({ page: value })
            }}
            onDragEnd={() => {
              pageChange(screen, this.state.page)
            }}
          />
        </Controls>
        <Infos>
          <Button
            color="primary"
            disabled={pageInfo.prev === false}
            size="small"
            onClick={() => {
              pageChange(screen, pageInfo.prev)
            }}
          >
            <PrevIcon />
          </Button>
          <div style={{ flex: 1, marginTop: '20px' }}>
            {this.state.page}/{pageInfo.total}
          </div>
          <Button
            color="primary"
            style={{ margin: '15px 0' }}
            size="small"
            onClick={() => {
              pageChange(screen, pageInfo.next)
            }}
          >
            <NextIcon />
          </Button>
        </Infos>
      </Wrapper>
    )
  }
}
export default Component
