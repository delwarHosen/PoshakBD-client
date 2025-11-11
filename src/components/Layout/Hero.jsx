import { Link } from "react-router-dom"
import heroImg from "../../assets/hero.jpg"

export default function Hero() {
    return (
        <section className="relative">
            <img src={heroImg} alt="Hero img" className="w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover" />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="text-center text-white p-6">
                    <h1 className="text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4">
                        Vacation <br /> Ready
                    </h1>
                    <p className="text-xl mb-5 font-medium">Explor our vacation-ready outfit with fast worldwide shipping</p>
                    <Link to="#" className="px-4 py-2 text-sm rounded-md text-gray-700 bg-white hover:bg-gray-200">Shop Now</Link>
                </div>
            </div>
        </section>
    )
}
