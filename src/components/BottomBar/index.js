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
      const icon = <FontAwesome name="rocket" size="2x" />
      return (
        <BottomNavigationItem
          key={s.id}
          label={s.q}
          icon={icon}
          onClick={() => switchTab(s.id)}
        />
      )
    })}
  </BottomNavigation>
)

export default BottomBar
