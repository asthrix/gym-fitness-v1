import { SectionContainer } from "@/components/sections/SectionContainer";
import { PricingCard } from "@/components/sections/PricingCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CTA } from "@/components/common/CTA";
import { PageHero } from "@/components/sections/PageHero";
import { Check } from "lucide-react";
import { monthlyPlans, annualPlans } from "@/data/pricing";
import { PRICING_HERO_IMAGE } from "@/constants/assets";
import { Images } from "@/assets/images";

export default function PricingPage() {
   return (
      <>
         {/* Hero Section */}
         <PageHero
            title='MEMBERSHIP PLANS'
            subtitle='Choose the perfect plan to achieve your fitness goals'
            backgroundImage={PRICING_HERO_IMAGE || Images.classes.powerLifting}
         />

         {/* Pricing Section */}
         <SectionContainer className=''>
            <div className='max-w-5xl mx-auto'>
               <Tabs defaultValue='monthly' className='w-full'>
                  <div className='flex justify-center mb-8'>
                     <TabsList className='bg-gray-900'>
                        <TabsTrigger value='monthly'>Monthly</TabsTrigger>
                        <TabsTrigger value='annual'>Annual</TabsTrigger>
                     </TabsList>
                  </div>

                  <TabsContent value='monthly' className='mt-0'>
                     <div className='grid md:grid-cols-3 gap-8'>
                        {monthlyPlans.map((plan) => (
                           <PricingCard key={plan.id} plan={plan} />
                        ))}
                     </div>
                  </TabsContent>

                  <TabsContent value='annual' className='mt-0'>
                     <div className='grid md:grid-cols-3 gap-8'>
                        {annualPlans.map((plan) => (
                           <PricingCard key={plan.id} plan={plan} />
                        ))}
                     </div>
                  </TabsContent>
               </Tabs>
            </div>
         </SectionContainer>

         {/* Features Comparison */}
         <SectionContainer className='bg-gray-950'>
            <div className='max-w-5xl mx-auto'>
               <div className='text-center mb-16'>
                  <h2 className='text-3xl md:text-4xl font-heading mb-6 text-foreground'>
                     COMPARE MEMBERSHIPS
                  </h2>
                  <p className='text-xl text-muted-foreground'>
                     See which plan is right for your fitness journey
                  </p>
               </div>

               <div className='overflow-x-auto'>
                  <table className='w-full border-collapse'>
                     <thead>
                        <tr>
                           <th className='text-left p-4 border-b border-gray-800 text-gray-400'>
                              Features
                           </th>
                           <th className='p-4 border-b border-gray-800 text-foreground font-heading'>
                              BASIC
                           </th>
                           <th className='p-4 border-b border-gray-800 text-foreground font-heading'>
                              PREMIUM
                           </th>
                           <th className='p-4 border-b border-gray-800 text-foreground font-heading'>
                              ELITE
                           </th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td className='text-left p-4 border-b border-gray-800 text-muted-foreground'>
                              Gym Access
                           </td>
                           <td className='p-4 border-b border-gray-800 text-center'>
                              <Check className='h-5 w-5 text-primary-500 mx-auto' />
                           </td>
                           <td className='p-4 border-b border-gray-800 text-center'>
                              <Check className='h-5 w-5 text-primary-500 mx-auto' />
                           </td>
                           <td className='p-4 border-b border-gray-800 text-center'>
                              <div className='text-center'>
                                 <Check className='h-5 w-5 text-primary-500 mx-auto' />
                                 <span className='text-xs text-primary-500'>
                                    24/7
                                 </span>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td className='text-left p-4 border-b border-gray-800 text-muted-foreground'>
                              Group Classes
                           </td>
                           <td className='p-4 border-b border-gray-800 text-center text-gray-400'>
                              2 per week
                           </td>
                           <td className='p-4 border-b border-gray-800 text-center text-gray-400'>
                              Unlimited
                           </td>
                           <td className='p-4 border-b border-gray-800 text-center text-gray-400'>
                              Unlimited + Priority
                           </td>
                        </tr>
                        <tr>
                           <td className='text-left p-4 border-b border-gray-800 text-muted-foreground'>
                              Personal Training
                           </td>
                           <td className='p-4 border-b border-gray-800 text-center text-gray-400'>
                              —
                           </td>
                           <td className='p-4 border-b border-gray-800 text-center text-gray-400'>
                              1 session/month
                           </td>
                           <td className='p-4 border-b border-gray-800 text-center text-gray-400'>
                              4 sessions/month
                           </td>
                        </tr>
                        <tr>
                           <td className='text-left p-4 border-b border-gray-800 text-muted-foreground'>
                              Fitness Assessment
                           </td>
                           <td className='p-4 border-b border-gray-800 text-center text-gray-400'>
                              Initial only
                           </td>
                           <td className='p-4 border-b border-gray-800 text-center text-gray-400'>
                              Monthly
                           </td>
                           <td className='p-4 border-b border-gray-800 text-center text-gray-400'>
                              Weekly
                           </td>
                        </tr>
                        <tr>
                           <td className='text-left p-4 border-b border-gray-800 text-muted-foreground'>
                              Nutrition Plan
                           </td>
                           <td className='p-4 border-b border-gray-800 text-center text-gray-400'>
                              —
                           </td>
                           <td className='p-4 border-b border-gray-800 text-center text-gray-400'>
                              Consultation
                           </td>
                           <td className='p-4 border-b border-gray-800 text-center text-gray-400'>
                              Customized Plan
                           </td>
                        </tr>
                        <tr>
                           <td className='text-left p-4 border-b border-gray-800 text-muted-foreground'>
                              Guest Passes
                           </td>
                           <td className='p-4 border-b border-gray-800 text-center text-gray-400'>
                              —
                           </td>
                           <td className='p-4 border-b border-gray-800 text-center text-gray-400'>
                              —
                           </td>
                           <td className='p-4 border-b border-gray-800 text-center text-gray-400'>
                              2 per month
                           </td>
                        </tr>
                        <tr>
                           <td className='text-left p-4 border-b border-gray-800 text-muted-foreground'>
                              Recovery Zone
                           </td>
                           <td className='p-4 border-b border-gray-800 text-center text-gray-400'>
                              —
                           </td>
                           <td className='p-4 border-b border-gray-800 text-center text-gray-400'>
                              —
                           </td>
                           <td className='p-4 border-b border-gray-800 text-center'>
                              <Check className='h-5 w-5 text-primary-500 mx-auto' />
                           </td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
         </SectionContainer>

         {/* FAQ Section */}
         <SectionContainer className=''>
            <div className='max-w-3xl mx-auto'>
               <div className='text-center mb-16'>
                  <h2 className='text-3xl md:text-4xl font-heading mb-6 text-foreground'>
                     FREQUENTLY ASKED QUESTIONS
                  </h2>
                  <p className='text-xl text-muted-foreground'>
                     Everything you need to know about our membership plans
                  </p>
               </div>

               <div className='space-y-8'>
                  <div className='border-b border-gray-800 pb-6'>
                     <h3 className='text-xl font-heading mb-3 text-foreground'>
                        Can I freeze my membership?
                     </h3>
                     <p className='text-muted-foreground'>
                        Yes, you can freeze your membership for up to 3 months
                        per year with a small administrative fee. Elite members
                        can freeze their membership at no additional cost.
                     </p>
                  </div>
                  <div className='border-b border-gray-800 pb-6'>
                     <h3 className='text-xl font-heading mb-3 text-foreground'>
                        Is there a joining fee?
                     </h3>
                     <p className='text-muted-foreground'>
                        There is a one-time joining fee of $49 for all new
                        members. This fee is waived during promotional periods
                        and for annual membership sign-ups.
                     </p>
                  </div>
                  <div className='border-b border-gray-800 pb-6'>
                     <h3 className='text-xl font-heading mb-3 text-foreground'>
                        Can I cancel my membership anytime?
                     </h3>
                     <p className='text-muted-foreground'>
                        Monthly memberships require a 30-day notice for
                        cancellation. Annual memberships are non-refundable but
                        can be transferred to another person for a small fee.
                     </p>
                  </div>
                  <div className='border-b border-gray-800 pb-6'>
                     <h3 className='text-xl font-heading mb-3 text-foreground'>
                        Do you offer family discounts?
                     </h3>
                     <p className='text-muted-foreground'>
                        Yes, we offer a 10% discount for each additional family
                        member who joins on the same membership tier. Please
                        inquire at our front desk for more details.
                     </p>
                  </div>
                  <div className='border-b border-gray-800 pb-6'>
                     <h3 className='text-xl font-heading mb-3 text-foreground'>
                        How do I book classes?
                     </h3>
                     <p className='text-muted-foreground'>
                        You can book classes through our mobile app, website, or
                        at the front desk. Elite members get priority booking up
                        to 7 days in advance, while other members can book 3
                        days in advance.
                     </p>
                  </div>
               </div>
            </div>
         </SectionContainer>

         {/* CTA Section */}
         <CTA
            title='Ready to Transform Your Life?'
            subtitle='Join Gymon today and start your fitness journey with our expert trainers and state-of-the-art facilities.'
            primaryButtonText='Join Now'
            primaryButtonLink='/contact'
            secondaryButtonText='Contact Us'
            secondaryButtonLink='/contact'
         />
      </>
   );
}
