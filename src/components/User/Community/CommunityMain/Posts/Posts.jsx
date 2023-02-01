import React, { useEffect, useState } from 'react'
import dummyAvatar1 from './../../../../../assets/images/avatars/avatar-1.png'


const Posts = ({id, index, posterImg, poster, postType, postTime, postBody, attachments, likes, comments }) => {
    const [liked, setLiked] = useState(false)
    const [gridStyle, setGridStyle] = useState('')

    let images = [];
    let imageArray = attachments.imgs
    imageArray.forEach((image)=>{
        images.push(image)
    })

    useEffect(() => {
        switch (images.length){
            case 1:
                setGridStyle('row-span-2 col-span-2')
                break
            case 2:
                setGridStyle('row-span-2')
                break;
            case 3:
                setGridStyle('first:row-span-2')
                break;
            case 4:
                setGridStyle('col-span-1 row-span-1')
        }
    }, [images])
    
    

  return (
    <div id={id} key={index} className='bg-white rounded-ten py-9 px-6'>
        <div className='flex justify-between gap-5'>
            <div className='flex items-center gap-4'>
                <img src={posterImg} alt="" className='rounded-fiftyPercent h-8 w-8 min-w-8 aspect-square min-h-8' />
                <div>
                    <h2 className='text-sm sm:text-base font-avenirHeavy'>{poster}</h2>
                    <p className='text-xs'>{postType}</p>
                </div>
            </div>
            <div>
                <p className='text-xs'>{postTime} ago</p>
            </div>
        </div>

        <div className='text-xs font-avenirLight text-brandGray45x pt-4 pb-3.5'>
            <p>{postBody}</p>
        </div>

        <div className='grid grid-cols-2 gap-2 grid-rows-2 sm:h-80'>
            {images.map((image) => {
              return  <img src={image.img} alt="post" className={`rounded-ten w-full h-full ${gridStyle} object-cover`} />
            })}
        </div>

        <div className='flex items-center py-3.5 gap-6 text-xxs sm:text-xs text-brandGray45x'>
            
            {/* like */}
            <div className='flex items-center gap-1.5'>
                <button onClick={()=>setLiked(prevLiked => !prevLiked)} className="relative">
                    <svg className={`${liked && 'fill-brandRed4x'} transition-colors duration-500 ease-in-out w-4 h-4 sm:w-auto sm:h-auto`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.38 3.1001 10.99 3.9801 12 5.3401C13.01 3.9801 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901C22 15.6901 15.52 19.8201 12.62 20.8101Z" stroke="#B31919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span className={`${liked && 'bubble-span bubble-motion'}`}></span>
                </button>
                <p>{likes}</p>
            </div>

            {/* comment */}
            
            <div className='flex items-center gap-1.5'>
                <button>
                    <svg className='w-4 h-4 sm:w-auto sm:h-auto' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z" stroke="#D7D028" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path opacity="0.4" d="M7 8H17" stroke="#D7D028" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path opacity="0.4" d="M7 13H13" stroke="#D7D028" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <p>{comments}</p>
            </div>

            {/* share */}

            <div className='flex items-center gap-1.5'>
                <button>
                    <svg className='w-4 h-4 sm:w-auto sm:h-auto' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.34" d="M16.9609 6.16992C18.9609 7.55992 20.3409 9.76992 20.6209 12.3199" stroke="#3992CC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path opacity="0.34" d="M3.49023 12.3702C3.75023 9.83021 5.11023 7.62021 7.09023 6.22021" stroke="#3992CC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path opacity="0.34" d="M8.18945 20.9399C9.34945 21.5299 10.6695 21.8599 12.0595 21.8599C13.3995 21.8599 14.6595 21.5599 15.7895 21.0099" stroke="#3992CC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.0593 7.70014C13.5946 7.70014 14.8393 6.45549 14.8393 4.92014C14.8393 3.38479 13.5946 2.14014 12.0593 2.14014C10.5239 2.14014 9.2793 3.38479 9.2793 4.92014C9.2793 6.45549 10.5239 7.70014 12.0593 7.70014Z" stroke="#3992CC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4.83078 19.9199C6.36613 19.9199 7.61078 18.6752 7.61078 17.1399C7.61078 15.6045 6.36613 14.3599 4.83078 14.3599C3.29543 14.3599 2.05078 15.6045 2.05078 17.1399C2.05078 18.6752 3.29543 19.9199 4.83078 19.9199Z" stroke="#3992CC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M19.1706 19.9199C20.706 19.9199 21.9506 18.6752 21.9506 17.1399C21.9506 15.6045 20.706 14.3599 19.1706 14.3599C17.6353 14.3599 16.3906 15.6045 16.3906 17.1399C16.3906 18.6752 17.6353 19.9199 19.1706 19.9199Z" stroke="#3992CC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <p>Share</p>
            </div>
        </div>

        <form className='flex items-center gap-2'>
            <img src={dummyAvatar1} alt="user" className='rounded-fiftyPercent h-8 w-8 min-w-8 aspect-square min-h-8' />
            <label htmlFor="commentInput" className='w-full'>
                <input type="text" name="comment-input" id="commentInput" placeholder='Enter a comment' className='placeholder:font-avenirLight bg-brandWhite2x w-full border-0.5 border-brandGray46x h-10 rounded-five text-xs px-6 focus:outline focus:outline-1 focus:outline-brandGreen7x transition-colors duration-500 ease-in-out'  />
            </label>
            <button className="bg-brandGreen4x flex items-center gap-2 rounded-five text-white px-3.5 h-10 w-fit">
                <span className='hidden sm:block'>Send</span>
                <svg className='w-4 h-4 sm:w-auto sm:h-auto' width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.50929 4.44553L18.0693 8.94345C21.9093 10.9612 21.9093 14.2611 18.0693 16.2788L9.50929 20.7768C3.74929 23.8034 1.39929 21.3232 4.27929 15.2805L5.14929 13.4624C5.36929 13 5.36929 12.2328 5.14929 11.7704L4.27929 9.94182C1.39929 3.89905 3.75929 1.41889 9.50929 4.44553Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path opacity="0.34" d="M5.43945 12.6108H10.8395" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </form>
    </div>
  )
}

export default Posts