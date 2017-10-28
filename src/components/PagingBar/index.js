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
  pageChange: (page: number) => {},
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`

const Component = ({ pageInfo, pageChange }: Props) => {
  return (
    <Wrapper>
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
          pageChange(value)
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
    </Wrapper>
  )
}
export default Component
