import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import StatsCard from './../Cards/StatsCard'

const StatCardSwiper = ( {cardDataSet} ) => {
  return (
    <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween = {50}
        breakpoints = {{
          320: {
            slidesPerView: 1
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2
          }
        }}
        loop
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="lg:hidden pb-12"
    >
      {cardDataSet.map((data, index)=>{
        return  <SwiperSlide><StatsCard id={data.id} key={index} paddingY={'py-9'} stat={data.stat} header={data.header} /></SwiperSlide>
            })}
    </Swiper>
  )
}

export default StatCardSwiper