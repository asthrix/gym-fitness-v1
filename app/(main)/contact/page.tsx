"use client";

import type React from "react";

import { useState } from "react";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { toast } from "sonner";
import { Images } from "@/assets/images";
import { CONTACT_HERO_IMAGE } from "@/constants/assets";

export default function ContactPage() {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
   });
   const [isSubmitting, setIsSubmitting] = useState(false);

   const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
   };

   const handleSelectChange = (value: string) => {
      setFormData((prev) => ({ ...prev, subject: value }));
   };

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      // Basic validation
      if (!formData.name || !formData.email || !formData.message) {
         toast("Missing information", {
            description: "Please fill in all required fields.",
         });
         return;
      }

      setIsSubmitting(true);

      // Simulate API call
      setTimeout(() => {
         toast("Message Sent!", {
            description: "We'll get back to you as soon as possible.",
         });
         setIsSubmitting(false);
         setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
         });
      }, 1500);
   };

   return (
      <>
         {/* Hero Section */}
         <PageHero
            title='CONTACT US'
            subtitle='Get in touch with our team for any questions or inquiries'
            backgroundImage={CONTACT_HERO_IMAGE || Images.gallery[2]}
         />

         {/* Contact Form and Info Section */}
         <SectionContainer className=''>
            <div className='grid md:grid-cols-2 gap-12 items-start'>
               {/* Contact Form */}
               <div className='bg-card rounded-lg p-8 border border-border'>
                  <h2 className='text-3xl font-heading mb-6 text-foreground'>
                     Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className='space-y-6'>
                     <div>
                        <label
                           htmlFor='name'
                           className='block text-sm font-medium text-muted-foreground mb-1'
                        >
                           Name <span className='text-primary'>*</span>
                        </label>
                        <Input
                           id='name'
                           name='name'
                           value={formData.name}
                           onChange={handleChange}
                           placeholder='Your name'
                           required
                        />
                     </div>

                     <div>
                        <label
                           htmlFor='email'
                           className='block text-sm font-medium text-muted-foreground mb-1'
                        >
                           Email <span className='text-primary'>*</span>
                        </label>
                        <Input
                           id='email'
                           name='email'
                           type='email'
                           value={formData.email}
                           onChange={handleChange}
                           placeholder='your.email@example.com'
                           required
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
                           name='phone'
                           value={formData.phone}
                           onChange={handleChange}
                           placeholder='Your phone number'
                        />
                     </div>

                     <div>
                        <label
                           htmlFor='subject'
                           className='block text-sm font-medium text-muted-foreground mb-1'
                        >
                           Subject
                        </label>
                        <Select
                           onValueChange={handleSelectChange}
                           value={formData.subject}
                        >
                           <SelectTrigger>
                              <SelectValue placeholder='Select a subject' />
                           </SelectTrigger>
                           <SelectContent>
                              <SelectItem value='membership'>
                                 Membership Inquiry
                              </SelectItem>
                              <SelectItem value='classes'>
                                 Class Information
                              </SelectItem>
                              <SelectItem value='training'>
                                 Personal Training
                              </SelectItem>
                              <SelectItem value='feedback'>Feedback</SelectItem>
                              <SelectItem value='other'>Other</SelectItem>
                           </SelectContent>
                        </Select>
                     </div>

                     <div>
                        <label
                           htmlFor='message'
                           className='block text-sm font-medium text-muted-foreground mb-1'
                        >
                           Message <span className='text-primary'>*</span>
                        </label>
                        <Textarea
                           id='message'
                           name='message'
                           value={formData.message}
                           onChange={handleChange}
                           placeholder='Your message'
                           className='min-h-32'
                           required
                        />
                     </div>

                     <Button
                        type='submit'
                        className='w-full'
                        disabled={isSubmitting}
                     >
                        {isSubmitting ? (
                           "Sending..."
                        ) : (
                           <>
                              <Send className='mr-2 h-4 w-4' /> Send Message
                           </>
                        )}
                     </Button>
                  </form>
               </div>

               {/* Contact Information */}
               <div>
                  <h2 className='text-3xl font-heading mb-6 text-foreground'>
                     Get In Touch
                  </h2>
                  <p className='text-muted-foreground mb-8'>
                     Have questions about our gym, classes, or membership
                     options? Our team is here to help. Feel free to reach out
                     using any of the contact methods below.
                  </p>

                  <div className='space-y-6'>
                     <div className='flex items-start'>
                        <MapPin className='h-6 w-6 text-primary-500 mr-4 mt-1' />
                        <div>
                           <h3 className='text-xl font-medium text-foreground mb-1'>
                              Location
                           </h3>
                           <p className='text-muted-foreground'>
                              123 Fitness Street
                              <br />
                              New York, NY 10001
                              <br />
                              United States
                           </p>
                        </div>
                     </div>

                     <div className='flex items-start'>
                        <Phone className='h-6 w-6 text-primary-500 mr-4 mt-1' />
                        <div>
                           <h3 className='text-xl font-medium text-foreground mb-1'>
                              Phone
                           </h3>
                           <p className='text-muted-foreground'>
                              <a
                                 href='tel:+12125551234'
                                 className='hover:text-primary-500 transition-colors'
                              >
                                 +1 (212) 555-1234
                              </a>
                           </p>
                        </div>
                     </div>

                     <div className='flex items-start'>
                        <Mail className='h-6 w-6 text-primary-500 mr-4 mt-1' />
                        <div>
                           <h3 className='text-xl font-medium text-foreground mb-1'>
                              Email
                           </h3>
                           <p className='text-muted-foreground'>
                              <a
                                 href='mailto:info@gymon.com'
                                 className='hover:text-primary-500 transition-colors'
                              >
                                 info@gymon.com
                              </a>
                           </p>
                        </div>
                     </div>

                     <div className='flex items-start'>
                        <Clock className='h-6 w-6 text-primary-500 mr-4 mt-1' />
                        <div>
                           <h3 className='text-xl font-medium text-foreground mb-1'>
                              Working Hours
                           </h3>
                           <ul className='text-muted-foreground space-y-1'>
                              <li>Monday - Friday: 6:00 AM - 10:00 PM</li>
                              <li>Saturday: 7:00 AM - 8:00 PM</li>
                              <li>Sunday: 8:00 AM - 6:00 PM</li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </SectionContainer>

         {/* Map Section */}
         <SectionContainer className='bg-card pt-0'>
            <div className='relative h-[400px] md:h-[500px] rounded-lg overflow-hidden'>
               {/* This would be replaced with an actual map component in production */}
               <div className='absolute inset-0 bg-muted flex items-center justify-center'>
                  <p className='text-muted-foreground'>
                     Interactive map would be displayed here using Google Maps
                     or similar service
                  </p>
               </div>
            </div>
         </SectionContainer>
      </>
   );
}
