import { RiDeleteBin3Line } from "react-icons/ri"


export default function CartContents() {
    const cartProducts = [
        {
            productId: 1,
            name: "T-shirt",
            size: "M",
            color: "Blue",
            quantity: 12,
            price: 19,
            image: "https://picsum.photos/200?random=1"
        },
        {
            productId: 2,
            name: "Jeans",
            size: "L",
            color: "Gray",
            quantity: 5,
            price: 25,
            image: "https://picsum.photos/200?random=2"
        },
    ]
    return (
        <div>
            {
                cartProducts.map((product, index) => (
                    <div key={index} className="flex items-start justify-between py-4 border-b border-gray-500">
                        <div className="flex items-start space-x-2">
                            <img src={product.image} alt={product.name} className="h-24 w-20 rounded-sm object-cover" />
                            <div className="my-2">
                                <h3>{product.name}</h3>
                                <p className="text-xs font-medium text-gray-400">Color: {product.color} | Size: {product.size}</p>
                                <div className="mt-2 ">
                                    <button className="h-7 w-7 rounded-sm p-1 border border-gray-400">-</button>
                                    <span className="m-3">{product.quantity}</span>
                                    <button className="h-7 w-7 rounded-sm p-1 border border-gray-400">+</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="font-medium">${product.price}</p>
                            <button>
                                <RiDeleteBin3Line className="h-6 w-6 text-red-600 mt-2" />
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
