import React from 'react'

const Footer = () => {
  return (
    <footer className='flex h-96 bg-gray-100'>
        <div className="flex flex-col justify-end  text-right pr-2 pb-32 transform rotate-90">
          <div className='flex justify-end text-right font-bold text-8xl tracking-tighter  text-green-900'>SCULPT</div>
          <div className='flex justify-end text-right font-thin text-5xl text-gray-custom tracking-tighter '>DESIGNS</div>
        </div>
        <div className='p-10 flex flex-col text-lg'>
          <div className="flex p text-sm text-gray-custom">Got a project idea?</div>
          <div className="flex p text-3xl font-bold">Let’s make it happen.</div>
        </div>
    </footer>
  )
}

export default Footer