"use client";

import React from "react";
import { Vortex } from "@/components/ui/vortex";

export default function VortexDemoSecond() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
        lorddsans?
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
        he created many website for his client, and he is a good developer
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
  Order Next.js 
</button>
          <button className="px-4 py-2  text-white ">Watch trailer</button>
        </div>
      </Vortex>
    </div>
  );
}
