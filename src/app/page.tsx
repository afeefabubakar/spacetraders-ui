import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className=''>
      <section className='container py-4'>
        <div className='text-center'>
          <h1 className='my-4'>Welcome agent!</h1>
          <p>Let&apos;s start building your trading empire</p>
        </div>

        <Button>Get started</Button>
      </section>
    </main>
  );
}
