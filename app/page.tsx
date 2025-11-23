import { Button } from "@/components/ui/button";
import Image from "next/image";

/**
 * Default Home Page of the application.
 * @returns 
 */

export default function Home() {
  return (
   <div>
    <h1 className="font-game">Welcome to the Home Page</h1>
    <Button>Subscribe</Button>
   </div>
  );
}
