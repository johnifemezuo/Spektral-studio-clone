"use client";
import { useRive } from "@rive-app/react-canvas";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Rive from "rive-react";

export default function Loader({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 80) {
          clearInterval(interval);
          setTimeout(() => setCompleted(true), 500); // Trigger split
          setTimeout(onFinish, 1500); // Allow animation to finish
          return 100;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onFinish]);

  // const bars = Array.from({ length: 10 });

  // const { rive, RiveComponent } = useRive({
  //   src: "/loading_battery.riv",
  //   stateMachines: "bumpy",
  //   autoplay: true,
  // });

  return (
    <AnimatePresence>
      {!completed && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
        >
          {/* Battery Loader */}

          <div className="w-[300px] h-[300px] flex items-center justify-center">
            <Rive src="/loading_battery.riv" />
            {/* <RiveComponent
              onMouseEnter={() => rive && rive.play()}
              // onMouseLeave={() => rive && rive.pause()}
            /> */}
            {/* <Rive src="/loading_battery.riv" stateMachines="bumpy"   /> */}
          </div>

          {/* <div className="flex gap-1 mb-4 border-2 border-white rounded-md px-1 py-2 relative">
            {bars.map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-8 bg-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: i < Math.floor(progress / 10) ? 1 : 0.1 }}
                transition={{ duration: 0.3 }}
              />
            ))}
            <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-2 h-4 bg-white rounded-r-sm"></div>
          </div>

          <p className="text-gray-400 text-sm">{progress}%</p> */}
        </motion.div>
      )}

      {/* Split Reveal Effect */}
      {completed && (
        <>
          <motion.div
            className="fixed top-0 left-0 w-full h-1/2 bg-black z-40"
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
          <motion.div
            className="fixed bottom-0 left-0 w-full h-1/2 bg-black z-40"
            initial={{ y: 0 }}
            animate={{ y: "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </>
      )}
    </AnimatePresence>
  );
}
