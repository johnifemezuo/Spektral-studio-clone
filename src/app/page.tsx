"use client";

import Loader from "@/components/Loading/Loading";
import TopNavbar from "@/components/Navbar/TopNavbar";
import AboutSection from "@/components/Pages/AboutSection";
import Image from "next/image";
import { useState } from "react";
import UnicornScene from "unicornstudio-react";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  return (
    <>
    {/* Page Title and Tab Title */}
    <>
      <head>
        <title>Spectral | Imagination Engineering</title>
        <meta name="description" content="Visual Development and Support in 3D Production" />
      </head>
      <h1 className="sr-only">Spectral - Imagination Engineering</h1>
    </>
      {loading && <Loader onFinish={() => setLoading(false)} />}
      {!loading && (
        <main className="bg-[#14141A] text-white min-h-screen">
          {/* Top Navbar */}
          <TopNavbar />

          {/* Hero Section with Fullscreen Video */}
          <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden ">
            {/* Background video */}
            <video
              className="absolute inset-0 w-full h-[300px] md:h-[400px] object-cover"
              autoPlay
              muted
              // loop
              playsInline
            >
              <source src="/videos/game-vid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Overlay content (lines at the bottom) */}
            <div className="absolute bottom-4 w-full flex justify-center gap-4 z-10">
              <Image
                src="/images/lines.svg"
                alt=""
                width={1250}
                height={500}
                className="w-full px-12"
              />
            </div>
          </section>

          {/* Content Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-10 md:pl-6 pl-4 xl:pl-10 py-4 md:py-8 w-full items-center">
            {/* Left Text */}
            <div className="grid lg:grid-cols-2 flex-col gap-12  min-h-[400px]  xl:pl-20 py-5">
              <div className="flex flex-col items-start gap-4">
                <span className="bg-white/10 p-3 border-r w-6 mt-9 h-5 inline-block border-white"></span>
                <div className="flex items-center gap-4 pb-6 md:pb-12 space-x-3">
                  <h2 className="text-2xl md:text-3xl  font-bold text-gray-300 uppercase leading-tight">
                    Imagination <br /> Engineering
                  </h2>

                  <div className="px- ">
                    <Image
                      src="/images/x-icon.svg"
                      alt=""
                      width={30}
                      height={30}
                      className="w-5 h-5 inline-block "
                    />
                  </div>
                </div>

                <div className="cursor-pointer border hover:text-black border-white/70 p-2  bg-white/10 hover:bg-white  px-6 py-4 button-clip text-xs uppercase w-fit text-white/70 transition">
                  Call Me Back
                </div>
              </div>

              <div className="pt-2 lg:pt-28 px-">
                <span className="w-full border-t  border-white/30 inline-block"></span>
                <p className="text-sm lg:text-base tracking-wide uppercase text-neutral-400 pt-12 md:pt-20">
                  Visual Development <br /> and Support in 3D Production
                </p>
                <span className="bg-white/10 p-3 border-r w-6 mt-9 h-5 inline-block border-white"></span>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center bg-white/50 clip-side h-full  w-full overflow-hidden">
              <UnicornScene
                projectId="CssY8mk69ISpDZV8ictW"
                className="w-full object-cover h-full"
              />
            </div>
          </section>

          <AboutSection />
        </main>
      )}
    </>
  );
}
