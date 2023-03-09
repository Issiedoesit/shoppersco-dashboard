import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import AdCards from '../Cards/AdCards';

const AdCardsSwiper = ({cardDataSet}) => {
  return (
    <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween = {20}
        breakpoints = {{
          320: {
            slidesPerView: 1
          },
          // when window width is >= 480px
          800: {
            slidesPerView: 2
          }
        }}
        loop
        autoplay={{delay: 4000, disableOnInteraction: false}}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="xl:hidden pb-12 grid"
    >
      {cardDataSet.map((ad, index)=>{
        return  <SwiperSlide className='col-span-1'><AdCards id={ad.id} img={ad.img} header={ad.header} text={ad.text} index={index} /> </SwiperSlide>
            })}
    </Swiper>
  )
}

export default AdCardsSwiper