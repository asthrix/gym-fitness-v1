import { StaticImageData } from "next/image";

export interface SocialLinks {
   instagram?: string;
   twitter?: string;
   facebook?: string;
}

// Trainer Types
export interface Trainer {
   id: string;
   name: string;
   specialty: string;
   bio: string;
   image: string | StaticImageData;
   role?: string;
   socialLinks: SocialLinks;
}

// Class Types
export interface ClassScheduleItem {
   day: string;
   time: string;
}

export interface GymClass {
   id: string;
   title: string;
   description: string;
   image: string | StaticImageData;
   duration: string;
   intensity: "Beginner" | "Intermediate" | "Advanced";
   category: string;
   schedule: ClassScheduleItem[];
   trainer: {
      id: string;
      name: string;
      image: string | StaticImageData;
   };
   benefits?: string[];
   requirements?: string[];
}

// Testimonial Types
export interface Testimonial {
   id: string;
   quote: string;
   name: string;
   title: string;
   image: string | StaticImageData;
}

// Facility Types
export interface Facility {
   id: string;
   title: string;
   image: string | StaticImageData;
}

// Pricing Types
export interface PricingPlan {
   id: string;
   name: string;
   price: string;
   period: string;
   description: string;
   features: string[];
   popular: boolean;
   buttonText: string;
   buttonLink: string;
   savings?: string;
}

// Booking Types
export interface BookedClass {
   id: string;
   title: string;
   date: Date;
   duration: string;
   trainer: string;
   location: string;
}

// User Types
export interface UserProfile {
   id: string;
   firstName: string;
   lastName: string;
   email: string;
   phone: string;
   image?: string;
   membershipPlan: string;
   membershipCycle: string;
   nextBillingDate: string;
}
