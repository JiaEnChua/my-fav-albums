import React from 'react';
import { render, screen } from '@testing-library/react';
import Album from '.';
import ReactDOM from 'react-dom';

describe('Album component test', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Album />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
