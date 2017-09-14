import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter as Router, withRouter } from 'react-router-dom'

import Stories from './Stories'

test('Stories renders correctly', () => {
  const tree = renderer.create(
    <Router>
      <Stories />
    </Router>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
