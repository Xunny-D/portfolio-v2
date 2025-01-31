import { useState, useEffect } from "react";
import { Link } from "@heroui/link";

import { Head } from "./head";

import { Navbar } from "@/components/navigationBar/navbar";
import backgroundImage from "../resources/pictures/portfolioBackground.jpg";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const [isBgLoaded, setIsBgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = backgroundImage.src;
    img.onload = () => setIsBgLoaded(true);
  }, []);
  
  return (
    isBgLoaded &&
    <div className="overflow-hidden">
      <div className="relative flex flex-col h-screen bg-cover bg-[bottom] bg-hello animate-appearance-in ease-in-out font-fixedsys">
        <Head />
        <Navbar />
        <main className="container mx-auto max-w-9xl flex-grow pt-16">
          {children}
        </main>
        <footer className="w-full flex items-center justify-center py-3" />
      </div>
    </div>
  );
}
