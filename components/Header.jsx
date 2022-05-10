/* eslint-disable @next/next/link-passhref */
import React, { useEffect, useState} from 'react';
import Link from 'next/link';
import { getCategories } from '../services'

const Header = () => {
  const [categories, setCategories] = useState([])
  
  useEffect(() => {
    getCategories()
      .then(res => setCategories(res))
      
  }, [])
  return (
    <div className='container-full mb-8'>
      <div className="w-full border-b-2 inline-block border-gray-400 py-8">
        <div className="md:float-left block">
          <Link href='/' >
            <span className="cursor-pointer text-white text-4xl">
              Blog CMS
            </span>
          </Link>
        </div>
        <div className="hidden md:float md:float-left md:contents">
          {categories.map(category => (
            // eslint-disable-next-line @next/next/link-passhref
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-white ml-4 cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header