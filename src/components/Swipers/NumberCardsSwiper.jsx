import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import NumbersCards from '../Cards/NumbersCards';

const NumberCardsSwiper = ( {cardDataSet, cardType} ) => {
  return (
    <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween = {20}
          breakpoints = {{
          360: {
            slidesPerView: 2
          },
          // when window width is >= 480px
          768: {
            slidesPerView: 3
          }
        }}
        loop
        autoplay={{ delay:4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="lg:hidden pb-12 grid"
    >
      {cardDataSet.map((item, index)=>{
        return  <SwiperSlide className=''><NumbersCards keyprop={`${cardType}Card${index+1}`} id={`${cardType}Card${index+1}`} header={item.header} metric={item.metric} amount={item.amount} trend={item.trend} percent={item.percent} link={item.link} linkText={item.linkText}/></SwiperSlide>
            })}
        </Swiper>
  )
}

export default NumberCardsSwiper