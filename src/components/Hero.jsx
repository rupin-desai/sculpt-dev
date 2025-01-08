import React from 'react'

const Hero = () => {
  return (
    <section className="bg-gray-100 h-screen flex items-center justify-center text-center">
        <div>
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Building Your Vision
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            We design spaces that inspire and elevate .
          </p>
          <button className="px-6 py-3 bg-gray-800 text-white font-semibold rounded hover:bg-gray-700">
            Explore Projects
          </button>
        </div>
      </section>
  )
}

export default Hero