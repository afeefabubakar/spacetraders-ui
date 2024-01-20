'use client';

import { ILinks } from '@/lib/types';
import Link from 'next/link';
import NavigationDrawer from './NavigationDrawer';
import React from 'react';
import ThemesButton from './ThemesButton';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const links: ILinks[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Get Started',
    href: '/get-started',
  },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className='w-full 2xl:max-w-screen-2xl h-16 p-4 flex justify-between items-center sticky mx-auto'>
      <div className='flex items-center gap-4'>
        <h6 className='text-foreground mr-4'>SpaceTraders UI</h6>
        <nav className='hidden md:flex gap-4'>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-foreground hover:text-accent transition-colors',
                pathname === link.href ? 'text-accent pointer-events-none' : ''
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className='flex items-center gap-4'>
        <ThemesButton />
        <NavigationDrawer links={links} />
      </div>
    </header>
  );
};

export default Header;
