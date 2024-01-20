import { Drawer, DrawerContent, DrawerTrigger } from '../ui/drawer';
import { ILinks } from '@/lib/types';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const NavigationDrawer = ({ links }: { links: ILinks[] }) => {
  const pathname = usePathname();

  return (
    <Drawer>
      <DrawerTrigger className='md:hidden'>
        <Menu aria-label='Open navigation drawer' />
      </DrawerTrigger>
      <DrawerContent className='px-4 pb-4'>
        <nav className='flex flex-col items-center gap-4 mt-4'>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'hover:text-accent',
                link.href === pathname ? 'text-accent pointer-events-none' : ''
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </DrawerContent>
    </Drawer>
  );
};

export default NavigationDrawer;
