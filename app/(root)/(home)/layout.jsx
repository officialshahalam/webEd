import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import React from 'react'

const HomeLayout = ({children}) => {
  return (
    <main className='relative'>
      <Navbar/>
      <div className='flex'>
        <Sidebar/>
        <section className='flex flex-1 flex-col px-6 pb-6 overflow-y-auto pt-28 h-screen max-md:pb-14 sm:px-14'>
          <div className='w-full'>{children}</div>
        </section>
      </div>
    </main>
  )
}

export default HomeLayout;
