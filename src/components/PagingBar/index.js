// @flow
import * as React from 'react'
import FontAwesome from 'react-fontawesome'
import _ from 'lodash'
import styled from 'styled-components'
import Slider from 'material-ui/Slider'

import type { Screen, System, PageInfo } from '../../types'

export type Props = {
  pageInfo: PageInfo,
  pageChange: (page: number) => {},
}

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  margin-bottom: 0;
  width: 100%;
`

const Component = ({ pageInfo, pageChange }: Props) => {
  return (
    <Wrapper>
      <button
        onClick={() => {
          if (pageInfo.prev === false) {
            return
          }
          pageChange(pageInfo.prev)
        }}
      >
        {' '}
        ←{' '}
      </button>
      <Slider
        defaultValue={0.5}
        onChange={value => {
          pageChange(value)
        }}
      />

      <button
        onClick={() => {
          if (pageInfo.next === false) {
            return
          }
          pageChange(pageInfo.next)
        }}
      >
        {' '}
        ←{' '}
      </button>
    </Wrapper>
  )
}
export default Component
