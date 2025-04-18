/**
 * GYMON Assets
 *
 * This file centralizes all asset paths used throughout the application.
 * Follow the naming convention: CATEGORY_DESCRIPTOR_TYPE
 *
 * Example: HERO_BACKGROUND_IMAGE, LOGO_PRIMARY_SVG, etc.
 */

// Logo assets
export const LOGO_PRIMARY_SVG = "/logo/logo-primary.svg";
export const LOGO_WHITE_SVG = "/logo/logo-white.svg";
export const LOGO_SMALL_SVG = "/logo/logo-small.svg";

// Hero section assets
export const HERO_BACKGROUND_IMAGE = "/images/hero/hero-background.jpg";
export const HERO_VIDEO_MP4 = "/videos/hero-background.mp4";

// Class images
export const CLASS_DEFAULT_IMAGE = "/images/classes/class-default.jpg";
export const CLASS_HIIT_IMAGE = "/images/classes/hiit-training.jpg";
export const CLASS_STRENGTH_IMAGE = "/images/classes/strength-conditioning.jpg";
export const CLASS_YOGA_IMAGE = "/images/classes/yoga-flow.jpg";
export const CLASS_SPIN_IMAGE = "/images/classes/spin-class.jpg";
export const CLASS_BOXING_IMAGE = "/images/classes/boxing-fundamentals.jpg";
export const CLASS_PILATES_IMAGE = "/images/classes/pilates-core.jpg";
export const CLASS_FUNCTIONAL_IMAGE = "/images/classes/functional-training.jpg";
export const CLASS_CROSSFIT_IMAGE = "/images/classes/crossfit-inspired.jpg";

// Trainer images
export const TRAINER_DEFAULT_IMAGE = "/images/trainers/trainer-default.jpg";
export const TRAINER_ALEX_IMAGE = "/images/trainers/alex-johnson.jpg";
export const TRAINER_SARAH_IMAGE = "/images/trainers/sarah-miller.jpg";
export const TRAINER_MICHAEL_IMAGE = "/images/trainers/michael-chen.jpg";
export const TRAINER_EMMA_IMAGE = "/images/trainers/emma-rodriguez.jpg";

// Facility images
export const FACILITY_GYM_FLOOR_IMAGE = "/images/facilities/gym-floor.jpg";
export const FACILITY_CARDIO_AREA_IMAGE = "/images/facilities/cardio-area.jpg";
export const FACILITY_WEIGHT_ROOM_IMAGE = "/images/facilities/weight-room.jpg";
export const FACILITY_YOGA_STUDIO_IMAGE = "/images/facilities/yoga-studio.jpg";
export const FACILITY_POOL_IMAGE = "/images/facilities/pool.jpg";
export const FACILITY_LOCKER_ROOM_IMAGE = "/images/facilities/locker-room.jpg";

// Testimonial images
export const TESTIMONIAL_DEFAULT_IMAGE =
   "/images/testimonials/testimonial-default.jpg";

// About page images
export const ABOUT_HERO_IMAGE = "/images/about/about-hero.jpg";
export const ABOUT_MISSION_IMAGE = "/images/about/our-mission.jpg";
export const ABOUT_TEAM_IMAGE = "/images/about/our-team.jpg";

// Contact page images
export const CONTACT_HERO_IMAGE = "/images/contact/contact-hero.jpg";

// Pricing page images
export const PRICING_HERO_IMAGE = "/images/pricing/pricing-hero.jpg";

// Classes page images
export const CLASSES_HERO_IMAGE = "/images/classes/classes-hero.jpg";

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
export const getImageById = (id: string, imageMap: Record<string, string>) => {
   return imageMap[id] || imageMap.default;
};

// Example usage:
// const classImage = getImageById('yoga-flow', CLASS_IMAGES);
// const trainerImage = getImageById('2', TRAINER_IMAGES);
