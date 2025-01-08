import React from 'react'

const Contact = () => {
  return (
    <section className="container mx-auto py-16 px-6">
    <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
      Contact Us
    </h2>
    <form className="max-w-lg mx-auto bg-white p-6 shadow-md rounded">
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Name
        </label>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Email
        </label>
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Message
        </label>
        <textarea
          placeholder="Your Message"
          className="w-full border border-gray-300 rounded px-3 py-2 h-32"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700"
      >
        Send Message
      </button>
    </form>
  </section>
  )
}

export default Contact