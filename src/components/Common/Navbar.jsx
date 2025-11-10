import React from 'react'
import { HiBars3BottomRight, HiOutlineShoppingBag, HiOutlineUser } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="container mx-auto px-10 py-4 flex justify-between items-center">
            <div>
                <h2 to="/" className='text-2xl font-medium'>PoshakBD shop</h2>
            </div>
            <div className='hidden md:flex space-x-6'>
                <Link to="/" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Men</Link>
                <Link to="/" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Women</Link>
                <Link to="/" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Top wear</Link>
                <Link to="/" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Bottom wear</Link>
            </div>
            <div className="hidden md:flex gap-x-5 py-3">
                <Link to={"/profile"} className='hover:text-black'>
                    <HiOutlineUser className='h-6 w-6 text-gray-700' />
                </Link>
                <button className='relative hover:text-black'>
                    <HiOutlineShoppingBag className='h-6 w-6 text-gray-700' />
                    <span className='absolute -top-1 primary text-white text-xs rounded-full px-2 py-0.5'>4</span>
                </button>
                {/* search */}
                <button className='md:hidden'>
                    <HiBars3BottomRight className='h-6 w-6 text-gray-700' />
                </button>
            </div>
        </div>
    )
}
