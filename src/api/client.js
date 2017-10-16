// @flow
const TIMEOUT = 100

export function getStories(cb: Function, timeout: number = TIMEOUT) {
  setTimeout(() => {
    cb([])
  }, timeout)
}
