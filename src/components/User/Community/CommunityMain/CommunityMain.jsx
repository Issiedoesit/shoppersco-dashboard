import React from 'react'
import Posts from './Posts/Posts'
import CommunityPost from './../../../../data/User/CommunityPost'

const CommunityMain = () => {
  return (
    <div className='col-span-4 space-y-6 pb-10'>
        {CommunityPost.map((post, index)=>{
          return <Posts id={post.id} index={index} posterImg={post.posterImg} poster={post.poster} postType={post.postType} postTime={post.postTime} postBody={post.postBody} attachments={post.attachments} likes={post.likes} comments={post.comments} />
        })}
    </div>
  )
}

export default CommunityMain