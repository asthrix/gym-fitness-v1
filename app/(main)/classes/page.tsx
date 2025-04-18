"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { ClassCard } from "@/components/sections/ClassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CTA } from "@/components/common/CTA";
import { Search, Filter } from "lucide-react";
import { classesData } from "@/data/classes";

export default function ClassesPage() {
   const [searchTerm, setSearchTerm] = useState("");
   const [selectedIntensity, setSelectedIntensity] = useState<string>("all");
   const [selectedCategory, setSelectedCategory] = useState<string>("all");

   // Filter classes based on search term, intensity, and category
   const filteredClasses = classesData.filter((gymClass) => {
      const matchesSearch =
         gymClass.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
         gymClass.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesIntensity =
         selectedIntensity === "all" ||
         gymClass.intensity.toLowerCase() === selectedIntensity.toLowerCase();
      const matchesCategory =
         selectedCategory === "all" ||
         gymClass.category.toLowerCase() === selectedCategory.toLowerCase();

      return matchesSearch && matchesIntensity && matchesCategory;
   });

   // Get unique categories
   const categories = Array.from(
      new Set(classesData.map((gymClass) => gymClass.category))
   );

   return (
      <>
         {/* Hero Section */}
         <section className='relative py-24 md:py-32  overflow-hidden noise-overlay'>
            <div className='absolute inset-0 z-0'>
               <Image
                  src='/placeholder.svg?height=1080&width=1920'
                  alt='Fitness Classes'
                  fill
                  className='object-cover opacity-40'
                  priority
               />
               <div className='absolute inset-0 bg-gradient-to-b from-black/60 to-black' />
            </div>

            <div className='container mx-auto px-4 relative z-10'>
               <div className='max-w-3xl mx-auto text-center'>
                  <h1 className='text-5xl md:text-6xl font-heading mb-6 text-foreground'>
                     OUR CLASSES
                  </h1>
                  <p className='text-xl md:text-2xl text-muted-foreground'>
                     Discover a variety of classes designed to help you achieve
                     your fitness goals
                  </p>
               </div>
            </div>
         </section>

         {/* Classes Section */}
         <SectionContainer className=''>
            {/* Search and Filter */}
            <div className='mb-12 space-y-6'>
               <div className='relative'>
                  <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
                  <Input
                     type='text'
                     placeholder='Search classes...'
                     className='pl-10 bg-gray-900 border-gray-700'
                     value={searchTerm}
                     onChange={(e) => setSearchTerm(e.target.value)}
                  />
               </div>

               <div className='flex flex-wrap gap-4'>
                  <div>
                     <h3 className='text-foreground mb-2 flex items-center'>
                        <Filter className='mr-2 h-4 w-4' /> Intensity
                     </h3>
                     <div className='flex flex-wrap gap-2'>
                        <Button
                           variant={
                              selectedIntensity === "all"
                                 ? "default"
                                 : "outline"
                           }
                           size='sm'
                           onClick={() => setSelectedIntensity("all")}
                        >
                           All
                        </Button>
                        <Button
                           variant={
                              selectedIntensity === "beginner"
                                 ? "default"
                                 : "outline"
                           }
                           size='sm'
                           onClick={() => setSelectedIntensity("beginner")}
                        >
                           Beginner
                        </Button>
                        <Button
                           variant={
                              selectedIntensity === "intermediate"
                                 ? "default"
                                 : "outline"
                           }
                           size='sm'
                           onClick={() => setSelectedIntensity("intermediate")}
                        >
                           Intermediate
                        </Button>
                        <Button
                           variant={
                              selectedIntensity === "advanced"
                                 ? "default"
                                 : "outline"
                           }
                           size='sm'
                           onClick={() => setSelectedIntensity("advanced")}
                        >
                           Advanced
                        </Button>
                     </div>
                  </div>

                  <div>
                     <h3 className='text-foreground mb-2 flex items-center'>
                        <Filter className='mr-2 h-4 w-4' /> Category
                     </h3>
                     <div className='flex flex-wrap gap-2'>
                        <Button
                           variant={
                              selectedCategory === "all" ? "default" : "outline"
                           }
                           size='sm'
                           onClick={() => setSelectedCategory("all")}
                        >
                           All
                        </Button>
                        {categories.map((category) => (
                           <Button
                              key={category}
                              variant={
                                 selectedCategory === category.toLowerCase()
                                    ? "default"
                                    : "outline"
                              }
                              size='sm'
                              onClick={() =>
                                 setSelectedCategory(category.toLowerCase())
                              }
                           >
                              {category}
                           </Button>
                        ))}
                     </div>
                  </div>
               </div>
            </div>

            {/* Classes Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
               {filteredClasses.length > 0 ? (
                  filteredClasses.map((gymClass) => (
                     <ClassCard key={gymClass.id} gymClass={gymClass} />
                  ))
               ) : (
                  <div className='col-span-full text-center py-12'>
                     <h3 className='text-2xl font-heading text-foreground mb-2'>
                        No Classes Found
                     </h3>
                     <p className='text-gray-400'>
                        Try adjusting your search or filters to find what you're
                        looking for.
                     </p>
                  </div>
               )}
            </div>
         </SectionContainer>

         {/* CTA Section */}
         <CTA
            title='Ready to Start Your Fitness Journey?'
            subtitle='Join Gymon today and get access to all our premium classes and facilities.'
            primaryButtonText='Become a Member'
            primaryButtonLink='/pricing'
         />
      </>
   );
}
