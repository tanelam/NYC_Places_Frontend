import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const appWrapper = renderer
    .create(<App />)
    .toJSON();
  expect(appWrapper).toMatchSnapshot();
});
