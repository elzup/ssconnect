// @flow
import * as React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import PrevIcon from '@material-ui/icons/ArrowBack'
import NextIcon from '@material-ui/icons/ArrowForward'

import type { PageInfo } from '../../types'

export type Props = {
  pageInfo: PageInfo,
  pageChange: ({ page: number }) => void,
}

export type State = {
  page: number,
}

const Infos = styled.div`
  display: flex;
  text-align: center;
  width: 100%;
`

const buttonStyle = {
  marginBottom: '20px',
}

const PageInfoBlock = (props: Props) => (
  <Infos>
    <Button
      style={buttonStyle}
      color="primary"
      disabled={props.pageInfo.prev === false}
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
      style={buttonStyle}
      color="primary"
      disabled={props.pageInfo.next === false}
      onClick={() => {
        props.pageChange({ page: props.pageInfo.next || 0 })
      }}
    >
      <NextIcon />
    </Button>
  </Infos>
)
export default PageInfoBlock
