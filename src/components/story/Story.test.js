import React from 'react'
import renderer from 'react-test-renderer';

import Story from './Story'

test('Story renders correctly', () => {
  const match = { params: {} }
  const tree = renderer.create(
    <Story match={match} fetchStory={() => } fetchStoryComments={() => {}} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
