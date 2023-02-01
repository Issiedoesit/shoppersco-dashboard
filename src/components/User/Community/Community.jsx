import React from 'react'
import Greeting from '../../Header/Greeting'
import Header from './../../Header/Header'
import CommunityAside from './CommunityAside/CommunityAside'
import CommunityMain from './CommunityMain/CommunityMain'

const Community = () => {
  return (
    <div className='pb-7 h-screen overflow-hidden bg-brandGray28x'>
      <div className='overflow-y-auto bg-brandGray28x h-full px-5 sm:px-10 xl:pl-0 xl:pr-10'>
      <Header page="Community"/>
        <div className='pb-10 overflow-y-auto pt-3.5'>

              {/* Main content here */}

              <Greeting headBtns={false} salutation={' Welcome to Shoppersbag\'s Community'} />

              <div className='flex flex-col-reverse lg:grid grid-cols-7 gap-5 rounded-ten'>
                <CommunityMain />
                <CommunityAside />
              </div>
        </div>
      </div>
    </div>
  )
}

export default Community