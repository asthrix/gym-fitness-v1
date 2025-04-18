import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import { currentUser } from "@/data/user";

export default function AccountPage() {
   return (
      <>
         <div className='flex flex-col gap-4 md:gap-8'>
            <div>
               <h1 className='text-3xl font-heading mb-8 text-foreground'>
                  Account
               </h1>
               <p className='text-muted-foreground'>
                  Manage your account settings and profile information
               </p>
            </div>

            <Separator className='bg-border' />

            <div className='grid gap-8 mt-8 max-w-5xl mx-auto'>
               {/* Profile Section */}
               <Card className='bg-card border-border'>
                  <CardHeader>
                     <CardTitle className='text-foreground'>
                        Profile Information
                     </CardTitle>
                     <CardDescription>
                        Update your personal information and profile picture
                     </CardDescription>
                  </CardHeader>
                  <CardContent>
                     <div className='flex flex-col md:flex-row gap-8'>
                        <div className='flex flex-col items-center gap-4'>
                           <Avatar className='h-24 w-24'>
                              <AvatarImage
                                 src={
                                    currentUser.image ||
                                    "/placeholder.svg?height=100&width=100"
                                 }
                                 alt='Profile'
                              />
                              <AvatarFallback>{`${currentUser.firstName.charAt(
                                 0
                              )}${currentUser.lastName.charAt(
                                 0
                              )}`}</AvatarFallback>
                           </Avatar>
                           <Button variant='outline' size='sm'>
                              Change Photo
                           </Button>
                        </div>

                        <div className='flex-1 grid gap-4'>
                           <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                              <div>
                                 <label
                                    htmlFor='firstName'
                                    className='block text-sm font-medium text-muted-foreground mb-1'
                                 >
                                    First Name
                                 </label>
                                 <Input
                                    id='firstName'
                                    defaultValue={currentUser.firstName}
                                    className='bg-muted border-border'
                                 />
                              </div>
                              <div>
                                 <label
                                    htmlFor='lastName'
                                    className='block text-sm font-medium text-muted-foreground mb-1'
                                 >
                                    Last Name
                                 </label>
                                 <Input
                                    id='lastName'
                                    defaultValue={currentUser.lastName}
                                    className='bg-muted border-border'
                                 />
                              </div>
                           </div>

                           <div>
                              <label
                                 htmlFor='email'
                                 className='block text-sm font-medium text-muted-foreground mb-1'
                              >
                                 Email
                              </label>
                              <Input
                                 id='email'
                                 type='email'
                                 defaultValue={currentUser.email}
                                 className='bg-muted border-border'
                              />
                           </div>

                           <div>
                              <label
                                 htmlFor='phone'
                                 className='block text-sm font-medium text-muted-foreground mb-1'
                              >
                                 Phone
                              </label>
                              <Input
                                 id='phone'
                                 defaultValue={currentUser.phone}
                                 className='bg-muted border-border'
                              />
                           </div>

                           <div className='flex justify-end'>
                              <Button>Save Changes</Button>
                           </div>
                        </div>
                     </div>
                  </CardContent>
               </Card>

               {/* Membership Section */}
               <Card className='bg-card border-border'>
                  <CardHeader>
                     <CardTitle className='text-foreground'>
                        Membership Details
                     </CardTitle>
                     <CardDescription>
                        View your current membership plan and status
                     </CardDescription>
                  </CardHeader>
                  <CardContent>
                     <div className='grid gap-6'>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                           <div className='bg-muted p-4 rounded-lg'>
                              <div className='text-sm text-muted-foreground mb-1'>
                                 Current Plan
                              </div>
                              <div className='text-xl font-medium text-foreground'>
                                 {currentUser.membershipPlan}
                              </div>
                           </div>
                           <div className='bg-muted p-4 rounded-lg'>
                              <div className='text-sm text-muted-foreground mb-1'>
                                 Billing Cycle
                              </div>
                              <div className='text-xl font-medium text-foreground'>
                                 {currentUser.membershipCycle}
                              </div>
                           </div>
                           <div className='bg-muted p-4 rounded-lg'>
                              <div className='text-sm text-muted-foreground mb-1'>
                                 Next Billing Date
                              </div>
                              <div className='text-xl font-medium text-foreground'>
                                 {currentUser.nextBillingDate}
                              </div>
                           </div>
                        </div>

                        <div className='flex flex-wrap gap-4'>
                           <Button variant='outline'>Change Plan</Button>
                           <Button
                              variant='outline'
                              className='text-destructive hover:text-destructive-light'
                           >
                              Cancel Membership
                           </Button>
                        </div>
                     </div>
                  </CardContent>
               </Card>

               {/* Password Section */}
               <Card className='bg-card border-border'>
                  <CardHeader>
                     <CardTitle className='text-foreground'>
                        Change Password
                     </CardTitle>
                     <CardDescription>
                        Update your password to keep your account secure
                     </CardDescription>
                  </CardHeader>
                  <CardContent>
                     <div className='grid gap-4 max-w-md'>
                        <div>
                           <label
                              htmlFor='currentPassword'
                              className='block text-sm font-medium text-muted-foreground mb-1'
                           >
                              Current Password
                           </label>
                           <Input
                              id='currentPassword'
                              type='password'
                              className='bg-muted border-border'
                           />
                        </div>

                        <div>
                           <label
                              htmlFor='newPassword'
                              className='block text-sm font-medium text-muted-foreground mb-1'
                           >
                              New Password
                           </label>
                           <Input
                              id='newPassword'
                              type='password'
                              className='bg-muted border-border'
                           />
                        </div>

                        <div>
                           <label
                              htmlFor='confirmPassword'
                              className='block text-sm font-medium text-muted-foreground mb-1'
                           >
                              Confirm New Password
                           </label>
                           <Input
                              id='confirmPassword'
                              type='password'
                              className='bg-muted border-border'
                           />
                        </div>

                        <div className='flex justify-end'>
                           <Button>Update Password</Button>
                        </div>
                     </div>
                  </CardContent>
               </Card>
            </div>
         </div>
      </>
   );
}
