import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HyperText } from "../Animation/HyperText";

const TopNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const parentVariants = {
    open: {
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
    closed: {
      transition: { staggerChildren: 0.02, staggerDirection: -1 },
    },
  };

  const linkVariants = {
    open: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    closed: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  return (
    <>
      <header className="flex items-center justify-between px-4 xl:px-32 py-4 border-b border-neutral-800 relative z-20">
        
        {/* Left - Menu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-sm cursor-pointer order-2 md:order-1 text-gray-400  lg:w-[100px] bg- tracking-widest uppercase flex items-center gap-1"
        >
          <span className="border-t border-white/70 w-4 rotate-90"></span>
          {menuOpen ? "Close" : "Menu"}
          <span className="border-t border-white/70 w-4 rotate-90"></span>
        </button>

        {/* Center - Logo */}
        <Link href="/" className="md:order-2 order-1">
          <Image
            src="/images/spectral-logo.svg"
            alt=""
            width={150}
            height={100}
            className="font-semibold tracking-wide w-[100px]"
          />
        </Link>

        {/* Right - Call Me Back */}
        <div className="hidden order-3 md:block button-clip border-white/60 cursor-pointer border  px-4 py-2 text-white/50 text-xs uppercase bg-white/10 hover:bg-white hover:text-black transition">
          Call Me Back
        </div>
      </header>

      {/* Dropdown Menu */}
      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden px-4 xl:px-26 bg-neutral-950 border-b border-neutral-800"
          >
            <motion.ul
              initial="closed"
              animate="open"
              exit="closed"
              variants={parentVariants}
              className="grid max-w-[1350px] grid-cols-1 md:grid-cols-5 gap-8 md:gap-10 px-4 xl:px-10 py-8 md:py-10 text-sm uppercase"
            >
              {/* Column 1 */}
              <motion.li variants={linkVariants} className="space-y-2 px-2">
                <div className="flex items-center -ml-6">
                  <Image
                    src="/images/play.svg"
                    alt="Icon"
                    width={12}
                    height={12}
                    className="inline-block mr-2"
                  />
                  <p className="font-bold text-white/70">01 Home</p>
                </div>
                <ul className=" space-y-1 text-neutral-400">
                  <li className="flex cursor-pointer items-center py-1 hover:pl-4 hover:bg-white/20 outline-none transition-all duration-300 group-hover ">
                    <Image
                      src="/images/right.svg"
                      alt="Icon"
                      width={16}
                      height={16}
                      className="inline-block mr-2"
                    />
                    <p className="hover:text-zinc-50">Expertise</p>
                  </li>
                  <li className="flex cursor-pointer items-center py-1 hover:pl-4 hover:bg-white/20 outline-none transition-all duration-300 group-hover ">
                    <Image
                      src="/images/right.svg"
                      alt="Icon"
                      width={16}
                      height={16}
                      className="inline-block mr-2"
                    />
                    <p className="hover:text-zinc-50">Advantages</p>
                  </li>
                  <li className="flex cursor-pointer items-center py-1 hover:pl-4 hover:bg-white/20 outline-none transition-all duration-300 group-hover ">
                    <Image
                      src="/images/right.svg"
                      alt="Icon"
                      width={16}
                      height={16}
                      className="inline-block mr-2"
                    />
                    <p className="hover:text-zinc-50">Clients</p>
                  </li>
                </ul>
              </motion.li>

              <motion.li variants={linkVariants} className="space-y-2 px-2">
                <div className="flex items-center -ml-6">
                  <Image
                    src="/images/play.svg"
                    alt="Icon"
                    width={12}
                    height={12}
                    className="inline-block mr-2"
                  />
                  <p className="font-bold text-white/70">02 Service</p>
                </div>
                <ul className=" space-y-1 text-neutral-400">
                  <li className="flex cursor-pointer items-center py-1 hover:pl-4 hover:bg-white/20 outline-none transition-all duration-300 group-hover ">
                    <Image
                      src="/images/right.svg"
                      alt="Icon"
                      width={16}
                      height={16}
                      className="inline-block mr-2"
                    />
                    <p className="hover:text-zinc-50">Expertise</p>
                  </li>
                  <li className="flex cursor-pointer items-center py-1 hover:pl-4 hover:bg-white/20 outline-none transition-all duration-300 group-hover ">
                    <Image
                      src="/images/right.svg"
                      alt="Icon"
                      width={16}
                      height={16}
                      className="inline-block mr-2"
                    />
                    <p className="hover:text-zinc-50">Concept Art</p>
                  </li>
                  <li className="flex cursor-pointer items-center py-1 hover:pl-4 hover:bg-white/20 outline-none transition-all duration-300 group-hover ">
                    <Image
                      src="/images/right.svg"
                      alt="Icon"
                      width={16}
                      height={16}
                      className="inline-block mr-2"
                    />
                    <p className="hover:text-zinc-50">3D Production</p>
                  </li>
                  <li className="flex cursor-pointer items-center py-1 hover:pl-4 hover:bg-white/20 outline-none transition-all duration-300 group-hover ">
                    <Image
                      src="/images/right.svg"
                      alt="Icon"
                      width={16}
                      height={16}
                      className="inline-block mr-2"
                    />
                    <p className="hover:text-zinc-50">Industrial Design</p>
                  </li>
                </ul>
              </motion.li>

              {/* Column 3 */}
              <motion.li variants={linkVariants} className="font-bold px-2">
                <div className="flex items-center -ml-6">
                  <Image
                    src="/images/play.svg"
                    alt="Icon"
                    width={12}
                    height={12}
                    className="inline-block mr-2"
                  />
                  <p className="font-bold text-white/70">03 Portfolio</p>
                </div>
              </motion.li>

              {/* Column 4 */}
              <motion.li variants={linkVariants} className="font-bold px-2">
                <div className="flex items-center -ml-6">
                  <Image
                    src="/images/play.svg"
                    alt="Icon"
                    width={12}
                    height={12}
                    className="inline-block mr-2"
                  />
                  <p className="font-bold text-white/70">02 About</p>
                </div>
              </motion.li>

              {/* Column 5 */}
              <motion.li variants={linkVariants} className="space-y-2 px-2">
                <div className="flex items-center -ml-6">
                  <Image
                    src="/images/play.svg"
                    alt="Icon"
                    width={12}
                    height={12}
                    className="inline-block mr-2"
                  />
                  <p className="font-bold text-white/70">02 Contact</p>
                </div>
                <ul className="ml-4 space-y-1 text-neutral-400">
                  <li>Let’s Collaborate</li>
                  <li className="text-neutral-600">hello@spektralstudio.com</li>
                </ul>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TopNavbar;
