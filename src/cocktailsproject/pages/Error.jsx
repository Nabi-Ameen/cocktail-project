import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='w-1/2 mx-auto text-center pt-20 space-y-6'>
      <h2 className='text-lg font-medium'>oops! it's a dead end</h2>
      <button className='bg-sky-700 text-white px-5 py-2 rounded-sm'>
        <Link to="/">
          back home
        </Link>
      </button>
    </section>
  )
}

export default Error
