import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {
  it('should render', () => {
    render(<Header />);

    const header = screen.getByRole('banner');

    expect(header).toBeInTheDocument();
  });

  it('should have a theme toggler', () => {
    render(<Header />);

    const themeToggler = screen.getByRole('button', {
      name: /^(Toggle) \w+ (mode)$/i,
    });

    expect(themeToggler).toBeInTheDocument();
  });

  it('should render links', () => {
    render(<Header />);

    const links = screen.getAllByRole('link');

    expect(links).toHaveLength(2);
  });
});
