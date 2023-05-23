'use client';
import React, { useState } from 'react'

const Page = () => {
  const [username, setUsername] = useState('gatsby');

  return (
    <div className='container max-w-md mx-auto'>
      用户名:{username}
    </div>
  )
}

export default Page