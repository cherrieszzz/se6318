'use client';
import React, { useState, useContext } from 'react'
import { AuthContext } from '@/contexts/AuthProvider';

const Page = () => {
  const {loggedUser} = useContext(AuthContext);
  
  return (
    <div className='container max-w-md mx-auto'>
      {loggedUser && 
      <div>
        用户名：{loggedUser.username}
        邮箱:{loggedUser.email}
      </div>
      }
    </div>
  )
}

export default Page