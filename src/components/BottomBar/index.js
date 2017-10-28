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

const BottomBar = ({ screens, switchTab, system }: Props) => (
  <Wrapper>
    <BottomNavigation selectedIndex={system.selectedTab}>
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
  </Wrapper>
)

export default BottomBar
