// @flow
import * as React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import StarIcon from '@material-ui/icons/Star'

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

function typeConsts(screen: Screen): { icon: any, label: string } {
  const label = getTitle(screen)
  switch (screen.type) {
    case 'new': {
      return {
        icon: <HomeIcon />,
        label,
      }
    }
    case 'search': {
      return {
        icon: <SearchIcon />,
        label,
      }
    }
    case 'profile': {
      return {
        icon: <StarIcon />,
        label,
      }
    }
    default: {
      return {
        icon: null,
        label,
      }
    }
  }
}

const BottomBar = ({ screens, switchTab, system }: Props) => (
  <Wrapper>
    <BottomNavigation value={system.selectedTab}>
      {screens.map(s => {
        const { icon, label } = typeConsts(s)
        return (
          <BottomNavigationAction
            key={s.id}
            label={label}
            icon={icon}
            onClick={() => switchTab(s.id)}
          />
        )
      })}
    </BottomNavigation>
  </Wrapper>
)

export default BottomBar
