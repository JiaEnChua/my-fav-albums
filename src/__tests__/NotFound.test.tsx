import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '../components/NotFound';
import ReactDOM from 'react-dom';

describe('Album component test', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NotFound />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
