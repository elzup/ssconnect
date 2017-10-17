import styled from 'styled-components'

export const Wrapper = styled.div`
  background: ${p => (p.active ? 'orange' : 'white')};
`
