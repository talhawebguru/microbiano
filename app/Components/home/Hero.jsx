import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Heroimg from '@/public/images/hero.svg'
import Vector1 from '@/public/images/Vector1.svg'

const Hero = () => {
  return (
    <>
        <div className='flex flex-wrap md:flex-nowrap  xl:pl-[90px] lg:pl-[40px] sm:pl-5 bg-[#f5e9f0]'>
            <div className='2xl:w-[60%] md:w-[70%] lg:w-[85%] lg:mt-24 mt-8'>
                <h1 className='xl:w-[72%] lg:w-[75%] sm:w-[89%] md:w-[95%] text-secondary sm:text-5xl xs:text-4xl font-normal font-arial p-2.5'>Advanced Microbiological Media Solutions by Safecare Industries in Abu Dhabi</h1>
                <div className='ml-80 '>
                    <Image
                    src={Vector1}
                    />
                </div>
                <p className="mt-4 text-black text-base font-normal font-secondary  leading-normal lg:w-[51%] w-[95%] pl-2.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                <div className='mt-11 pl-2.5 pb-36'>
                    <Link href="/contact">
                        <button className='w-[134px] h-12 bg-secondary text-white text-base font-normal font-arial hover:bg-secondary/90 transition-colors duration-300'>Enquire now</button>
                    </Link>
                    <Link href="/about">
                        <button className='w-[134px] h-12 border border-secondary text-secondary text-base font-semibold ml-3 font-arial hover:bg-secondary hover:text-white transition-colors duration-300'>Learn more</button>
                    </Link>
                </div>
            </div>
            <div className=''>
                <Image
                src={Heroimg}
                className="relative right-0 bottom-0 top-0 w-[100%] h-full"
                width={717}
                height={623}
                />
            </div>
        </div>
    </>
  )
}

export default Hero