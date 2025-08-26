"use client";
import UnicornScene from "unicornstudio-react";

export default function AboutSection() {
  return (
    <section className="bg-[#14141A] md:py-12">
      <div className="xl:w-[1350px] w-full xl:pl-24 ">
        <div className="  px-6 py-16 md:flex  gap-20">
          {/* LEFT CONTENT */}
          <div className="xl:min-w-[360px] space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-300 uppercase leading-snug">
              Integrated Visual <br /> Development
            </h2>

            <ul className="mt-6 space-y-2 text-gray-300  md:text-sm text-xs">
              <li>↳ AAA video games</li>
              <li>↳ Blockbuster films</li>
              <li>↳ TV series</li>
              <li>↳ Commercials and immersive experiences</li>
            </ul>

            <button className="mt-8 px-4 py-2 border border-gray-400 text-sm uppercase hover:bg-white hover:text-black transition-all">
              More ▸
            </button>
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-10 mt-20 md:mt-0">
            {/* Concept Design */}
            <div>
              <h3 className="font-bold uppercase text-sm text-zinc-300">
                Concept Design
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-gray-400 text-sm mt-2">
                <p>
                  Full-spectrum fictional hardware from weapon systems to
                  synthetic biology and neural implants.
                </p>
                <p>
                  If it doesn’t exist, we design it. If it does, we improve it.
                </p>
              </div>
            </div>
            <hr className="border-gray-700" />

            {/* 3D Production */}
            <div>
              <h3 className="font-bold uppercase text-sm text-zinc-300">
                3D Production
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-gray-400 text-sm mt-2">
                <p>
                  From mesh to motion, assets are engineered for game engines,
                  post-production, or cross-platform deployment.
                </p>
                <p>Built to spec. Delivered on time.</p>
              </div>
            </div>
            <hr className="border-gray-700" />

            {/* Adaptive Support */}
            <div>
              <h3 className="font-bold uppercase text-sm text-zinc-300">
                Adaptive Support
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-gray-400 text-sm mt-2">
                <p>
                  Scope expands. Specs change. Deadlines don’t. Adaptive support
                  absorbs the hit so delivery stays on course.
                </p>
                <p>We respond like we’re part of your team—because we are.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* BOTTOM IMAGE */}
      <div className="flex bg-white/20  h-[400px] md:h-[600px]  overflow-hidden ">
        <UnicornScene
          projectId="NzyWmgpHl3kHKhFTWUjU"
          className="w-vw flex-1 flex h-full"
          width={1950}
        />
      </div>
    </section>
  );
}
