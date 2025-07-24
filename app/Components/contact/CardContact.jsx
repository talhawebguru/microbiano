"use client"
import React from 'react'
import Image from 'next/image'

const CardContact = (props) => {
  const isEmail = props.title === "Email:";
  
  const handleEmailClick = () => {
    if (isEmail) {
      window.location.href = `mailto:${props.info}`;
    }
  };

  return (
    <>
        <div 
          className={`pt-9 pl-9 pb-16 bg-white shadow-lg xs:min-w-full xl:w-[32%] lg:w-[30%] sm:w-[400px] 2xl:w-[465px] mt-12 transition-colors duration-300 ${
            isEmail ? 'cursor-pointer hover:bg-primary/10' : ''
          }`}
          onClick={handleEmailClick}
        >
            <div><Image src={props.image} alt="Icon"/></div>
            <h3 className='text-black text-2xl font-medium font-primary uppercase leading-relaxed mt-6'>{props.title}</h3>
            <p className={`text-black text-base font-normal font-primary uppercase leading-[17.60px] mt-2 lg:w-[80%] w-[70%] transition-colors duration-300 ${
              isEmail ? 'hover:text-secondary' : ''
            }`}>{props.info}</p>
        </div>
    </>
  )
}

export default CardContact