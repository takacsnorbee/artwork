import React from 'react';
import { screen } from '@testing-library/react';
import Artworks from '../Artworks';
import { renderWithState } from '../../../helper/testHelper';

describe('Artwork component test', () => {
  test('Search btn is rendered', () => {
    renderWithState(<Artworks />);
    const searchBtn = screen.getByTestId('searchBtn');
    expect(searchBtn).toBeInTheDocument();
  });
  test('Clear btn is rendered', () => {
    renderWithState(<Artworks />);
    const clearBtn = screen.getByText('Clear');
    expect(clearBtn).toBeInTheDocument();
  });
  test('Select is rendered', () => {
    renderWithState(<Artworks />);
    const select = screen.getByTestId('perPage');
    expect(select).toBeInTheDocument();
  });
});
