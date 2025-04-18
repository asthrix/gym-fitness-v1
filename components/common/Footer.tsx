import Link from "next/link";
import {
   Facebook,
   Instagram,
   Twitter,
   Youtube,
   LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Define types for data structures
type FooterLink = {
   href: string;
   label: string;
};

type SocialLink = {
   href: string;
   label: string;
   icon: LucideIcon;
};

type WorkingHour = {
   day: string;
   hours: string;
};

// Define data structures for reusable content
const socialLinks: SocialLink[] = [
   { href: "#", label: "Facebook", icon: Facebook },
   { href: "#", label: "Instagram", icon: Instagram },
   { href: "#", label: "Twitter", icon: Twitter },
   { href: "#", label: "YouTube", icon: Youtube },
];

const quickLinks: FooterLink[] = [
   { href: "/", label: "Home" },
   { href: "/about", label: "About" },
   { href: "/classes", label: "Classes" },
   { href: "/pricing", label: "Pricing" },
   { href: "/contact", label: "Contact" },
];

const legalLinks: FooterLink[] = [
   { href: "/privacy-policy", label: "Privacy Policy" },
   { href: "/terms", label: "Terms of Service" },
];

const workingHours: WorkingHour[] = [
   { day: "Monday - Friday", hours: "6:00 AM - 10:00 PM" },
   { day: "Saturday", hours: "7:00 AM - 8:00 PM" },
   { day: "Sunday", hours: "8:00 AM - 6:00 PM" },
];

// Reusable components
const FooterHeading = ({ children }: { children: React.ReactNode }) => (
   <h3 className='font-heading text-xl mb-4 text-foreground'>{children}</h3>
);

const FooterSection = ({
   className,
   children,
}: {
   className?: string;
   children: React.ReactNode;
}) => <div className={className}>{children}</div>;

export function Footer() {
   const currentYear = new Date().getFullYear();

   return (
      <footer className='text-foreground border-t border-border'>
         <div className='container mx-auto px-4 py-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
               {/* Company Info Section */}
               <FooterSection>
                  <h3 className='font-heading text-2xl mb-4 text-foreground'>
                     Gymon
                  </h3>
                  <p className='text-muted-foreground mb-4'>
                     Transform your life with fitness. Join our community and
                     achieve your fitness goals.
                  </p>
                  <div className='flex space-x-4'>
                     {socialLinks.map((social) => (
                        <a
                           key={social.label}
                           href={social.href}
                           className='text-muted-foreground hover:text-primary transition-colors'
                           aria-label={social.label}
                        >
                           <social.icon size={20} />
                           <span className='sr-only'>{social.label}</span>
                        </a>
                     ))}
                  </div>
               </FooterSection>

               {/* Quick Links Section */}
               <FooterSection>
                  <FooterHeading>Quick Links</FooterHeading>
                  <ul className='space-y-2'>
                     {quickLinks.map((link) => (
                        <li key={link.label}>
                           <Link
                              href={link.href}
                              className='text-muted-foreground hover:text-primary transition-colors'
                           >
                              {link.label}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </FooterSection>

               {/* Working Hours Section */}
               <FooterSection>
                  <FooterHeading>Working Hours</FooterHeading>
                  <ul className='space-y-2 text-muted-foreground'>
                     {workingHours.map((schedule) => (
                        <li key={schedule.day} className='flex justify-between'>
                           <span>{schedule.day}:</span>
                           <span>{schedule.hours}</span>
                        </li>
                     ))}
                  </ul>
               </FooterSection>

               {/* Newsletter Section */}
               <FooterSection>
                  <FooterHeading>Newsletter</FooterHeading>
                  <p className='text-muted-foreground mb-4'>
                     Subscribe to our newsletter for the latest updates and
                     offers.
                  </p>
                  <div className='flex flex-col space-y-2'>
                     <Input
                        type='email'
                        placeholder='Your email'
                        className='bg-card border-border'
                     />
                     <Button>Subscribe</Button>
                  </div>
               </FooterSection>
            </div>

            {/* Footer Bottom */}
            <div className='border-t border-border mt-12 pt-8 text-center text-muted-foreground'>
               <p>&copy; {currentYear} Gymon. All rights reserved.</p>
               <div className='mt-2 flex justify-center space-x-4 text-sm'>
                  {legalLinks.map((link) => (
                     <Link
                        key={link.label}
                        href={link.href}
                        className='hover:text-primary transition-colors'
                     >
                        {link.label}
                     </Link>
                  ))}
               </div>
            </div>
         </div>
      </footer>
   );
}
