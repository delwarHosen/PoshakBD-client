import { useState } from "react"
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";


export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleSearch = () => {
        setIsOpen(true)
    }

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Search result:", searchTerm)
        setIsOpen(false)
    }

    return (
        <div className={`flex justify-center items-center w-full transition-all duration-300 ${isOpen ? 'absolute top-0 left-0 w-full bg-white h-24 z-50' : 'w-auto'}`}>
            {
                isOpen ? (<form onSubmit={handleSearch} className="relative flex justify-center items-center w-full">
                    <div className="relative w-1/2">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700" placeholder="Search" />

                        <button
                            type="submit"
                            className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800">
                            <HiMagnifyingGlass className="h-6 w-6" />
                        </button>
                    </div>
                    {/* close button  */}
                    <button
                        typeof="button"
                        onClick={handleToggleSearch}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2  text-gray-600 hover:text-gray-800">
                        <HiMiniXMark className="h-6 w-6" />
                    </button>
                </form>)
                    :
                    (
                        <button
                            onClick={handleToggleSearch}>
                            <HiMagnifyingGlass className="h-6 w-5" />
                        </button>
                    )
            }
        </div>
    )
}
