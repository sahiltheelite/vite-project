import React, { useState } from 'react';

function Profile() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-orange-300 shadow-lg rounded-lg">
      <p className="text-gray-700 mb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta laborum architecto optio eligendi est laboriosam ipsam corporis fugiat necessitatibus, magni voluptatibus doloribus suscipit ratione temporibus. Velit consequatur ea nobis doloremque?
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2 text-sm font-medium text-gray-600">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 text-sm font-medium text-gray-600">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="mb-2 text-sm font-medium text-gray-600">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Profile;
