import React from 'react';
import { render, screen } from '@testing-library/react';
import { Application } from '../../../assets/constants';
import Layout from '../Layout';

describe('Layout tests', () => {
  it('should render children', () => {
    const { getElementsByClassName } = render(<Layout/>);
    
    expect(screen.getByText(Application.APPLICATION_NAME)).toBeTruthy();
    expect(getElementsByClassName('Panel')).toBeTruthy();
    expect(getElementsByClassName('Header')).toBeTruthy();
    expect(getElementsByClassName('Search')).toBeTruthy();
    expect(getElementsByClassName('List')).toBeTruthy();
  });
});
