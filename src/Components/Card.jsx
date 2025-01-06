import React from 'react';

function Card() {
  const data = [
    {
      name: 'Divyansh',
      image:
        'https://images.unsplash.com/photo-1735399554370-4f9eab0cfc4f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus error perspiciatis, rerum aut magni laborum, maxime sapiente nihil provident aperiam repudiandae fugit eaque ipsa, consequuntur quia! Aliquam voluptate debitis nisi.',
      stock: false,
    },
    {
      name: 'Rohan',
      image:
        'https://images.unsplash.com/photo-1735437643865-18e22575a630?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus error perspiciatis, rerum aut magni laborum, maxime sapiente nihil provident aperiam repudiandae fugit eaque ipsa, consequuntur quia! Aliquam voluptate debitis nisi.',
      stock: true,
    },
    {
      name: 'Jansi',
      image:
        'https://images.unsplash.com/photo-1735578515772-b2c4f60b4cb3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus error perspiciatis, rerum aut magni laborum, maxime sapiente nihil provident aperiam repudiandae fugit eaque ipsa, consequuntur quia! Aliquam voluptate debitis nisi.',
      stock: false,
    },
  ];

  return (
    <div className="w-full h-screen bg-gradient-to-br from-zinc-50 to-zinc-200 flex gap-10 justify-center items-center">
      {data.map((elem, index) => (
        <div
          key={index}
          className="w-[90%] sm:w-[30vw] bg-white rounded-xl shadow-2xl overflow-hidden"
        >
          <div className="w-full h-40 sm:h-48 bg-gray-200">
            <img
              className="w-full h-full object-cover"
              src={elem.image}
              alt="Profile background"
            />
          </div>
          <div className="p-5">
            <h2 className="text-2xl font-serif font-bold text-gray-800">
              {elem.name}
            </h2>
            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
              {elem.description}
            </p>
            <button
              className={`mt-5 w-full py-2 ${
                elem.stock ? 'bg-sky-500' : 'bg-red-600'
              } text-white text-sm font-medium rounded-lg shadow-md hover:bg-blue-600 transition-all`}
            >
              {elem.stock ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
