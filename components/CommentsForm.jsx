import React, { useRef, useState, useEffect} from 'react';
import { submitComment } from '../services';


const CommentsForm = ({slug}) => {
  const [error, setError] = useState(false)
  const [localStorage, setLocalStorage] = useState(null)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const commentEl = useRef()
  const emailEl = useRef()
  const nameEl = useRef()
  const storeDataEl = useRef()

  const handleSubmissionComment = () => {
    setError(false)

    const {value: comment} = commentEl.current
    const {value: name} = nameEl.current
    const {value: email} = emailEl.current
    const {checked: storeData} = storeDataEl.current 

    if(!name || !email || !comment) {
      setError(true)
      return
    }

    const commentsObj = {name, email, comment, slug}

    if(storeData) {
      window.localStorage.setItem("name", name)
      window.localStorage.setItem("email", email)
    }
    else {
      window.localStorage.removeItem("name", name)
      window.localStorage.removeItem("email", email)
    }

    submitComment(commentsObj)
      .then(res => {
        setShowSuccessMessage(true)
        setTimeout(() => {
          setShowSuccessMessage(false)
        }, 3000)
      })
  }
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Comments</h3>
      <div className="grid grid-cols-1 gap-4 pb-4">
        <textarea 
          ref={commentEl}
          className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-blue-300 bg-gray-100 text-gray-700'
          name="comment" 
          placeholder='Comments'
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pb-4">
        <input 
          type="text"
          ref={nameEl}
          className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-blue-300 bg-gray-100 text-gray-700'
          placeholder='Name'
          name='name'
        />
        <input 
          type="email"
          ref={emailEl}
          className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-blue-300 bg-gray-100 text-gray-700'
          placeholder='Email' 
          name='email'
        />
      </div>
      <div className="grid grid-cols-1 gap-4 pb-4">
        <div> 
        <input
          className='p-10'
          type="checkbox"
          ref={storeDataEl}
          id='storeData'
          name='storeData'
          value='true'
        />
        <label htmlFor="storeData" className='text-gray-500 cursor-pointer ml-2'>save name, email and comment</label>
        </div>
      </div>
      {error && <p className="text-sm animate-bounce text-red-500">All fields are requered</p> }
      <div className="mt-8">
        <button 
          onClick={handleSubmissionComment}
          type='button' 
          className='px-8 py-3 cursor-pointer bg-blue-600 rounded-full text-white'
           >Post Comment</button>
          {showSuccessMessage && <span className='font-semibold mt-2 text-green-500 text-xl float-right'>Comment submitted for review</span>}
      </div>
    </div>

  )
}

export default CommentsForm