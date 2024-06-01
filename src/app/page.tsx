import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className=''>
      <section className='container py-4'>
        <div className='text-center mb-4'>
          <h1 className='my-4'>Welcome agent!</h1>
          <p>Let&apos;s start building your trading empire</p>
        </div>

        <div className='space-y-2'>
          <Button
            asChild
            className='w-full'
          >
            <Link href={'/register'}>Get started</Link>
          </Button>
          <Button
            asChild
            variant={'outline'}
            className='w-full'
          >
            <Link href={'/login'}>...or log in</Link>
          </Button>
          <Button
            asChild
            variant={'link'}
            className='w-full'
          >
            <Link
              href='https://spacetraders.io'
              target='_blank'
            >
              Visit SpaceTraders{' '}
              <ExternalLink
                className='ml-1'
                size={16}
              />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
