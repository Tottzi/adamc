import React from 'react';
import 'intersection-observer';
import { render, screen, fireEvent, configure } from '@testing-library/react';
import About from './About';
import 'intersection-observer';

describe(`Timeline`, () => {
  test('Check the about part of the site', () => {
    render(<About />)

    configure({testIdAttribute: 'class'})
    const element = screen.getByTestId('about');
    // Check if the add logo is on the HTML
    expect(element).toBeInTheDocument();
  })
})
