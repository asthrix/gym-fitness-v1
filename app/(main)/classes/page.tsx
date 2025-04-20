"use client";

import { CTA } from "@/components/common/CTA";
import { ClassesGrid } from "@/components/sections/ClassesGrid";
import { PageHero } from "@/components/sections/PageHero";
import { classesData } from "@/data/classes";
import { CLASSES_HERO_IMAGE } from "@/constants/assets";

export default function ClassesPage() {
   return (
      <>
         <PageHero
            title="OUR FITNESS CLASSES"
            subtitle="Discover a wide variety of classes designed to help you reach your fitness goals"
            backgroundImage={CLASSES_HERO_IMAGE}
         />

         <ClassesGrid
            title="All Classes"
            subtitle="Find the perfect class for your fitness journey"
            classes={classesData}
            showFilters={true}
         />

         <CTA
            title="Ready to Get Started?"
            subtitle="Join Gymon today and experience our premium classes with expert trainers."
            primaryButtonText="Join Now"
            primaryButtonLink="/pricing"
            secondaryButtonText="Contact Us"
            secondaryButtonLink="/contact"
         />
      </>
   );
}
