import React from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const SignupPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Sign Up</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white font-semibold"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-6">
          <p className="text-center text-sm">Or sign up with</p>
          <div className="flex justify-center mt-4 space-x-4">
            <button className="flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md">
              <FaGoogle className="mr-2" /> Google
            </button>
            <button className="flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-800 rounded-md">
              <FaGithub className="mr-2" /> GitHub
            </button>
          </div>
        </div>
        <p className="mt-6 text-center text-sm">
          Already have an account?{' '}
          <a href="/login" className="text-indigo-500 hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
