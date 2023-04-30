import React from 'react'
import { FadeLoader, ScaleLoader } from 'react-spinners'


const Loading = () => {
  return (
    <div className='h-full w-full min-h-screen flex flex-col items-center justify-center text-center gap-4 text-brandGreen1x font-avenirMedium'><ScaleLoader color="#009933" /> loading...</div>
  )
}

export default Loading