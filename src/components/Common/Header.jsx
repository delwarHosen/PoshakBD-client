import Topbar from "../Layout/Topbar";
import Navbar from "./Navbar";



export default function Header() {
    return (
        <header>
            {/* top bar */}
            <Topbar />
            {/* navbar */}
            <Navbar />
            {/* cart drawer */}
        </header>
    )
}
