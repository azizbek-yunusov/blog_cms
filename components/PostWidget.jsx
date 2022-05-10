/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState} from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getRecentPosts, getSimilarPosts } from '../services'

const PostWidget = ({categories, slug}) => {
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    if(slug) {
      getSimilarPosts(categories, slug)
       .then(res => setRelatedPosts(res))
    }
    else {
      getRecentPosts()
       .then(res => setRelatedPosts(res))
    }
  }, [slug])

  return (
    <div className='bg-white rounded-lg shadow-md p-8 mb-8'>
      <h2 className="">
        {slug ? 'Releted Posts' : 'Recent Posts'}
      </h2>
      {relatedPosts.map(post => (
        <div key={post.title} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <img 
              src={post.featuredImage.url} 
              alt={post.title} 
              width="60px"
              height="60px"
              className='align-middle rounded-full'
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-700 font-normal">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
            <Link href={`/post/${slug}`}>
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget
