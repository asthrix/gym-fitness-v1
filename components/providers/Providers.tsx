"use client";
import React from "react";
// import { useTheme } from 'next-themes'
// import { useRef } from "react";

import { Toaster } from "@/components/ui/sonner";
import { useThemeMount } from "@/hooks/use-theme-mount";
import { ThemeProvider } from "@/components/theme/theme-provider";

const Providers = ({ children }: { children: React.ReactNode }) => {
   return (
      <ThemeProvider
         attribute='class'
         defaultTheme='system'
         enableSystem
         disableTransitionOnChange
      >
         <>{children}</>
         <ToasterProvider />
      </ThemeProvider>
   );
};

function ToasterProvider() {
   const { resolvedTheme } = useThemeMount();

   return (
      <Toaster
         richColors
         // closeButton
         position='top-center'
         theme={resolvedTheme === "dark" ? "dark" : "light"}
      />
   );
}

// export function StoreProvider({ children }: { children: React.ReactNode }) {
//    const categoriesHydrated = useRef(false);
//    const productsHydrated = useRef(false);
//    const invoicesHydrated = useRef(false);
//    const uiHydrated = useRef(false);

//    if (typeof window !== "undefined") {
//       // Hydrate stores only once on client side
//       if (!categoriesHydrated.current) {
//          useCategoryStore.persist.rehydrate();
//          categoriesHydrated.current = true;
//       }
//       if (!productsHydrated.current) {
//          useProductStore.persist.rehydrate();
//          productsHydrated.current = true;
//       }
//       if (!invoicesHydrated.current) {
//          useInvoiceStore.persist.rehydrate();
//          invoicesHydrated.current = true;
//       }
//       if (!uiHydrated.current) {
//          useUIStore.persist.rehydrate();
//          uiHydrated.current = true;
//       }
//    }

//    return children;
// }

export default Providers;
