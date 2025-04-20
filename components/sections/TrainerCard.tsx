"use client";

import Image from "next/image";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { Trainer } from "@/types";

interface TrainerCardProps {
   trainer: Trainer;
   className?: string;
}

export function TrainerCard({ trainer, className }: TrainerCardProps) {
   return (
      <div className={`bg-card rounded-lg overflow-hidden group ${className}`}>
         {/* Trainer Image with Overlay */}
         <div className='relative h-80 overflow-hidden'>
            <Image
               src={trainer.image}
               alt={`${trainer.name}, ${trainer.role}`}
               fill
               className='object-cover object-center z-0'
               sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            />
            <div className='absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 z-10'>
               <p className='text-foreground text-center'>{trainer.bio}</p>
            </div>
         </div>

         {/* Trainer Info */}
         <div className='p-6'>
            <h3 className='text-xl font-heading text-foreground'>
               {trainer.name}
            </h3>
            <p className='text-primary mb-4'>{trainer.role}</p>

            {/* Social Links */}
            <div className='flex gap-4'>
               {trainer.socialLinks.instagram && (
                  <a
                     href={trainer.socialLinks.instagram}
                     target='_blank'
                     rel='noopener noreferrer'
                     className='text-muted-foreground hover:text-primary transition-colors'
                  >
                     <Instagram size={20} />
                  </a>
               )}
               {trainer.socialLinks.facebook && (
                  <a
                     href={trainer.socialLinks.facebook}
                     target='_blank'
                     rel='noopener noreferrer'
                     className='text-muted-foreground hover:text-primary transition-colors'
                  >
                     <Facebook size={20} />
                  </a>
               )}
               {trainer.socialLinks.twitter && (
                  <a
                     href={trainer.socialLinks.twitter}
                     target='_blank'
                     rel='noopener noreferrer'
                     className='text-muted-foreground hover:text-primary transition-colors'
                  >
                     <Twitter size={20} />
                  </a>
               )}
            </div>
         </div>
      </div>
   );
}
