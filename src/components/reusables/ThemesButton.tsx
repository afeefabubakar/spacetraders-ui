import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { useTheme } from 'next-themes';

const ThemesButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {theme === 'light' ? (
        <Button
          variant='outline'
          onClick={() => setTheme('dark')}
          name='theme-toggler'
          className='px-2 py-1'
        >
          <Sun aria-label='Toggle dark mode' />
        </Button>
      ) : (
        <Button
          variant='outline'
          onClick={() => setTheme('light')}
          name='theme-toggler'
          className='px-2 py-1'
        >
          <Moon aria-label='Toggle light mode' />
        </Button>
      )}
    </>
  );
};

export default ThemesButton;
