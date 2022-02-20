import React from 'react';
import { render, screen } from '@testing-library/react';
import { Application } from '../../../assets/constants';
import Home from '../Home';

describe('Home tests', () => {
  it('should render children', () => {
    render(<Home/>);

    const child = screen.getByText(Application.APPLICATION_NAME);
    expect(child).toBeInTheDocument();
  });
});
