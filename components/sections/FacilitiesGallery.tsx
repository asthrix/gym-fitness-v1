"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import type { Facility } from "@/types";

interface FacilitiesGalleryProps {
   facilities: Facility[];
}

export function FacilitiesGallery({ facilities }: FacilitiesGalleryProps) {
   const [selectedFacility, setSelectedFacility] = useState<Facility | null>(
      null
   );

   return (
      <>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {facilities.map((facility, index) => (
               <motion.div
                  key={facility.id}
                  className='relative h-64 rounded-lg overflow-hidden cursor-pointer group'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setSelectedFacility(facility)}
               >
                  <Image
                     src={facility.image || "/placeholder.svg"}
                     alt={facility.title}
                     fill
                     className='object-cover'
                  />
                  <div className='absolute inset-0 /50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                     <h3 className='text-2xl font-heading text-foreground'>
                        {facility.title}
                     </h3>
                  </div>
               </motion.div>
            ))}
         </div>

         <Dialog
            open={!!selectedFacility}
            onOpenChange={(open) => !open && setSelectedFacility(null)}
         >
            <DialogContent className='max-w-4xl p-0 bg-card border-border'>
               {selectedFacility && (
                  <div>
                     <div className='relative h-[60vh]'>
                        <Image
                           src={selectedFacility.image || "/placeholder.svg"}
                           alt={selectedFacility.title}
                           fill
                           className='object-cover'
                        />
                     </div>
                     <div className='p-6'>
                        <h3 className='text-2xl font-heading text-foreground mb-2'>
                           {selectedFacility.title}
                        </h3>
                        <p className='text-muted-foreground'>
                           Our {selectedFacility.title.toLowerCase()} is
                           equipped with the latest fitness technology and
                           designed to provide the optimal environment for your
                           workouts.
                        </p>
                     </div>
                  </div>
               )}
            </DialogContent>
         </Dialog>
      </>
   );
}
