"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { HERO_BACKGROUND_IMAGE, HERO_VIDEO_MP4 } from "@/constants/assets";
import { StaticImageData } from "next/image";

interface HeroProps {
   title: string;
   subtitle: string;
   ctaText: string;
   ctaLink: string;
   videoSrc?: string;
   backgroundImage?: string | StaticImageData;
}

export function Hero({
   title = "Transform your life with Fitness",
   subtitle = "Join us to achieve your fitness goals with our state-of-the-art facilities, expert trainers, and supportive community.",
   ctaText = "Join now",
   ctaLink = "/pricing",
   videoSrc = HERO_VIDEO_MP4,
   backgroundImage = HERO_BACKGROUND_IMAGE,
}: HeroProps) {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });
   const [hasLoaded, setHasLoaded] = useState(false);

   useEffect(() => {
      setHasLoaded(true);
   }, []);

   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.2,
         },
      },
   };

   const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
         opacity: 1,
         y: 0,
         transition: {
            duration: 0.8,
            ease: "easeOut",
         },
      },
   };

   return (
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay'>
         {/* Video or Image Background */}
         {videoSrc ? (
            <div className='absolute inset-0 w-full h-full'>
               <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className='absolute inset-0 w-full h-full object-cover'
                  poster={
                     typeof backgroundImage === "string"
                        ? backgroundImage
                        : undefined
                  }
               >
                  <source src={videoSrc} type='video/mp4' />
               </video>
            </div>
         ) : (
            <div className='absolute inset-0 w-full h-full'>
               {typeof backgroundImage === "string" ? (
                  <div
                     className='absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat'
                     style={{
                        backgroundImage: `url('${backgroundImage}')`,
                     }}
                  />
               ) : (
                  <Image
                     src={backgroundImage}
                     alt='Background'
                     fill
                     sizes='100vw'
                     className='object-cover'
                     priority
                     quality={90}
                  />
               )}
            </div>
         )}

         {/* Gradient Overlay */}
         <div className='absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-[1]' />

         {/* Content */}
         <div className='container mx-auto px-4 z-10 py-20 md:py-0 relative '>
            <motion.div
               ref={ref}
               className='max-w-3xl mx-auto text-center'
               variants={containerVariants}
               initial='hidden'
               animate={isInView && hasLoaded ? "visible" : "hidden"}
            >
               <motion.h1
                  className='text-fluid-heading font-heading mb-6 text-foreground'
                  variants={itemVariants}
               >
                  {title}
               </motion.h1>

               <motion.p
                  className='text-xl md:text-2xl mb-8 text-gray-200'
                  variants={itemVariants}
               >
                  {subtitle}
               </motion.p>

               <motion.div variants={itemVariants}>
                  <Button asChild size='lg' className='text-lg px-8 py-6'>
                     <Link href={ctaLink}>{ctaText}</Link>
                  </Button>
               </motion.div>
            </motion.div>
         </div>
      </section>
   );
}
