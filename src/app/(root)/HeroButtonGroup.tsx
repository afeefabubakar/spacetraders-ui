import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { cn } from '@/lib/utils';

const HeroButtonGroup = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        'flex flex-col md:flex-row items-center gap-2 mt-2',
        className
      )}
    >
      <Button asChild className='w-full md:w-40'>
        <Link href='/get-started' title='Link to get-started'>
          Get started
        </Link>
      </Button>
      <Button variant='outline' className='w-full md:w-40' asChild>
        <a
          href='https://spacetraders.io'
          target='_blank'
          title='Link to SpaceTraders.io'
        >
          SpaceTraders{' '}
          <ExternalLink
            size={16}
            className='ml-2'
            aria-label='External link icon'
          />
        </a>
      </Button>
    </div>
  );
};

export default HeroButtonGroup;
