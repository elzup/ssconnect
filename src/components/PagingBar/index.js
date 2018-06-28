// @flow
import * as React from 'react'
import styled from 'styled-components'

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
  <Controls>
    <Slider
      min={1}
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
      max={props.pageInfo.total}
      defaultValue={props.pageInfo.page}
      onAfterChange={page => {
        props.pageChange({ page })
      }}
    />
  </Controls>
)
export default PagingBar
