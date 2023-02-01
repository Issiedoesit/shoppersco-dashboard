import React, { useEffect, useRef, useState } from 'react'
import Greeting from '../../Header/Greeting'
import Header from './../../Header/Header'
import CommunityAside from './CommunityAside/CommunityAside'
import CommunityMain from './CommunityMain/CommunityMain'

const Community = () => {

  const scrollRef =  useRef(null)
  const [offset, setOffset] = useState('top-[204px]')

  useEffect(() => {
    function handleScroll() {
      // Get the scroll offset
      let off = scrollRef.current.scrollTop

      // Check if the scroll offset is greater than 100
      if (off > 96) {
        setOffset('top-28')

      } else{
        setOffset('top-[204px]')
      }
    }
    scrollRef.current.addEventListener("scroll", handleScroll);
  
    return () => {
      scrollRef.current.removeEventListener("scroll", handleScroll);    
    }
  }, [scrollRef.current])
  

  return (
    <div className='h-screen overflow-hidden bg-brandGray28x'>
      <div id="scroller" ref={scrollRef} className='overflow-y-auto bg-brandGray28x h-full px-5 sm:px-10 xl:pl-0 xl:pr-10'>
      <Header page="Community"/>
        <div   className='overflow-y-hidden pt-3.5'>

              {/* Main content here */}

              <Greeting headBtns={false} salutation={' Welcome to Shoppersbag\'s Community'} />

              <div className='flex flex-col-reverse xl:grid grid-cols-7  gap-5 rounded-ten'>
                <CommunityMain />
                <CommunityAside offset={offset} />
              </div>
        </div>
      </div>
    </div>
  )
}

export default Community