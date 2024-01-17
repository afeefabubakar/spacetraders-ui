import { render, screen } from '@testing-library/react';
import HeroButtonGroup from './HeroButtonGroup';
import React from 'react';

describe('HeroButtonGroup', () => {
  it('should render with two navigation buttons', () => {
    render(<HeroButtonGroup />);

    const navigationButtons = screen.getAllByRole('link');

    expect(navigationButtons).toHaveLength(2);
  });

  it('should have a link to get-started page', () => {
    render(<HeroButtonGroup />);

    const getStartedButton = screen.getByRole('link', {
      name: /^Get started$/,
    });

    expect(getStartedButton).toHaveAttribute('href', '/get-started');
  });

  it('should have a link to spacetraders.io', () => {
    render(<HeroButtonGroup />);

    const spacetradersButton = screen.getByRole('link', {
      name: /^SpaceTraders/,
    });

    expect(spacetradersButton).toHaveAttribute(
      'href',
      'https://spacetraders.io'
    );
  });
});
