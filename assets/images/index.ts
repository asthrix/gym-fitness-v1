// Import stock images
import heroImage from "./stock-images/anastase-maragos-fG0p4Qh_aWI-unsplash.jpg";
import powerLiftingClass from "./stock-images/anastase-maragos-7kEpUPB8vNk-unsplash.jpg";
import yogaClass from "./stock-images/marea-wellness-rzdniLB3lt0-unsplash.jpg";
import hiitClass from "./stock-images/gabin-vallet-J154nEkpzlQ-unsplash.jpg";
import pilatesClass from "./stock-images/max-harlynking-nUe5mdHP6j8-unsplash.jpg";
import crossfitClass from "./stock-images/victor-freitas-WvDYdXDzkhs-unsplash.jpg";
import gymGallery1 from "./stock-images/danielle-cerullo-CQfNt66ttZM-unsplash.jpg";
import gymGallery2 from "./stock-images/karsten-winegeart-0Wra5YYVQJE-unsplash.jpg";
import gymGallery3 from "./stock-images/sule-makaroglu-r3C6ghRxDxc-unsplash.jpg";

// Import trainer images
import trainerJohn from "./stock-images/john-fornander-TAZoUmDqzXk-unsplash.jpg";
import trainerSarah from "./stock-images/julia-rekamie-Z72YujnOrlY-unsplash.jpg";
import trainerEmma from "./stock-images/spencer-davis-0ShTs8iPY28-unsplash.jpg";
import trainerMichael from "./stock-images/dollar-gill-f9W9svqHpSU-unsplash.jpg";

// Import equipment images
import equipmentImage from "./stock-images/brett-jordan-YyEJRipYDXY-unsplash.jpg";
import nutritionImage from "./stock-images/kobe-kian-clata-NAhfqSQZc4Q-unsplash.jpg";

// Home page SVGs
import dumbbellSvg from "./home/dumbell.svg";
import choosePlanSvg from "./home/choose-plan.svg";
import fitnessJourneySvg from "./home/fitness-journey.svg";
import ratingsSvg from "./home/ratings.svg";
import signupSvg from "./home/signup.svg";

// About page SVGs
import ourStorySvg from "./about-us/our-story.svg";
import ourMissionSvg from "./about-us/our-mission.svg";
import ourVisionSvg from "./about-us/our-vision.svg";
import integritySvg from "./about-us/integrity.svg";
import excellenceSvg from "./about-us/excellence.svg";
import inclusivitySvg from "./about-us/inclusivity.svg";
import locationSvg from "./about-us/location.svg";

// Export all images
export const Images = {
   // Hero images
   hero: heroImage,

   // Class images
   classes: {
      powerLifting: powerLiftingClass,
      yoga: yogaClass,
      hiit: hiitClass,
      pilates: pilatesClass,
      crossfit: crossfitClass,
   },

   // Trainer images
   trainers: {
      john: trainerJohn,
      sarah: trainerSarah,
      michael: trainerMichael,
      emma: trainerEmma,
   },

   // Gallery images
   gallery: [gymGallery1, gymGallery2, gymGallery3],

   // Equipment and nutrition
   equipment: equipmentImage,
   nutrition: nutritionImage,

   // SVG icons and illustrations
   icons: {
      dumbbell: dumbbellSvg,
      choosePlan: choosePlanSvg,
      fitnessJourney: fitnessJourneySvg,
      ratings: ratingsSvg,
      signup: signupSvg,
   },

   // About page SVGs
   about: {
      story: ourStorySvg,
      mission: ourMissionSvg,
      vision: ourVisionSvg,
      integrity: integritySvg,
      excellence: excellenceSvg,
      inclusivity: inclusivitySvg,
      location: locationSvg,
   },
};
