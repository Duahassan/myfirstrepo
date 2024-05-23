import Image from "next/image";
import "./globals.css";

import Navbar from "./components/navbar";
import Hero from "./components/hero";

export default function Home() {
  return (
    <main >
      <Navbar/>
      <Hero/>
      
    </main>
  );
}
