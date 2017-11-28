// @flow
import * as React from 'react'
import FontAwesome from 'react-fontawesome'

import FontIcon from 'material-ui/FontIcon'
import styled from 'styled-components'
import _ from 'lodash'

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

function getTitle(screen: Screen): string {
  if (screen.type === 'new') {
    return '新着'
  } else if (screen.type === 'search') {
    return '検索'
  } else if (screen.type === 'profile') {
    return _.compact([screen.q, screen.tag]).join(' | ')
  }
  return ''
}

function typeConsts(screen: Screen): { iconName: string, label: string } {
  const label = getTitle(screen)
  switch (screen.type) {
    case 'new': {
      return {
        iconName: 'home',
        label,
      }
    }
    case 'search': {
      return {
        iconName: 'search',
        label,
      }
    }
    case 'profile': {
      return {
        iconName: 'star',
        label,
      }
    }
    default: {
      return {
        iconName: '',
        label,
      }
    }
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
            icon={<FontIcon className="material-icons">{iconName}</FontIcon>}
            onClick={() => switchTab(s.id)}
          />
        )
      })}
    </BottomNavigation>
  </Wrapper>
)

export default BottomBar
