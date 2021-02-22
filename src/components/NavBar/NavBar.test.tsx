import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';
import ReactDOM from 'react-dom';

describe('NavBar component test', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NavBar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders get My Favorite Album text', () => {
    render(<NavBar />);
    const appTitle = screen.getByText('My Favorite Albums');
    expect(appTitle).toBeInTheDocument();
  });
});
