import { useState } from "react";
import Menu from "./Menu";
import Dashboard from "./Dashboard";
import Tables from "./Tables";
import Billing from "./Billing";
import VirtualReality from "./VirtualReality";
import RTL from "./RTL";
import { useSelector } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";

export default function DashboardUI() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const activeTab = useSelector((state) => state.activeTab);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <div className="h-screen w-screen overflow-hidden flex bg-gray-200 relative">
            {/* Sidebar for larger screens */}
            <div className="hidden lg:block lg:w-1/6 h-full p-4">
                <Menu />
            </div>

            {/* Hamburger menu for smaller screens */}
            <div className="lg:hidden text-2xl p-2">
                <button onClick={toggleMenu} className="z-10 bg-gray-200 p-2 rounded-lg absolute top-5 right-5">
                    <GiHamburgerMenu />
                </button>

                {/* Fullscreen Menu */}
                {isMenuOpen && (
                    <>
                        {/* Background overlay */}
                        <div
                            onClick={closeMenu}
                            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm z-40"
                        ></div>

                        {/* Menu content */}
                        <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col p-6">
                            <button
                                onClick={closeMenu}
                                className="text-2xl font-bold self-end text-gray-500 hover:text-black"
                            >
                                X
                            </button>
                            <Menu />
                        </div>
                    </>
                )}
            </div>

            <hr className="hidden md-block w-1 h-full bg-gray-300" />

            {/* Main content area */}
            <div className="w-full lg:w-5/6 h-full overflow-scroll px-4">
                <div className="flex flex-col md:flex-row gap-4 justify-between p-4">
                    <div>
                        <p className="font-thick">
                            <span className="opacity-60">Pages</span> /{" "}
                            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                        </p>
                        <p className="text-lg font-bold">
                            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                        </p>
                    </div>
                    <div className="flex space-x-2 md:space-x-4 h-fit">
                        <input
                            type="text"
                            placeholder="Type Here..."
                            className="px-2 py-1 border-2 border-gray-300 rounded-lg"
                        />
                        <button className="border border-orange-600 text-orange-600 font-bold text-sm rounded-lg px-2 md:px-4 py-1">
                            Online Builder
                        </button>
                        <button className="font-bold text-gray-600 hidden md:block">
                            Sign In
                        </button>
                    </div>
                </div>

                {/* Dynamic Content Based on Active Tab */}
                {(() => {
                    switch (activeTab) {
                        case "dashboard":
                            return <Dashboard />;
                        case "tables":
                            return <Tables />;
                        case "billing":
                            return <Billing />;
                        case "virtualReality":
                            return <VirtualReality />;
                        case "rtl":
                            return <RTL />;
                        default:
                            return null;
                    }
                })()}

                {/* Footer */}
                <div className="flex justify-between p-4 text-md">
                    <p className="text-gray-500">
                        © 2025, made with by{" "}
                        <span className="font-bold text-black opacity-90">
                            Creative Tim
                        </span>{" "}
                        for a better web.
                    </p>
                    <div className="flex space-x-6 font-medium opacity-50">
                        <a href="#">Creative Tim</a>
                        <a href="#">About</a>
                        <a href="#">Blog</a>
                        <a href="#">License</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
