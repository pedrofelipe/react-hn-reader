import React from 'react'
import renderer from 'react-test-renderer';

import Placeholder from './Placeholder'

test('Placeholder renders correctly', () => {
  const tree = renderer.create(
    <Placeholder />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
