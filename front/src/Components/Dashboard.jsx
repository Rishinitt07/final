import React from 'react'
import { Link } from 'react-router-dom'


const Dashboard = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
    <div className="w-full max-w-md p-8 bg-yellow-100 border border-yellow-400 shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold text-center text-yellow-800 mb-6">
        Construction Login Portal
      </h1>
      <div className="flex flex-col gap-4">
        <Link to ="/admlogin"><button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg py-2 px-4 w-full">
          Login as Admin
        </button></Link>
        <Link to ="/mlogin"><button className="bg-gray-700 hover:bg-gray-800 text-white font-semibold rounded-lg py-2 px-4 w-full">
          Login as Manager
        </button></Link>
        <Link to = "/slogin"><button className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg py-2 px-4 w-full">
          Login as Site Worker
        </button></Link>
      </div>
    </div>
  </div>
  )
}

export default Dashboard