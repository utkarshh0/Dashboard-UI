import { useState } from "react";
import Menu from "./Menu";
import Dashboard from "./Dashboard";
import Tables from './Tables'
import Billing from './Billing'
import VirtualReality from './VirtualReality'
import RTL from './RTL'
import { useSelector } from "react-redux";

export default function DashboardUI() {
    
    const activeTab = useSelector(state => state.activeTab)
    return (
        <div className="h-screen w-screen overflow-hidden flex bg-gray-200">
            <div className="md:w-2/6 lg:w-1/6 h-full p-4">
                <Menu />
            </div>
            <hr  className="w-1 h-full bg-gray-300"/>
            <div className="w-5/6 h-full overflow-scroll px-4">
                <div className="flex justify-between p-4">
                    <div>
                        <p className="font-thick"><span className="opacity-60">Pages</span> / {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</p>
                        <p className="text-lg font-bold">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</p>
                    </div>
                    <div className="flex space-x-4 h-fit">
                        <input type="text" placeholder="Type Here..." className="px-2 py-1 border-2 border-gray-300 rounded-lg"/>
                        <button className="border border-orange-600 text-orange-600 font-bold text-sm rounded-lg px-4 py-1">Online Builder</button>
                        <button className="font-bold text-gray-600">Sign In</button>
                    </div>
                </div>
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
                    }
                })()}
                <div className="flex justify-between p-4 text-md">
                    <p className="text-gray-500">© 2025, made with by <span className="font-bold text-black opacity-90">Creative Tim</span> for a better web.</p>
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
