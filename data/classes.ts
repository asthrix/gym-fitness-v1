import type { GymClass } from "@/types";
import {
   CLASS_HIIT_IMAGE,
   CLASS_STRENGTH_IMAGE,
   CLASS_YOGA_IMAGE,
   CLASS_SPIN_IMAGE,
   CLASS_BOXING_IMAGE,
   CLASS_PILATES_IMAGE,
   CLASS_FUNCTIONAL_IMAGE,
   CLASS_CROSSFIT_IMAGE,
   TRAINER_ALEX_IMAGE,
   TRAINER_SARAH_IMAGE,
   TRAINER_MICHAEL_IMAGE,
   TRAINER_EMMA_IMAGE,
} from "@/constants/assets";

export const classesData: GymClass[] = [
   {
      id: "hiit-training",
      title: "HIIT Training",
      description:
         "High-intensity interval training that alternates between intense bursts of activity and fixed periods of less-intense activity or rest. Perfect for burning calories and improving cardiovascular health.",
      image: CLASS_HIIT_IMAGE,
      duration: "45 min",
      intensity: "Advanced",
      category: "Cardio",
      schedule: [
         { day: "Monday", time: "6:00 AM" },
         { day: "Wednesday", time: "6:00 AM" },
         { day: "Friday", time: "6:00 AM" },
      ],
      trainer: {
         id: "1",
         name: "Alex Johnson",
         image: TRAINER_ALEX_IMAGE,
      },
      benefits: [
         "Burns calories and fat in a short amount of time",
         "Improves cardiovascular health",
         "Increases metabolism for hours after workout",
         "No equipment necessary - use your own body weight",
      ],
      requirements: [
         "Water bottle",
         "Towel",
         "Athletic shoes",
         "Comfortable workout clothes",
      ],
   },
   {
      id: "strength-conditioning",
      title: "Strength & Conditioning",
      description:
         "Build muscle and improve your overall fitness with our comprehensive strength and conditioning program. Focus on proper form and progressive overload for maximum results.",
      image: CLASS_STRENGTH_IMAGE,
      duration: "60 min",
      intensity: "Intermediate",
      category: "Strength",
      schedule: [
         { day: "Tuesday", time: "7:00 AM" },
         { day: "Thursday", time: "7:00 AM" },
         { day: "Saturday", time: "9:00 AM" },
      ],
      trainer: {
         id: "2",
         name: "Sarah Miller",
         image: TRAINER_SARAH_IMAGE,
      },
      benefits: [
         "Builds lean muscle mass",
         "Increases strength and power",
         "Improves bone density",
         "Enhances overall functional fitness",
      ],
      requirements: [
         "Water bottle",
         "Towel",
         "Athletic shoes",
         "Comfortable workout clothes",
      ],
   },
   {
      id: "yoga-flow",
      title: "Yoga Flow",
      description:
         "A dynamic practice that connects breath with movement through a sequence of postures for improved flexibility and mindfulness. Suitable for all levels with modifications provided.",
      image: CLASS_YOGA_IMAGE,
      duration: "50 min",
      intensity: "Beginner",
      category: "Mind & Body",
      schedule: [
         { day: "Monday", time: "8:00 AM" },
         { day: "Wednesday", time: "8:00 AM" },
         { day: "Friday", time: "8:00 AM" },
      ],
      trainer: {
         id: "3",
         name: "Michael Chen",
         image: TRAINER_MICHAEL_IMAGE,
      },
      benefits: [
         "Improves flexibility and joint mobility",
         "Reduces stress and anxiety",
         "Enhances mind-body connection",
         "Builds core strength and stability",
      ],
      requirements: [
         "Yoga mat (can be provided)",
         "Water bottle",
         "Comfortable, stretchy clothing",
         "Optional: yoga blocks and straps",
      ],
   },
   {
      id: "spin-class",
      title: "Spin Class",
      description:
         "High-energy indoor cycling workout that combines rhythm and visualization to create an engaging and challenging experience. Burn calories while improving endurance.",
      image: CLASS_SPIN_IMAGE,
      duration: "45 min",
      intensity: "Intermediate",
      category: "Cardio",
      schedule: [
         { day: "Tuesday", time: "6:00 PM" },
         { day: "Thursday", time: "6:00 PM" },
         { day: "Saturday", time: "10:00 AM" },
      ],
      trainer: {
         id: "4",
         name: "Emma Rodriguez",
         image: TRAINER_EMMA_IMAGE,
      },
      benefits: [
         "Burns calories and improves cardiovascular health",
         "Low impact on joints",
         "Builds lower body strength",
         "Improves endurance and stamina",
      ],
      requirements: [
         "Water bottle",
         "Towel",
         "Athletic shoes",
         "Comfortable workout clothes",
      ],
   },
   {
      id: "boxing-fundamentals",
      title: "Boxing Fundamentals",
      description:
         "Learn the basics of boxing technique while getting a full-body workout. Improve coordination, strength, and cardiovascular fitness through boxing drills and combinations.",
      image: CLASS_BOXING_IMAGE,
      duration: "60 min",
      intensity: "Intermediate",
      category: "Combat",
      schedule: [
         { day: "Monday", time: "7:00 PM" },
         { day: "Wednesday", time: "7:00 PM" },
         { day: "Friday", time: "7:00 PM" },
      ],
      trainer: {
         id: "1",
         name: "Alex Johnson",
         image: TRAINER_ALEX_IMAGE,
      },
      benefits: [
         "Improves cardiovascular fitness",
         "Builds full-body strength",
         "Enhances coordination and reflexes",
         "Reduces stress and builds confidence",
      ],
      requirements: [
         "Hand wraps",
         "Boxing gloves (can be provided)",
         "Water bottle",
         "Comfortable workout clothes",
      ],
   },
   {
      id: "pilates-core",
      title: "Pilates Core",
      description:
         "Focus on building core strength, improving posture, and increasing flexibility through controlled movements and proper breathing techniques. Great for rehabilitation and injury prevention.",
      image: CLASS_PILATES_IMAGE,
      duration: "50 min",
      intensity: "Beginner",
      category: "Mind & Body",
      schedule: [
         { day: "Tuesday", time: "9:00 AM" },
         { day: "Thursday", time: "9:00 AM" },
         { day: "Saturday", time: "8:00 AM" },
      ],
      trainer: {
         id: "3",
         name: "Michael Chen",
         image: TRAINER_MICHAEL_IMAGE,
      },
      benefits: [
         "Strengthens core muscles",
         "Improves posture and alignment",
         "Increases flexibility and mobility",
         "Enhances body awareness and control",
      ],
      requirements: [
         "Pilates mat (can be provided)",
         "Water bottle",
         "Comfortable, form-fitting clothes",
      ],
   },
   {
      id: "functional-training",
      title: "Functional Training",
      description:
         "Train your body for real-life movements and activities with exercises that simulate everyday actions. Improve balance, coordination, and overall fitness.",
      image: CLASS_FUNCTIONAL_IMAGE,
      duration: "55 min",
      intensity: "Intermediate",
      category: "Strength",
      schedule: [
         { day: "Monday", time: "12:00 PM" },
         { day: "Wednesday", time: "12:00 PM" },
         { day: "Friday", time: "12:00 PM" },
      ],
      trainer: {
         id: "2",
         name: "Sarah Miller",
         image: TRAINER_SARAH_IMAGE,
      },
      benefits: [
         "Improves everyday movement patterns",
         "Enhances balance and stability",
         "Reduces risk of injury",
         "Increases overall strength and mobility",
      ],
      requirements: [
         "Water bottle",
         "Towel",
         "Athletic shoes",
         "Comfortable workout clothes",
      ],
   },
   {
      id: "crossfit-inspired",
      title: "CrossFit Inspired",
      description:
         "High-intensity functional movements that combine elements of gymnastics, weightlifting, and cardio. Challenge yourself with varied workouts that improve overall fitness.",
      image: CLASS_CROSSFIT_IMAGE,
      duration: "60 min",
      intensity: "Advanced",
      category: "Strength",
      schedule: [
         { day: "Tuesday", time: "5:30 PM" },
         { day: "Thursday", time: "5:30 PM" },
         { day: "Saturday", time: "11:00 AM" },
      ],
      trainer: {
         id: "1",
         name: "Alex Johnson",
         image: TRAINER_ALEX_IMAGE,
      },
      benefits: [
         "Builds strength and power",
         "Improves cardiovascular endurance",
         "Enhances athletic performance",
         "Develops mental toughness",
      ],
      requirements: [
         "Water bottle",
         "Towel",
         "Athletic shoes",
         "Comfortable workout clothes",
         "Weightlifting gloves (optional)",
      ],
   },
];

export const featuredClasses = classesData.slice(0, 3);
