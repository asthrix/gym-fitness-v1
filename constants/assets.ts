/**
 * GYMON Assets
 *
 * This file centralizes all asset paths used throughout the application.
 * Follow the naming convention: CATEGORY_DESCRIPTOR_TYPE
 *
 * Example: HERO_BACKGROUND_IMAGE, LOGO_PRIMARY_SVG, etc.
 */

import { Images } from "@/assets/images";
import { VideoSrc } from "@/assets/Video";

// Logo assets
export const LOGO_PRIMARY_SVG = "/logo/logo-primary.svg";
export const LOGO_WHITE_SVG = "/logo/logo-white.svg";
export const LOGO_SMALL_SVG = "/logo/logo-small.svg";

// Hero section assets - using imported images and videos
export const HERO_BACKGROUND_IMAGE = Images.hero;
export const HERO_VIDEO_MP4 = VideoSrc.hero;

// Class videos
export const CLASS_DEFAULT_VIDEO = VideoSrc.classes;
export const CLASS_TRAINING_VIDEO = VideoSrc.training;
export const CLASS_WORKOUT_VIDEO = VideoSrc.workout;
export const CLASS_FITNESS_VIDEO = VideoSrc.fitness;

// Class images - using imported images
export const CLASS_DEFAULT_IMAGE = Images.classes.hiit; // Using HIIT as default
export const CLASS_HIIT_IMAGE = Images.classes.hiit;
export const CLASS_STRENGTH_IMAGE = Images.classes.powerLifting;
export const CLASS_YOGA_IMAGE = Images.classes.yoga;
export const CLASS_SPIN_IMAGE = Images.classes.hiit; // Reusing HIIT for spin
export const CLASS_BOXING_IMAGE = Images.classes.crossfit; // Reusing crossfit for boxing
export const CLASS_PILATES_IMAGE = Images.classes.pilates;
export const CLASS_FUNCTIONAL_IMAGE = Images.classes.powerLifting; // Reusing powerLifting for functional
export const CLASS_CROSSFIT_IMAGE = Images.classes.crossfit;

// Trainer images - using imported images
export const TRAINER_DEFAULT_IMAGE = Images.trainers.john;
export const TRAINER_ALEX_IMAGE = Images.trainers.john;
export const TRAINER_SARAH_IMAGE = Images.trainers.sarah;
export const TRAINER_MICHAEL_IMAGE = Images.trainers.michael;
export const TRAINER_EMMA_IMAGE = Images.trainers.emma;

// Facility images - using gallery and other images
export const FACILITY_GYM_FLOOR_IMAGE = Images.gallery[0];
export const FACILITY_CARDIO_AREA_IMAGE = Images.gallery[1];
export const FACILITY_WEIGHT_ROOM_IMAGE = Images.gallery[2];
export const FACILITY_YOGA_STUDIO_IMAGE = Images.classes.yoga;
export const FACILITY_POOL_IMAGE = Images.gallery[0]; // Reusing gallery image
export const FACILITY_LOCKER_ROOM_IMAGE = Images.equipment; // Reusing equipment image

// Testimonial images
export const TESTIMONIAL_DEFAULT_IMAGE = Images.trainers.john;

// About page images
export const ABOUT_HERO_IMAGE = Images.hero;
export const ABOUT_MISSION_IMAGE = Images.classes.yoga;
export const ABOUT_TEAM_IMAGE = Images.gallery[1];

// Contact page images
export const CONTACT_HERO_IMAGE = Images.gallery[2];

// Pricing page images
export const PRICING_HERO_IMAGE = Images.classes.powerLifting;

// Classes page images
export const CLASSES_HERO_IMAGE = Images.classes.hiit;

// Default placeholder images with dimensions
export const getPlaceholder = (width: number, height: number) =>
   `/placeholder.svg?height=${height}&width=${width}`;

// Common placeholder sizes (for easy access)
export const PLACEHOLDER_AVATAR = getPlaceholder(100, 100);
export const PLACEHOLDER_CARD = getPlaceholder(400, 600);
export const PLACEHOLDER_HERO = getPlaceholder(1920, 1080);
export const PLACEHOLDER_THUMBNAIL = getPlaceholder(300, 300);
export const PLACEHOLDER_FEATURE = getPlaceholder(800, 600);

// UI Icons
export const ICON_NEXT_SVG = "/next.svg";
export const ICON_VERCEL_SVG = "/vercel.svg";
export const ICON_FILE_SVG = "/file.svg";
export const ICON_WINDOW_SVG = "/window.svg";
export const ICON_GLOBE_SVG = "/globe.svg";

/**
 * Image map helpers
 * These maps can be used to dynamically select images based on IDs
 */

// Map class IDs to their corresponding images
export const CLASS_IMAGES = {
   "hiit-training": CLASS_HIIT_IMAGE,
   "strength-conditioning": CLASS_STRENGTH_IMAGE,
   "yoga-flow": CLASS_YOGA_IMAGE,
   "spin-class": CLASS_SPIN_IMAGE,
   "boxing-fundamentals": CLASS_BOXING_IMAGE,
   "pilates-core": CLASS_PILATES_IMAGE,
   "functional-training": CLASS_FUNCTIONAL_IMAGE,
   "crossfit-inspired": CLASS_CROSSFIT_IMAGE,
   default: CLASS_DEFAULT_IMAGE,
};

// Map trainer IDs to their corresponding images
export const TRAINER_IMAGES = {
   "1": TRAINER_ALEX_IMAGE,
   "2": TRAINER_SARAH_IMAGE,
   "3": TRAINER_MICHAEL_IMAGE,
   "4": TRAINER_EMMA_IMAGE,
   default: TRAINER_DEFAULT_IMAGE,
};

// Map facility IDs to their corresponding images
export const FACILITY_IMAGES = {
   "gym-floor": FACILITY_GYM_FLOOR_IMAGE,
   "cardio-area": FACILITY_CARDIO_AREA_IMAGE,
   "weight-room": FACILITY_WEIGHT_ROOM_IMAGE,
   "yoga-studio": FACILITY_YOGA_STUDIO_IMAGE,
   pool: FACILITY_POOL_IMAGE,
   "locker-room": FACILITY_LOCKER_ROOM_IMAGE,
   default: FACILITY_GYM_FLOOR_IMAGE,
};

/**
 * Helper function to get an image based on ID from a map
 * Falls back to the default image if the ID is not found
 */
export const getImageById = (id: string, imageMap: Record<string, any>) => {
   return imageMap[id] || imageMap.default;
};

// Example usage:
// const classImage = getImageById('yoga-flow', CLASS_IMAGES);
// const trainerImage = getImageById('2', TRAINER_IMAGES);
