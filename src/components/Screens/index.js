// @flow
import * as React from 'react'
import type { Screen } from '../../types'

export type Props = {
  screens: Screen[],
}

const Screens = ({ screens }: Props) => (
  <div>
    {screens.map(s => (
      <div>
        <h3>{s.id}</h3>
        <div>{s.tag}</div>
      </div>
    ))}
  </div>
)

export default Screens
