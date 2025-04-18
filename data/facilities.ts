import type { Facility } from "@/types";
import {
   FACILITY_GYM_FLOOR_IMAGE,
   FACILITY_CARDIO_AREA_IMAGE,
   FACILITY_WEIGHT_ROOM_IMAGE,
   FACILITY_YOGA_STUDIO_IMAGE,
   FACILITY_POOL_IMAGE,
   FACILITY_LOCKER_ROOM_IMAGE,
} from "@/constants/assets";

export const facilities: Facility[] = [
   {
      id: "gym-floor",
      title: "Strength Zone",
      image: FACILITY_GYM_FLOOR_IMAGE,
   },
   {
      id: "cardio-area",
      title: "Cardio Area",
      image: FACILITY_CARDIO_AREA_IMAGE,
   },
   {
      id: "weight-room",
      title: "Functional Training",
      image: FACILITY_WEIGHT_ROOM_IMAGE,
   },
   {
      id: "yoga-studio",
      title: "Recovery Space",
      image: FACILITY_YOGA_STUDIO_IMAGE,
   },
   {
      id: "pool",
      title: "Group Classes",
      image: FACILITY_POOL_IMAGE,
   },
   {
      id: "locker-room",
      title: "Locker Rooms",
      image: FACILITY_LOCKER_ROOM_IMAGE,
   },
];
