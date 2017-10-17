// @flow
import * as React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Comp, { type Props } from '.'

const setup = (props: Props) => {
  const comp = shallow(<Comp {...props}>{props.screens}</Comp>)

  return {
    comp: comp,
    children: comp.children().at(1),
    h3: comp.find('h3'),
  }
}

test('snapshot', () => {
  const props = {
    screens: [],
  }
  const { comp } = setup(props)
  expect(toJson(comp)).toMatchSnapshot()
})
