import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../src/client/App';

describe('Dark mode', () => {
  test('light mode is on by default', () => {
    render(<App />);
    expect(screen.getByText('🌙 Dark Mode')).toBeInTheDocument();
  });

  test('clicking button switches to dark mode', () => {
    render(<App />);
    const button = screen.getByText('🌙 Dark Mode');
    fireEvent.click(button);
    expect(screen.getByText('☀️ Light Mode')).toBeInTheDocument();
  });

  test('clicking button twice returns to light mode', () => {
    render(<App />);
    const button = screen.getByText('🌙 Dark Mode');
    fireEvent.click(button);
    fireEvent.click(screen.getByText('☀️ Light Mode'));
    expect(screen.getByText('🌙 Dark Mode')).toBeInTheDocument();
  });
});