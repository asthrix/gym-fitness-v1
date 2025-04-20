"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PricingPlan } from "@/types";
import Link from "next/link";

interface PricingCardProps {
   plan: PricingPlan;
   isYearly?: boolean;
}

export function PricingCard({ plan, isYearly = false }: PricingCardProps) {
   console.log(isYearly);
   return (
      <div
         className={`rounded-lg p-0.5 ${
            plan.popular
               ? "border-2 border-primary shadow-lg shadow-primary/10"
               : "border border-border bg-card"
         }`}
      >
         <div className='rounded-[calc(0.5rem-1px)] p-6 h-full flex flex-col'>
            {/* Plan Name and Badge */}
            <div className='flex items-center justify-between mb-4'>
               <h3 className='text-2xl font-heading text-foreground'>
                  {plan.name}
               </h3>
               {plan.savings && plan.popular && (
                  <Badge variant='secondary' className=''>
                     {plan.savings}
                  </Badge>
               )}
            </div>

            {/* Price */}
            <div className='mb-6'>
               <div className='flex items-end'>
                  <span className='text-4xl font-bold text-foreground'>
                     {plan.price}
                  </span>
                  <span className='text-muted-foreground ml-2'>
                     {plan.period}
                  </span>
               </div>
               <p className='text-muted-foreground mt-2'>{plan.description}</p>
            </div>

            {/* Features */}
            <div className='flex-grow'>
               <ul className='space-y-3 mb-8'>
                  {plan.features.map((feature, index) => (
                     <li key={index} className='flex items-start'>
                        <Check className='h-5 w-5 text-primary mr-3 mt-0.5 shrink-0' />
                        <span className='text-muted-foreground'>{feature}</span>
                     </li>
                  ))}
               </ul>
            </div>

            {/* CTA Button */}
            <Button
               className={`w-full ${
                  plan.popular ? "" : "bg-muted hover:bg-muted/80"
               }`}
               variant={plan.popular ? "default" : "outline"}
               size='lg'
               asChild
            >
               <Link href={plan.buttonLink}>{plan.buttonText}</Link>
            </Button>
         </div>
      </div>
   );
}
