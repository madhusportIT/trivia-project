import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { BsAlarm } from "react-icons/bs";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { AiOutlineAliwangwang } from "react-icons/ai";
import { AiOutlineApartment } from "react-icons/ai";
import { AiOutlineAndroid } from "react-icons/ai";
import { AiOutlineBilibili } from "react-icons/ai";
import { AiOutlineBug } from "react-icons/ai";


const MainCarousel = ({ }) => {

  return (
    <div className='flex items-center justify-center gap-20'>
      <AiOutlineAliwangwang className='h-20 w-20 group-hover:text-green-500' />
      <AiOutlineBilibili className='h-20 w-20 group-hover:text-green-500' />
      <AiOutlineApartment className='h-20 w-20 group-hover:text-green-500' />
      <AiOutlineApartment className='h-20 w-20 group-hover:text-green-500' />
      <AiOutlineAndroid className='h-20 w-20 group-hover:text-green-500' />
      <AiOutlineBug className='h-20 w-20 group-hover:text-green-500' />
      <AiOutlineAndroid className='h-20 w-20 group-hover:text-green-500' />
      <AiOutlineAndroid className='h-20 w-20 group-hover:text-green-500' />
      <AiOutlineAndroid className='h-20 w-20 group-hover:text-green-500' />
      <AiOutlineAndroid className='h-20 w-20 group-hover:text-green-500' />
      <AiOutlineApartment className='h-20 w-20 group-hover:text-green-500' />
      <AiOutlineApartment className='h-20 w-20 group-hover:text-green-500' />
    </div>

  );
};

export default MainCarousel;