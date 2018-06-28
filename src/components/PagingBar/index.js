// @flow
import * as React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import PrevIcon from '@material-ui/icons/ArrowBack'
import NextIcon from '@material-ui/icons/ArrowForward'
import Slider, { Handle } from 'rc-slider'
import Tooltip from 'rc-tooltip'

import type { PageInfo } from '../../types'

export type Props = {
  pageInfo: PageInfo,
  pageChange: ({ page: number }) => void,
}

export type State = {
  page: number,
}

const Controls = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
`

const Infos = styled.div`
  display: flex;
  text-align: center;
  width: 100%;
`
const handle = props => {
  const { value, dragging, index, ...restProps } = props
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  )
}

const PagingBar = (props: Props) => (
  <div>
    <Controls>
      <Slider
        min={1}
        max={props.pageInfo.total}
        defaultValue={props.pageInfo.page}
        trackStyle={{ backgroundColor: 'gray', height: 5 }}
        handleStyle={{
          borderColor: 'gray',
          height: 28,
          width: 28,
          marginLeft: -14,
          marginTop: -14,
          backgroundColor: 'white',
        }}
        railStyle={{ height: 5 }}
        handle={handle}
        onAfterChange={page => {
          props.pageChange({ page })
        }}
      />
    </Controls>
    <Infos>
      <Button
        color="primary"
        disabled={props.pageInfo.prev === false}
        size="small"
        onClick={() => {
          props.pageChange({ page: props.pageInfo.prev || 0 })
        }}
      >
        <PrevIcon />
      </Button>
      <Typography
        variant="headline"
        component={'h2'}
        style={{ flex: 1, paddingTop: '13px' }}
      >
        {props.pageInfo.page}/{props.pageInfo.total}
      </Typography>
      <Button
        color="primary"
        style={{}}
        size="small"
        onClick={() => {
          props.pageChange({ page: props.pageInfo.next || 0 })
        }}
      >
        <NextIcon />
      </Button>
    </Infos>
  </div>
)
export default PagingBar
