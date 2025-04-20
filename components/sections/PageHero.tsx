"use client";

import Image from "next/image";
import { StaticImageData } from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string | StaticImageData;
  className?: string;
  imageOpacity?: number;
  paddingY?: string;
}

export function PageHero({
  title,
  subtitle,
  backgroundImage,
  className = "",
  imageOpacity = 40,
  paddingY = "py-24 md:py-48",
}: PageHeroProps) {
  return (
    <section className={`relative ${paddingY} overflow-hidden noise-overlay ${className}`}>
      <div className='absolute inset-0 z-0'>
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className={`object-cover opacity-${imageOpacity}`}
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-b from-black/40 to-black/80' />
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <div className='max-w-3xl mx-auto text-center'>
          <h1 className='text-5xl md:text-6xl font-heading mb-6 text-foreground'>
            {title}
          </h1>
          {subtitle && (
            <p className='text-xl md:text-2xl text-muted-foreground'>
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}