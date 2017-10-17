// @flow
import * as React from 'react'
import type { Screen, System } from '../../types'
import { Wrapper } from './Wrapper'

export type Props = {
  screens: Screen[],
  system: System,
  switchTab: Function,
}

const Screens = ({ screens, switchTab, system }: Props) => {
  return (
    <div>
      {screens.map(s => (
        <Wrapper
          onClick={() => switchTab(s.id)}
          active={s.id === system.selectedTab}
          key={s.id}
        >
          <h3>{s.id}</h3>
          <div>Q: {s.q}</div>
        </Wrapper>
      ))}
    </div>
  )
}

export default Screens
