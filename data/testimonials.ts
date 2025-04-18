import type { Testimonial } from "@/types";
import {
   TESTIMONIAL_DEFAULT_IMAGE,
   PLACEHOLDER_AVATAR,
} from "@/constants/assets";

export const testimonials: Testimonial[] = [
   {
      id: "1",
      quote: "Joining Gymon was the best decision I've made for my health. The trainers are knowledgeable and the community is so supportive!",
      name: "Jessica Williams",
      title: "Member since 2021",
      image: TESTIMONIAL_DEFAULT_IMAGE,
   },
   {
      id: "2",
      quote: "I've tried many gyms before, but none compare to the equipment quality and class variety at Gymon. It's truly a premium fitness experience.",
      name: "David Thompson",
      title: "Member since 2020",
      image: TESTIMONIAL_DEFAULT_IMAGE,
   },
   {
      id: "3",
      quote: "The personal training program helped me achieve results I never thought possible. The trainers push you while keeping your goals in mind.",
      name: "Emma Rodriguez",
      title: "Member since 2022",
      image: TESTIMONIAL_DEFAULT_IMAGE,
   },
];
