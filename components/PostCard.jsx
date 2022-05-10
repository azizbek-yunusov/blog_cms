/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import moment from 'moment'

const PostWidget = ({post}) => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 mb-8'>
      <h1 className="transition duration-500 text-xl font-bold text-center mb-4 cursor-pointer hover:text-blue-600">
        <Link href={`/post/${post.slug}`}>
          {post.title}
        </Link>
      </h1>
      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
          <img 
            src={post.author.photo.url} 
            alt={post.author.name}
            width="40px"
            height="40px"
            className='align-middle rounded-full' 
          />
          <p className="inline align-middle text-gray-800 ml-2 text-lg">
            {post.author.name}
          </p>
        </div>
        <div className="font-medium text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>
            {moment(post.createdAt).format('MMM DD, YYYY')}
          </span>
        </div>
      </div>
      <div className="reletive overflow-hidden shadow-md pb-8 mb-8">
        <img 
          src={post.featuredImage.url} 
          alt={post.title} 
          className="object-top h-80 w-full object-cover shadow-t-lg lg:rounded-lg"
          />
      </div>
      <p className="text-center text-lg text-gray-800 font-normal px-4 lg:px-20 mb-4">
        {post.excerpt}
      </p>
      <div className="cursor-pointer text-center">
        <Link href={`/post/${post.slug}`}>
          <span className='transition duration-500 px-8 py-4 transform hover:text-red-50 hover:bg-blue-900 inline-block bg-blue-600 text-lg font-medium rounded-full'>
            Contine reading
          </span>
        </Link>
      </div>
    </div>
  )
}

export default PostWidget