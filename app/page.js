"use client"


import { DocumentTextIcon ,UserCircleIcon } from '@heroicons/react/24/solid'
import { StarIcon,ChatBubbleLeftEllipsisIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import Texteditor from './components/Texteditor';
import { useState } from 'react';


export default function Home() {

  
  return (
    <div className='h-screen bg-gray-100'>
    <header className='flex items-center justify-between p-3 pb-1'>
        <DocumentTextIcon className="w-10 h-10 text-blue-500 cursor-pointer" />
        <div className='flex-grow px-2'>
          <span className='flex items-center gap-4'>
            <h2 className='font-medium cursor-text'>Untitled document</h2>
            <StarIcon className="w-5 h-5 cursor-pointer" />
            </span>
            <div className="flex items-center h-8 space-x-2 text-sm text-gray-800">
                        <p className="option">File</p>
                        <p className="option">Edit</p>
                        <p className="option">View</p>
                        <p className="option">Insert</p>
                        <p className="option">Format</p>
                        <p className="option">Tools</p>
                        <p className="option">Extensions</p>
                        <p className="option">Help</p>
                    </div>
        </div>
        {/* Header Left Part */}
        <div className='flex items-center gap-3'>
          <span className='p-2 rounded-full cursor-pointer hover:bg-gray-200'>
          <ChatBubbleLeftEllipsisIcon className="w-6 h-6 text-gray-800" />
          </span>
          <span className='flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer bg-sky-200 hover:bg-sky-100'>
            <LockClosedIcon className="w-5 h-5 text-gray-800" />
            Share
          </span>
          <span className='relative p-1 rounded-full cursor-pointer hover:bg-gray-200'>
          <UserCircleIcon className="w-10 h-10 text-blue-500 " />
          </span>
        </div>

      </header>
      {/* Text Editor Component */}
      <Texteditor />
    
    </div>
  )
}
