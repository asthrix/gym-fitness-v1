import type { UserProfile } from "@/types"

export const currentUser: UserProfile = {
  id: "user1",
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  image: "/placeholder.svg?height=100&width=100",
  membershipPlan: "Premium",
  membershipCycle: "Monthly",
  nextBillingDate: "May 15, 2023",
}
