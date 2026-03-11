import React from 'react';
import { render, screen } from '@testing-library/react-native';
import HelloWorld from '../components/HelloWorld';

describe('HelloWorld', () => {
  it('renders default greeting', () => {
    render(<HelloWorld />);
    expect(screen.getByText('Hello, World!')).toBeTruthy();
  });

  it('renders custom name', () => {
    render(<HelloWorld name="Expo" />);
    expect(screen.getByText('Hello, Expo!')).toBeTruthy();
  });
});
