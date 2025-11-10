import { HiBars3BottomRight, HiOutlineShoppingBag, HiOutlineUser } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import CartDrawer from '../Layout/CartDrawer'
import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'

export default function Navbar() {
    const [navDrawerOpen, setNavDrawerOpen] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false)

    const toggleNavDrawer = () => {
        setNavDrawerOpen(!navDrawerOpen)
    }

    const toggleCartDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }

    return (
        <>
            <nav className="container mx-auto md:px-10 px-5 py-1 flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-medium">PoshakBD shop</h2>
                </div>

                {/* Desktop links */}
                <div className="hidden md:flex space-x-6">
                    <Link to="/" className="text-gray-700 hover:text-black text-sm font-medium uppercase">Men</Link>
                    <Link to="/" className="text-gray-700 hover:text-black text-sm font-medium uppercase">Women</Link>
                    <Link to="/" className="text-gray-700 hover:text-black text-sm font-medium uppercase">Top wear</Link>
                    <Link to="/" className="text-gray-700 hover:text-black text-sm font-medium uppercase">Bottom wear</Link>
                </div>

                {/* Desktop icons */}
                <div className="flex gap-x-5 py-3 md:mr-0 -mr-24">
                    <Link to={"/profile"} className="hover:text-black">
                        <HiOutlineUser className="h-6 w-6 text-gray-700" />
                    </Link>
                    <button onClick={toggleCartDrawer} className="relative hover:text-black">
                        <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
                        <span className="absolute -top-1 primary text-white text-xs rounded-full px-2 py-0.5">4</span>
                    </button>
                    <div className="overflow-hidden">
                        <SearchBar />
                    </div>
                </div>

                {/*  Mobile Menu Button */}
                <button
                    onClick={toggleNavDrawer}
                    className="md:hidden"
                >
                    <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
                </button>
            </nav>

            <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
            {/* Mobile navigation */}
            <div className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${navDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className='flex justify-end p-4'>
                    <button onClick={toggleNavDrawer}>
                        <IoMdClose className='h-6 w-6 text-gray-700' />
                    </button>
                </div>
                <div className='p-4'>
                    <h2 className='text-xl text-gray-600 font-semibold'>Menu</h2>
                    <nav className='mt-4 space-y-4'>
                        <Link
                            to="#"
                            onClick={toggleNavDrawer}
                            className='block text-gray-700 hover:text-black text-xs font-medium uppercase'>Men</Link>

                        <Link
                            to="#"
                            onClick={toggleNavDrawer}
                            className='block text-gray-700 hover:text-black text-xs font-medium uppercase'>Women</Link>

                        <Link
                            to="#"
                            onClick={toggleNavDrawer}
                            className='block text-gray-700 hover:text-black text-xs font-medium uppercase'>Top Wear</Link>

                        <Link
                            to="#"
                            onClick={toggleNavDrawer}
                            className='block text-gray-700 hover:text-black text-xs font-medium uppercase'>Bottom Wear</Link>
                    </nav>

                </div>
            </div>

        </>
    )
}

