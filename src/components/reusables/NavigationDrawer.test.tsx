import { render, screen } from '@testing-library/react';
import { ILinks } from '@/lib/types';
import NavigationDrawer from './NavigationDrawer';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';

const resizeWindow = (x: number, y: number) => {
  window.innerWidth = x;
  window.innerHeight = y;
  window.dispatchEvent(new Event('resize'));
};

describe('NavigationDrawer component', () => {
  window.scrollTo = jest.fn();
  beforeAll(() => {
    resizeWindow(360, 760);
  });

  it('should render after clicking the button', async () => {
    const user = userEvent.setup();
    render(<NavigationDrawer links={[]} />);

    const openNavigationDrawer = screen.getByRole('button', {
      name: /^Open navigation drawer$/i,
    });

    await act(async () => {
      await user.click(openNavigationDrawer);
    });
    const navigationDrawer = screen.getByRole('navigation');

    expect(navigationDrawer).toBeInTheDocument();
  });

  it('should have a button to open the drawer', () => {
    render(<NavigationDrawer links={[]} />);

    const button = screen.getByRole('button', {
      name: /^Open navigation drawer$/i,
    });

    expect(button).toBeInTheDocument();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });
});

describe('NavigationDrawer links', () => {
  it('should render links', async () => {
    const links: ILinks[] = [
      {
        label: 'Test 1',
        href: '/',
      },
      {
        label: 'Test 2',
        href: '/test-2',
      },
    ];
    const user = userEvent.setup();
    render(<NavigationDrawer links={links} />);

    const openNavigationDrawer = screen.getByRole('button', {
      name: /^Open navigation drawer$/i,
    });

    await act(async () => {
      await user.click(openNavigationDrawer);
    });
    const linksElement = screen.getAllByRole('link');

    expect(linksElement).toHaveLength(2);
  });
});
