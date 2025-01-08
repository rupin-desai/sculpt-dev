import React from 'react'

const About = () => {
  return (
    <section className="bg-gray-200 py-16 px-6">
    <div className="container mx-auto flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 md:pr-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
        <p className="text-lg text-gray-600 mb-4">
          ArchDesign is a premier architecture firm dedicated to creating
          innovative and sustainable spaces tailored to your needs.
        </p>
        <p className="text-lg text-gray-600">
          Our team of skilled architects and designers are passionate about
          bringing your vision to life.
        </p>
      </div>
      <div className="md:w-1/2">
        <img
          src="https://via.placeholder.com/500x300"
          alt="About Us"
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  </section>
  )
}

export default About