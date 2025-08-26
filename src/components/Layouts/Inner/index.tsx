/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { slide, opacity, perspective } from './anim';

const anim = (variants: any) => {
    return {
        initial: "initial",
        animate: "enter",
        exit: "exit",
        variants
    }
}

export default function Layout({children}:{children: React.ReactNode}) {

    return (
        <div className='inner'>
            <motion.div className='slide' {...anim(slide)}/>
            <motion.div className='page' {...anim(perspective)}>
                <motion.div {...anim(opacity)}>
                    <div className='header'>
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                    {
                        children
                    }
                </motion.div>
            </motion.div>
        </div>
    )
}