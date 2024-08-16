import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-white border-b-[1px] border-gray-300 flex items-center justify-between px-4 py-1">
            <div className="flex items-center space-x-4">
                <div className="text-[18px] font-bold flex items-center">Hexaa</div>
                <div className="space-x-4 hidden md:flex text-[14px]">
                    <Link to="/site-settings" className="text-dark-text hover:text-blue-600">Site Settings</Link>
                    <Link to="/dev-mode" className="text-dark-text hover:text-blue-600">Dev Mode</Link>
                    <Link to="/hire-professional" className="text-dark-text hover:text-blue-600">Hire a Professional</Link>
                    <Link to="/help" className="text-dark-text hover:text-blue-600">Help</Link>
                </div>
            </div>

            <div className="flex items-center space-x-4 text-[14px]">
                <Link to="/upgrade" className="text-[#D37AF0] hover:text-blue-600">Upgrade</Link>
                <Link to="/save" className="text-dark-text hover:text-blue-600">Save</Link>
                <Link to="/preview" className="text-[#5E6DFF] hover:text-blue-600">Preview</Link>
                <button className="bg-[#5999FF] text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
                    Publish
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
