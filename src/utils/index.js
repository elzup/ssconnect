// @flow
import type { Screen } from '../types'

export const toId = (screen: Screen) => `${screen.q}----${screen.tag}`

export function buildScreen(q: string, tag: string, page: number): Screen {
  if (q === '' && tag === '') {
    // news
    return {
      tag,
      page,
      q,
      id: `news`,
      label: `新着`,
    }
  }
  return {
    tag,
    page,
    q,
    id: `${q}----${tag}`,
    label: `${q}#${tag}`,
  }
}
