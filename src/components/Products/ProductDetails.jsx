import { useEffect, useState } from "react"
import { toast } from "sonner";

const selectedProducts = {
    name: "stylish jacket",
    price: 120,
    originalPrice: 150,
    description: "This is astylish jacket Perfect any occetion",
    brand: "fashionBD",
    material: "Leather",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Red"],
    images: [{

        url: "https://picsum.photos/500/500?random=1",
        altText: "Stylish Jacket 1"
    },
    {
        url: "https://picsum.photos/500/500?random=2",
        altText: "Stylish Jacket 2"
    }]
}

export default function ProductDetails() {

    const [mainImage, setMainImage] = useState("");
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [isButtonDisable, setIsButtonDisable] = useState(false);

    const handleQuantityChange = (action) => {
        if (action === "plus") setQuantity((prev) => prev + 1);
        if (action === "minus" && quantity > 0) setQuantity((prev) => prev - 1)
    }

    const handleAddToCart = () => {
        if (!selectedSize || !selectedColor) {
            toast.error("Please selected size and color before adding cart", {
                duration: 1000
            })
            return

        }

        setIsButtonDisable(true)

        setTimeout(() => {
            toast.success("Product Add to Cart", {
                duration: 1000
            })
            setIsButtonDisable(false)
        }, 500)
    }


    useEffect(() => {
        if (selectedProducts?.images?.length > 0) {
            setMainImage(selectedProducts.images[0].url)
        }
    }, [selectedProducts])

    return (
        <div className="p-6">
            <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
                <div className="flex flex-col md:flex-row">
                    {/* left thumnail */}
                    <div className="hidden md:flex flex-col space-y-4 mr-6">
                        {
                            selectedProducts.images.map((image, index) => (
                                <img key={index} src={image?.url} alt={image.altText || `Thumbnail ${index}`}
                                    className={`h-20 w-20 object-cover border cursor-pointer rounded-lg ${mainImage === image.url ? "border-black" : "border-gray-300"}`}

                                    onClick={() => setMainImage(image.url)}
                                />
                            ))
                        }
                    </div>
                    {/* Main Image */}
                    <div className="md:w-1/2">
                        <div className="mb-4">
                            <img src={mainImage} alt="Main Product"
                                className="w-full h-auto object-cover rounded-lg"
                            />
                        </div>
                    </div>
                    {/* For Mobile */}
                    <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
                        {
                            selectedProducts.images.map((image, index) => (
                                <img key={index} src={image?.url} alt={image.altText || `Thumbnail ${index}`}
                                    className={`h-20 w-20 object-cover border cursor-pointer rounded-lg ${mainImage === image.url ? "border-black" : "border-gray-300"}`}
                                    onClick={() => setMainImage(image.url)}
                                />
                            ))
                        }
                    </div>

                    {/* Right section */}
                    <div className="md:w-1/2 md:ml-10">
                        <h1 className="text-2xl md:text-3xl font-semibold mb-2">
                            {selectedProducts?.name}
                        </h1>
                        <p className="text-lg text-gray-600 mb-1 line-through">
                            {selectedProducts.originalPrice && `${selectedProducts.originalPrice}`}
                        </p>
                        <p className="text-xl text-gray-500 mb-2 font-semibold">
                            ${selectedProducts.price}
                        </p>
                        <p className="text-gray-600 mb-4">{selectedProducts.description}</p>

                        <div className="mb-4">
                            <p className="text-gray-700">Color:</p>
                            <div className="flex gap-2 m-2">
                                {
                                    selectedProducts.colors.map((color) => (
                                        <button
                                            key={color}
                                            onClick={() => setSelectedColor(color)}
                                            className={`h-8 w-8 rounded-full border ${selectedColor === color ? "border-4 border-black" : "border-gray-300"}`}
                                            style={{
                                                backgroundColor: color.toLocaleLowerCase(),
                                                filter: "brightness(0.5)"
                                            }}
                                        >

                                        </button>
                                    ))
                                }
                            </div>
                        </div>


                        <div className="mb-4">
                            <p className="text-gray-700">Size:</p>
                            <div className="flex gap-2 m-2">
                                {
                                    selectedProducts.sizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`px-4 py-2 rounded border ${selectedSize === size ? "bg-black text-white" : ""}`}
                                        >
                                            {size}
                                        </button>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="mb-4">
                            <p className="text-gray-700">Quantity:</p>
                            <div className="flex items-center space-x-4 mt-3">
                                <button
                                    onClick={() => handleQuantityChange("minus")}
                                    className="h-7 w-7 rounded-sm p-1 border border-gray-400">-</button>
                                <span className="text-lg">{quantity}</span>
                                <button
                                    onClick={() => handleQuantityChange("plus")}
                                    className="h-7 w-7 rounded-sm p-1 border border-gray-400">+</button>
                            </div>
                        </div>

                        <button
                            onClick={handleAddToCart}
                            disabled={isButtonDisable}
                            className={`btn w-3/4 text-white rounded-md bg-black hover:bg-gray-800 ${isButtonDisable ? "cursor-not-allowed opacity-50" : "hover:bg-gray-900"}`}>
                            {isButtonDisable ? "Adding..." : "ADD TO CART"}</button>

                        <div className="mt-10 text-gray-700 ">
                            <h2 className="text-xl font-bold mb-4">Characteristics: </h2>
                            <table className="w-full text-left text-sm text-gray-600">
                                <tbody>
                                    <tr>
                                        <td className="py-1">Brand :</td>
                                        <td className="py-1">{selectedProducts.brand}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-1">Material :</td>
                                        <td className="py-1">{selectedProducts.material}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
