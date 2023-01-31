import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import NumbersCards from '../Cards/NumbersCards';

const NumberCardsSwiper = ( {cardDataSet} ) => {
  return (
    <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween = {20}
          breakpoints = {{
          320: {
            slidesPerView: 2
          },
          // when window width is >= 480px
          768: {
            slidesPerView: 3
          }
        }}
      
       pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="lg:hidden pb-12 grid"
    >
      {cardDataSet.map((item, index)=>{
        return  <SwiperSlide className=''><NumbersCards keyprop={`metricCard${index+1}`} id={`metricCard${index+1}`} header={item.header} metric={item.metric} amount={item.amount} trend={item.trend} percent={item.percent}/></SwiperSlide>
            })}
        </Swiper>
  )
}

export default NumberCardsSwiper