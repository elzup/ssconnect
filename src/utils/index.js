// @flow
import _ from 'lodash'
import type { Screen } from '../types'

export function getTitle(screen: Screen): string {
  switch (screen.type) {
    case 'new':
      return '新着'
    case 'search':
      return '検索'
    case 'profile':
      return _.compact([screen.q, screen.tag]).join(' | ')
    default:
      return ''
  }
}
