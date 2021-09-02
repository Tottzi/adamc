import React from 'react';
import { render, screen, fireEvent, configure } from '@testing-library/react';
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  // Link
} from "react-router-dom";
import Navbar from './Navbar';

describe(`Navbar`, () => {
  test('try to delete element with remove button before it appears', () => {
    render(<Router><Navbar /></Router>)

    configure({testIdAttribute: 'class'})
    const navbarLogo = screen.getByTestId('navbar__logo');
    // Check if the add logo is on the HTML
    expect(navbarLogo).toBeInTheDocument();
  })

  // test('delete element with remove button after it appeared', () => {
  //   render(<Navbar />)

  //   configure({testIdAttribute: 'class'})
  //   const button = screen.getByTestId('form_add__btn');
  //   const title = screen.getByPlaceholderText(/15 char/i);
  //   const desc = screen.getByPlaceholderText(/45 char/i);
  //   // Check if the add button is on the HTML
  //   expect(button).toBeInTheDocument();
  //   // Fill up the input fields
  //   fireEvent.change(title, {target: {value: 'Todo'}});
  //   fireEvent.change(desc, {target: {value: 'desc'}});
  //   expect(title.value).toBe('Todo');
  //   // Add to the list
  //   fireEvent.click(button);
  //   // Select the added tile
  //   const todo = screen.getByTestId('todo__article');
  //   // Click on the tile to show the remove button
  //   fireEvent.click(todo);
  //   // Select the button element and fire the delete request
  //   const removeBtn = screen.getByTestId(/\btodo__btn\b/i);
  //   fireEvent.click(removeBtn);
  //   // The todo should disappear
  //   expect(todo).not.toBeInTheDocument();
  // })
})
