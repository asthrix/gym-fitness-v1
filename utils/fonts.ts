import { Bebas_Neue, Inter, Poppins } from "next/font/google";

const inter = Inter({
   subsets: ["latin"],
   variable: "--font-inter",
   display: "swap",
});

const poppins = Poppins({
   subsets: ["latin"],
   variable: "--font-poppins",
   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
   display: "swap",
});

const bebasNeue = Bebas_Neue({
   subsets: ["latin"],
   variable: "--font-bebas-neue",
   weight: "400",
});

export { inter, poppins, bebasNeue };
