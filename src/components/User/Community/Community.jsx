import React, { useEffect, useRef, useState } from 'react'
import Greeting from '../../Header/Greeting'
import TemplatePage from '../../Template'
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
    if(window.location.pathname == '/community'){
      scrollRef.current.addEventListener("scroll", handleScroll);
    }
  
    return () => {
      if(window.location.pathname == '/community'){
        scrollRef.current.removeEventListener("scroll", handleScroll);
      }   
    }
  }, [scrollRef.current])
  

  return (
    <TemplatePage headerTitle={'Community'} levelTwoRef={scrollRef}>
              {/* Main content here */}

              <Greeting headBtns={false} salutation={' Welcome to Shoppersbag\'s Community'} />

              <div className='flex flex-col-reverse xl:grid grid-cols-7  gap-5 rounded-ten'>
                <CommunityMain />
                <CommunityAside offset={offset} />
              </div>
    </TemplatePage>
  )
}

export default Community