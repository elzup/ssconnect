// @flow
import type { Screen } from '../types'

export const toId = (screen: Screen) => `${screen.q}----${screen.tag}`
