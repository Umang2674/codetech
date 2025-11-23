import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./_components/header";
import Hero from "./_components/Hero";

/**
 * Default Home Page of the application.
 * @returns 
 */

export default function Home() {
  return (
   <div className = " flex flex-col items-center">
    {/*Header / Navbar */}
    <Header />


    {/*hero section*/}
    <Hero />

   </div>
  );
}
