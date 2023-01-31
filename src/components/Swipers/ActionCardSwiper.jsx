import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ActionWithImage from '../Cards/ActionWithImage';

const ActionCardSwiper = ({cardDataSet}) => {
  return (
    <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween = {50}
        breakpoints = {{
          320: {
            slidesPerView: 1
          },
          // when window width is >= 480px
          768: {
            slidesPerView: 2
          }
        }}
       pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="lg:hidden pb-12"
    >
      {cardDataSet.map((data, index)=>{
        return  <SwiperSlide><ActionWithImage id={data.id} keyprop={index} text={data.text} bgColor={data.bgColor} textColor={data.textColor} fontSize={data.fontSize} fontWeight={data.fontWeight} img={data.img} altImg={data.altImg} /></SwiperSlide>
            })}
    </Swiper>
  )
}

export default ActionCardSwiper