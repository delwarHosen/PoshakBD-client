import { useState } from "react"
import { IoMdClose } from "react-icons/io"
import CartContents from "../Cart/CartContents"


export default function CartDrawer({ drawerOpen, toggleCartDrawer }) {

    return (
        <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[480px] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}>
            {/* close button */}
            <div className="flex justify-end p-4">
                <button onClick={toggleCartDrawer}>
                    <IoMdClose className="h-6 w-6 text-gray-600" />
                </button>
            </div>

            {/* cart content */}
            <div className="grow p-4 overflow-y-auto">
                <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
                {/* cart component */}
               
                    <CartContents/>
               
            </div>

            {/* checkout button */}

            <div className="p-4 sticky bottom-0 bg-white">
                <button className="bg-black text-white w-full rounded-lg py-2 hover:bg-gray-800 font-semibold">Checkout</button>
                <p className="text-xs text-gray-500 tracking-tighter mt-2 font-semibold text-center">Shipping,texs and discount codes calculated at checkout</p>
            </div>
        </div>
    )
}
