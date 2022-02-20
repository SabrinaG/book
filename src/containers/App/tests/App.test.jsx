import React from 'react';
import { render, screen } from '@testing-library/react';

import App from '../App';

describe('App tests', () => {
  it('should render children', () => {
    render(<App><div>please, render me</div></App>);

    const child = screen.getByText(/please, render me/i);
    expect(child).toBeInTheDocument();
  });

  it('should catch children\'s errors', () => {
    render(
      <App>
        <ComponentThatThrows />
      </App>,
    );

    expect(console.log()).toHaveBeenCalled();
  });
});

const ComponentThatThrows = () => {
  throw new Error('hello there');
};
