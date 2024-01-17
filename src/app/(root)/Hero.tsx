'use client';

import HeroButtonGroup from './HeroButtonGroup';
import HeroTitle from './HeroTitle';
import React from 'react';

const Hero = () => {
  return (
    <section className='container min-h-[calc(100vh-4rem)] py-8 px-6'>
      <HeroTitle
        title='SpaceTraders UI'
        subtitle='An unofficial SpaceTraders UI'
      />

      <HeroButtonGroup />
    </section>
  );
};

export default Hero;
