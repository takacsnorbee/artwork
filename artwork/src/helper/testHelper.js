/* eslint-disable react/prop-types */
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { mockedState } from './mockedStates';
import { render } from '@testing-library/react';
import React from 'react';

const mockedStore = {
  getState: () => mockedState,
  subscribe: jest.fn(),
  dispatch: jest.fn(),
};

export const renderWithState = (ui) => {
  const Wrapper = ({ children }) => (
    <Provider store={mockedStore}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
  return render(ui, { wrapper: Wrapper });
};
