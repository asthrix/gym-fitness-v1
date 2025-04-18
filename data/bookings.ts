import type { BookedClass } from "@/types"

export const bookedClasses: BookedClass[] = [
  {
    id: "1",
    title: "HIIT Training",
    date: new Date(2023, 4, 15, 6, 0), // May 15, 2023, 6:00 AM
    duration: "45 min",
    trainer: "Alex Johnson",
    location: "Studio A",
  },
  {
    id: "2",
    title: "Yoga Flow",
    date: new Date(2023, 4, 17, 8, 0), // May 17, 2023, 8:00 AM
    duration: "50 min",
    trainer: "Michael Chen",
    location: "Studio B",
  },
  {
    id: "3",
    title: "Strength & Conditioning",
    date: new Date(2023, 4, 18, 7, 0), // May 18, 2023, 7:00 AM
    duration: "60 min",
    trainer: "Sarah Miller",
    location: "Main Floor",
  },
]
