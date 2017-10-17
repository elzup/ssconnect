// @flow
import * as React from 'react'
import type { Screen, System } from '../../types'

import FontIcon from 'material-ui/FontIcon'

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
  <BottomNavigation selectedIndex={system.selectedTab}>
    {screens.map(s => {
      const icon = <FontIcon className="material-icons">restore</FontIcon>
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
