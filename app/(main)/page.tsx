import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { ClassesGrid } from "@/components/sections/ClassesGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/common/CTA";
import { featuredClasses } from "@/data/classes";
import { testimonials } from "@/data/testimonials";
import { HERO_VIDEO_MP4, HERO_BACKGROUND_IMAGE } from "@/constants/assets";

export default function Home() {
   return (
      <>
         <Hero
            title='Transform your life with Fitness'
            subtitle='Join us to achieve your fitness goals with our state-of-the-art facilities, expert trainers, and supportive community.'
            ctaText='Join now'
            ctaLink='/pricing'
            videoSrc={HERO_VIDEO_MP4}
            backgroundImage={HERO_BACKGROUND_IMAGE}
         />

         <Features />

         <ClassesGrid
            title='Featured Classes'
            subtitle='Discover our most popular fitness classes'
            classes={featuredClasses}
         />

         <Testimonials testimonials={testimonials} />

         <CTA />
      </>
   );
}
