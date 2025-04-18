"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { HERO_BACKGROUND_IMAGE, HERO_VIDEO_MP4 } from "@/constants/assets";

interface HeroProps {
   title: string;
   subtitle: string;
   ctaText: string;
   ctaLink: string;
   videoSrc?: string;
}

export function Hero({
   title = "Transform your life with Fitness",
   subtitle = "Join us to achieve your fitness goals with our state-of-the-art facilities, expert trainers, and supportive community.",
   ctaText = "Join now",
   ctaLink = "/pricing",
   videoSrc = HERO_VIDEO_MP4,
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
         {/* Video Background */}
         {videoSrc ? (
            <video
               autoPlay
               muted
               loop
               playsInline
               className='video-background'
               poster={HERO_BACKGROUND_IMAGE}
            >
               <source src={videoSrc} type='video/mp4' />
            </video>
         ) : (
            <div
               className='absolute inset-0 bg-cover bg-center bg-no-repeat'
               style={{
                  backgroundImage: `url('${HERO_BACKGROUND_IMAGE}')`,
               }}
            />
         )}

         {/* Gradient Overlay */}
         <div className='gradient-overlay' />

         {/* Content */}
         <div className='container mx-auto px-4 z-10 py-20 md:py-0'>
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
