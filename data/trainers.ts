import type { Trainer } from "@/types";
import {
   TRAINER_ALEX_IMAGE,
   TRAINER_SARAH_IMAGE,
   TRAINER_MICHAEL_IMAGE,
   TRAINER_EMMA_IMAGE,
} from "@/constants/assets";

export const trainers: Trainer[] = [
   {
      id: "1",
      name: "Alex Johnson",
      specialty: "Strength & Conditioning",
      bio: "Alex has over 10 years of experience in strength training and holds multiple certifications in fitness and nutrition.",
      image: TRAINER_ALEX_IMAGE,
      socialLinks: {
         instagram: "#",
         twitter: "#",
         facebook: "#",
      },
   },
   {
      id: "2",
      name: "Sarah Miller",
      specialty: "HIIT & Functional Training",
      bio: "Former professional athlete with a passion for helping clients achieve their fitness goals through high-intensity workouts.",
      image: TRAINER_SARAH_IMAGE,
      socialLinks: {
         instagram: "#",
         twitter: "#",
         facebook: "#",
      },
   },
   {
      id: "3",
      name: "Michael Chen",
      specialty: "Yoga & Flexibility",
      bio: "Certified yoga instructor with a holistic approach to fitness, focusing on mind-body connection and proper technique.",
      image: TRAINER_MICHAEL_IMAGE,
      socialLinks: {
         instagram: "#",
         twitter: "#",
         facebook: "#",
      },
   },
   {
      id: "4",
      name: "Emma Rodriguez",
      specialty: "Cardio & Weight Loss",
      bio: "Specializes in designing effective weight loss programs and motivating clients to push beyond their limits.",
      image: TRAINER_EMMA_IMAGE,
      socialLinks: {
         instagram: "#",
         twitter: "#",
         facebook: "#",
      },
   },
];
