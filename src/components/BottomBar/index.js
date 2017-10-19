// @flow
import * as React from 'react'
import type { Screen, System } from '../../types'
import FontAwesome from 'react-fontawesome'
import _ from 'lodash'

import {
  BottomNavigation,
  BottomNavigationItem,
} from 'material-ui/BottomNavigation'

export type Props = {
  screens: Screen[],
  switchTab: Function,
  system: System,
}

const BottomBar = ({ screens, switchTab, system }: Props) => (
  <BottomNavigation
    selectedIndex={system.selectedTab}
    style={{
      bottom: '0px',
      position: 'absolute',
    }}
  >
    {screens.map(s => {
      let icon = <FontAwesome name="home" size="2x" />
      let label = '新着'
      switch (s.type) {
        case 'search': {
          icon = <FontAwesome name="search" size="2x" />
          label = s.q
        }
      }
      return (
        <BottomNavigationItem
          key={s.id}
          label={label}
          icon={icon}
          onClick={() => switchTab(s.id)}
        />
      )
    })}
  </BottomNavigation>
)

export default BottomBar
