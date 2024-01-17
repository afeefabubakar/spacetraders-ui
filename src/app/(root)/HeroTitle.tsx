'use client';

import React from 'react';
import { cn } from '@/lib/utils';

const HeroTitle = ({
  className,
  title,
  titleStyle,
  subtitle,
  subtitleStyle,
}: {
  className?: string;
  title: string;
  titleStyle?: string;
  subtitle?: string;
  subtitleStyle?: string;
}) => {
  return (
    <div className={cn('text-center md:text-left md:space-y-3', className)}>
      <h1 className={titleStyle}>{title}</h1>
      <p className={subtitleStyle}>{subtitle}</p>
    </div>
  );
};

export default HeroTitle;
