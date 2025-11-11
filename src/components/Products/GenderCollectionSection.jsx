import { Link } from "react-router-dom"
import womenImg from "../../assets/women.jpg"
import menImg from "../../assets/men.jpg"

export default function GenderCollectionSection() {
    return (
        <section className="py-16 px-4 lg:px-0">
            <div className=" md:container flex flex-col md:flex-row gap-8">
                {/* women section */}
                <div className="relative flex-1">
                    <img
                        src={womenImg}
                        alt="Womwn img"
                        className="w-full h-[700px] object-cover rounded-sm"
                    />
                    <div className="absolute bottom-8 left-8 bg-white/80 p-4">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            Women&aps;s Collection
                        </h2>
                        <Link to="/collections/all?gender=women" className="text-gray-900 underline">Shop Now</Link>
                    </div>
                </div>
                {/* men section */}
                <div className="relative flex-1">
                    <img
                        src={menImg}
                        alt="Womwn img"
                        className="w-full h-[700px] object-cover rounded-sm"
                    />
                    <div className="absolute bottom-8 left-8 bg-white/80 p-4">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            Men&aps;s Collection
                        </h2>
                        <Link to="/collections/all?gender=women" className="text-gray-900 underline">Shop Now</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
