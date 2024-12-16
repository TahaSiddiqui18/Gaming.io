import React from 'react'

export default function AuthorCard() {
  return (
    <div className='container bg-white shadow-lg p-2 mt-12 rounded-lg'>
      <div className="flex items-center animation-fadeIn">
        <img src="/Images/WhatsApp Image 2024-11-21 at 3.50.31 AM.jpeg" alt="Author Image" className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-500 object-top" />
        <div>
          <h3 className="text-xl font-bold ">Muhammad Taha Siddiqui</h3>
          <p className="text-slate-500">Web Designer | Programmer</p>
        </div>

      </div>
      <p className="mt-4 text-black leading-relaxed">I am Hafiz eager to dive into the world of web development. With a strong curiosity for front-end design, I&rsquo;m actively learning and experimenting with tools to create innovative web solutions...</p>
      <div className="mt-4 flex space-x-2">
        <a href="https://www.linkedin.com/in/taha-xiddiqui-b36686301/" target="blank" className="px-4 py-2 text-white bg-blue-800 rounded-md hover:bg-blue-400 transition duration-300">
          Linked In
        </a>
        <a href="https://github.com/TahaSiddiqui18" target="blank" className="px-4 py-2 text-white bg-blue-800 rounded-md hover:bg-blue-400 transition duration-300">
          Github
        </a>
        <a href="https://www.instagram.com/xiddiqui_hun_yawr/" target="blank" className="px-4 py-2 text-white bg-blue-800 rounded-md hover:bg-blue-400 transition duration-300">
          Instagram
        </a>
      </div>
    </div>
  )
}
