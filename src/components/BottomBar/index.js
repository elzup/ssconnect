// @flow
import * as React from 'react'
import FontAwesome from 'react-fontawesome'
import _ from 'lodash'
import styled from 'styled-components'

import {
  BottomNavigation,
  BottomNavigationItem,
} from 'material-ui/BottomNavigation'

import type { Screen, System } from '../../types'

export type Props = {
  screens: Screen[],
  switchTab: Function,
  system: System,
}

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  margin-bottom: 0;
  width: 100%;
`

function typeConsts(screen: Screen): { iconName: string, label: string } {
  switch (screen.type) {
    case 'new': {
      return {
        iconName: 'home',
        label: '新着',
      }
    }
    case 'search': {
      return {
        iconName: 'search',
        label: '検索',
      }
    }
    case 'profile': {
      return {
        iconName: 'tag',
        label: screen.q,
      }
    }
  }
  return {
    iconName: '',
    label: '',
  }
}

const BottomBar = ({ screens, switchTab, system }: Props) => (
  <Wrapper>
    <BottomNavigation selectedIndex={system.selectedTab}>
      {screens.map(s => {
        const { iconName, label } = typeConsts(s)
        return (
          <BottomNavigationItem
            key={s.id}
            label={label}
            icon={<FontAwesome name={iconName} size="2x" />}
            onClick={() => switchTab(s.id)}
          />
        )
      })}
    </BottomNavigation>
  </Wrapper>
)

export default BottomBar
