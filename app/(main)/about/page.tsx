import Image from "next/image";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { TrainerCard } from "@/components/sections/TrainerCard";
import { FacilitiesGallery } from "@/components/sections/FacilitiesGallery";
import { CTA } from "@/components/common/CTA";
import { trainers } from "@/data/trainers";
import { facilities } from "@/data/facilities";
import { ABOUT_HERO_IMAGE, ABOUT_MISSION_IMAGE } from "@/constants/assets";

export default function AboutPage() {
   return (
      <>
         {/* Hero Section */}
         <section className='relative py-24 md:py-32  overflow-hidden noise-overlay'>
            <div className='absolute inset-0 z-0'>
               <Image
                  src={ABOUT_HERO_IMAGE}
                  alt='About Gymon'
                  fill
                  className='object-cover opacity-40'
                  priority
               />
               <div className='absolute inset-0 bg-gradient-to-b from-black/60 to-black' />
            </div>

            <div className='container mx-auto px-4 relative z-10'>
               <div className='max-w-3xl mx-auto text-center'>
                  <h1 className='text-5xl md:text-6xl font-heading mb-6 text-foreground'>
                     ABOUT GYMON
                  </h1>
                  <p className='text-xl md:text-2xl text-muted-foreground'>
                     Our mission is to inspire and empower individuals to
                     transform their lives through fitness.
                  </p>
               </div>
            </div>
         </section>

         {/* Our Story Section */}
         <SectionContainer className=''>
            <div className='grid md:grid-cols-2 gap-12 items-center'>
               <div>
                  <h2 className='text-3xl md:text-4xl font-heading mb-6 text-foreground'>
                     OUR STORY
                  </h2>
                  <div className='space-y-4 text-muted-foreground'>
                     <p>
                        Founded in 2015, Gymon began with a simple vision: to
                        create a fitness environment that combines premium
                        facilities with expert guidance and a supportive
                        community.
                     </p>
                     <p>
                        What started as a small studio has grown into a
                        comprehensive fitness center that has helped thousands
                        of members achieve their health and wellness goals. Our
                        approach focuses on sustainable fitness practices that
                        lead to long-term results.
                     </p>
                     <p>
                        We believe that fitness is not just about physical
                        transformation but also about mental strength and
                        overall well-being. Our programs are designed to
                        challenge, motivate, and inspire you to become the best
                        version of yourself.
                     </p>
                  </div>
               </div>
               <div className='relative h-[400px] md:h-[500px] rounded-lg overflow-hidden'>
                  <Image
                     src={ABOUT_MISSION_IMAGE}
                     alt='Gymon Story'
                     fill
                     className='object-cover'
                  />
               </div>
            </div>
         </SectionContainer>

         {/* Our Values Section */}
         <SectionContainer className='bg-background'>
            <div className='text-center max-w-3xl mx-auto mb-16'>
               <h2 className='text-3xl md:text-4xl font-heading mb-6 text-foreground'>
                  OUR VALUES
               </h2>
               <p className='text-xl text-muted-foreground'>
                  The core principles that guide everything we do at Gymon
               </p>
            </div>

            <div className='grid md:grid-cols-3 gap-8'>
               <div className='bg-card p-8 rounded-lg border border-border'>
                  <h3 className='text-2xl font-heading mb-4 text-primary'>
                     EXCELLENCE
                  </h3>
                  <p className='text-muted-foreground'>
                     We strive for excellence in our facilities, programs, and
                     service. We continuously improve and innovate to provide
                     the best fitness experience possible.
                  </p>
               </div>
               <div className='bg-card p-8 rounded-lg border border-border'>
                  <h3 className='text-2xl font-heading mb-4 text-primary'>
                     COMMUNITY
                  </h3>
                  <p className='text-muted-foreground'>
                     We foster a supportive and inclusive community where
                     members feel motivated, connected, and empowered to achieve
                     their goals together.
                  </p>
               </div>
               <div className='bg-card p-8 rounded-lg border border-border'>
                  <h3 className='text-2xl font-heading mb-4 text-primary'>
                     INTEGRITY
                  </h3>
                  <p className='text-muted-foreground'>
                     We operate with honesty, transparency, and accountability
                     in all our interactions with members, staff, and partners.
                  </p>
               </div>
            </div>
         </SectionContainer>

         {/* Our Team Section */}
         <SectionContainer className=''>
            <div className='text-center max-w-3xl mx-auto mb-16'>
               <h2 className='text-3xl md:text-4xl font-heading mb-6 text-foreground'>
                  MEET OUR TRAINERS
               </h2>
               <p className='text-xl text-muted-foreground'>
                  Our certified fitness experts are dedicated to helping you
                  achieve your goals
               </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
               {trainers.map((trainer) => (
                  <TrainerCard key={trainer.id} trainer={trainer} />
               ))}
            </div>
         </SectionContainer>

         {/* Facilities Section */}
         <SectionContainer className='bg-background'>
            <div className='text-center max-w-3xl mx-auto mb-16'>
               <h2 className='text-3xl md:text-4xl font-heading mb-6 text-foreground'>
                  OUR FACILITIES
               </h2>
               <p className='text-xl text-muted-foreground'>
                  State-of-the-art equipment and spaces designed for optimal
                  training
               </p>
            </div>

            <FacilitiesGallery facilities={facilities} />
         </SectionContainer>

         {/* CTA Section */}
         <CTA
            title='Ready to Join Our Community?'
            subtitle='Experience the Gymon difference with our premium facilities and expert trainers.'
            primaryButtonText='Start Your Journey'
            primaryButtonLink='/pricing'
         />
      </>
   );
}
