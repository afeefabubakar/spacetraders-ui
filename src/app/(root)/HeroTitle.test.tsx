import { render, screen } from '@testing-library/react';
import HeroTitle from '@/app/(root)/HeroTitle';

describe('HeroTitle', () => {
  it('should render with correct title and subtitle', () => {
    render(<HeroTitle title='Test title' subtitle='Test subtitle' />);

    const title = screen.getByText(/^Test title$/);
    const subtitle = screen.getByText(/^Test subtitle$/);

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  });
});
