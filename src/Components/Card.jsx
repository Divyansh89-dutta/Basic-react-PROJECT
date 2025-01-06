import React from 'react'

function Card() {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-zinc-50 to-zinc-200 flex justify-center items-center">
  <div className="w-[90%] sm:w-[30vw] bg-white rounded-xl shadow-2xl overflow-hidden">
    <div className="w-full h-40 sm:h-48 bg-gray-200">
      <img 
        className="w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1735236270565-983422d5a224?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
        alt="Profile Background"
      />
    </div>
    <div className="p-5">
      <h2 className="text-2xl font-serif font-bold text-gray-800">Divyansh</h2>
      <p className="text-gray-600 mt-2 text-sm leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus error perspiciatis, rerum aut magni laborum, maxime sapiente nihil provident aperiam repudiandae fugit eaque ipsa, consequuntur quia! Aliquam voluptate debitis nisi.
      </p>
      <button className="mt-5 w-full py-2 bg-blue-500 text-white text-sm font-medium rounded-lg shadow-md hover:bg-blue-600 transition-all">
        Follow
      </button>
    </div>
  </div>
</div>
  )
}

export default Card