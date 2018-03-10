import React from 'react';
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import Home from './Home';

const mockStore = configureMockStore();
const store = mockStore({
  projects: {
    list: [
      { name: 'Project #1' },
      { name: 'Project #2' },
      { name: 'Project #3' }
    ]
  }
});

test('', () => {
  const component = renderer.create(
    <Home store={store} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
