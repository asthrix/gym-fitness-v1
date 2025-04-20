import Image from "next/image";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { TrainerCard } from "@/components/sections/TrainerCard";
import { FacilitiesGallery } from "@/components/sections/FacilitiesGallery";
import { CTA } from "@/components/common/CTA";
import { PageHero } from "@/components/sections/PageHero";
import { trainers } from "@/data/trainers";
import { facilities } from "@/data/facilities";
import { ABOUT_HERO_IMAGE } from "@/constants/assets";
import { Images } from "@/assets/images";

export default function AboutPage() {
   return (
      <>
         {/* Hero Section */}
         <PageHero
            title="ABOUT GYMON"
            subtitle="Our mission is to inspire and empower individuals to transform their lives through fitness."
            backgroundImage={ABOUT_HERO_IMAGE}
         />

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
               <div className='flex justify-center items-center'>
                  <Image
                     src={Images.about.story}
                     alt='Our Story'
                     width={400}
                     height={400}
                     className='object-contain'
                  />
               </div>
            </div>
         </SectionContainer>

         {/* Our Mission & Vision Section */}
         <SectionContainer className='bg-muted/30'>
            <div className='grid md:grid-cols-2 gap-12'>
               <div className='bg-card p-8 rounded-lg border border-border flex flex-col items-center'>
                  <Image
                     src={Images.about.mission}
                     alt='Our Mission'
                     width={60}
                     height={60}
                     className='mb-6'
                  />
                  <h3 className='text-2xl font-heading mb-4 text-primary text-center'>
                     OUR MISSION
                  </h3>
                  <p className='text-muted-foreground text-center'>
                     To inspire and empower individuals to transform their lives
                     through fitness by providing exceptional facilities,
                     professional guidance, and a supportive community that
                     fosters lasting physical and mental well-being.
                  </p>
               </div>
               <div className='bg-card p-8 rounded-lg border border-border flex flex-col items-center'>
                  <Image
                     src={Images.about.vision}
                     alt='Our Vision'
                     width={60}
                     height={60}
                     className='mb-6'
                  />
                  <h3 className='text-2xl font-heading mb-4 text-primary text-center'>
                     OUR VISION
                  </h3>
                  <p className='text-muted-foreground text-center'>
                     To be the leading fitness destination that transforms
                     lives, builds stronger communities, and sets new standards
                     in the industry through innovation, excellence, and a
                     genuine commitment to our members' success.
                  </p>
               </div>
            </div>
         </SectionContainer>

         {/* Our Values Section */}
         <SectionContainer className=''>
            <div className='text-center max-w-3xl mx-auto mb-16'>
               <h2 className='text-3xl md:text-4xl font-heading mb-6 text-foreground'>
                  OUR VALUES
               </h2>
               <p className='text-xl text-muted-foreground'>
                  The core principles that guide everything we do at Gymon
               </p>
            </div>

            <div className='grid md:grid-cols-3 gap-8'>
               <div className='bg-card p-8 rounded-lg border border-border flex flex-col items-center'>
                  <Image
                     src={Images.about.excellence}
                     alt='Excellence'
                     width={80}
                     height={80}
                     className='mb-4'
                  />
                  <h3 className='text-2xl font-heading mb-4 text-primary'>
                     EXCELLENCE
                  </h3>
                  <p className='text-muted-foreground text-center'>
                     We strive for excellence in our facilities, programs, and
                     service. We continuously improve and innovate to provide
                     the best fitness experience possible.
                  </p>
               </div>
               <div className='bg-card p-8 rounded-lg border border-border flex flex-col items-center'>
                  <Image
                     src={Images.about.inclusivity}
                     alt='Inclusivity'
                     width={80}
                     height={80}
                     className='mb-4'
                  />
                  <h3 className='text-2xl font-heading mb-4 text-primary'>
                     INCLUSIVITY
                  </h3>
                  <p className='text-muted-foreground text-center'>
                     We foster a supportive and inclusive community where
                     members feel motivated, connected, and empowered to achieve
                     their goals together, regardless of fitness level or
                     background.
                  </p>
               </div>
               <div className='bg-card p-8 rounded-lg border border-border flex flex-col items-center'>
                  <Image
                     src={Images.about.integrity}
                     alt='Integrity'
                     width={80}
                     height={80}
                     className='mb-4'
                  />
                  <h3 className='text-2xl font-heading mb-4 text-primary'>
                     INTEGRITY
                  </h3>
                  <p className='text-muted-foreground text-center'>
                     We operate with honesty, transparency, and accountability
                     in all our interactions with members, staff, and partners.
                  </p>
               </div>
            </div>
         </SectionContainer>

         {/* Our Locations Section */}
         <SectionContainer className='bg-muted/30'>
            <div className='text-center max-w-3xl mx-auto mb-16'>
               <h2 className='text-3xl md:text-4xl font-heading mb-6 text-foreground'>
                  OUR LOCATIONS
               </h2>
               <p className='text-xl text-muted-foreground'>
                  Find a Gymon fitness center near you
               </p>
            </div>

            <div className='flex justify-center'>
               <div className='bg-card p-8 rounded-lg border border-border max-w-2xl w-full'>
                  <div className='flex flex-col md:flex-row gap-6 items-start'>
                     <Image
                        src={Images.about.location}
                        alt='Gym Locations'
                        width={60}
                        height={60}
                        className='object-contain'
                     />
                     <div>
                        <h3 className='text-2xl font-heading mb-4 text-primary'>
                           MAIN FACILITY
                        </h3>
                        <p className='text-muted-foreground'>
                           123 Fitness Avenue
                           <br />
                           Cityville, ST 12345
                           <br />
                           Open 24/7
                           <br />
                           (555) 123-4567
                        </p>
                        <div className='mt-4'>
                           <a
                              href='https://maps.google.com'
                              target='_blank'
                              rel='noopener noreferrer'
                              className='text-primary hover:underline'
                           >
                              Get Directions →
                           </a>
                        </div>
                     </div>
                  </div>
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
         <SectionContainer className='bg-muted/30'>
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
