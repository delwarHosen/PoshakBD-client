import Topbar from "../Layout/Topbar";
import Navbar from "./Navbar";



export default function Header() {
    return (
        <header className="border-b border-gray-200">
            {/* top bar */}
            <Topbar />
            {/* navbar */}
            <Navbar />
            {/* cart drawer */}
        </header>
    )
}
