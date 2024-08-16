// import React from 'react';
// import { FaGlobe, FaUndo, FaRedo, FaTools, FaSearch } from 'react-icons/fa';
// import { IoPhonePortraitOutline } from "react-icons/io5";
// import { SlScreenDesktop } from "react-icons/sl";
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// import { RiCloseFill } from "react-icons/ri";
// import { HiMinusSm } from "react-icons/hi";


// const Header: React.FC = () => {
//     return (
//         <header className="bg-white border-b-[1px] border-gray-300 shadow-md flex items-center px-4 py-0">
//             <div className="flex items-center space-x-4 w-[20%]">
//                 <div className="flex items-center space-x-2 py-1">
//                     <span>Page:</span>
//                     <div className=' flex items-center px-2 py-1 gap-5'>
//                         <span className="text-gray-700 hover:text-[#116DFF]">Home</span>
//                         <MdOutlineKeyboardArrowDown className="text-gray-500" />
//                     </div>
//                 </div>
//                 <div className="flex items-center space-x-2 py-2 pl-4 border-l-[1px] border-gray-400">
//                     <div className="flex items-center justify-center w-8 h-8 rounded-full border border-[#116DFF] bg-[#E7F0FF]">
//                         <SlScreenDesktop className="text-[#116DFF]" />
//                     </div>
//                     <div className="flex items-center justify-center w-8 h-8 rounded-full border border-[#116DFF] bg-[#E7F0FF]">
//                         <IoPhonePortraitOutline className="text-[#116DFF]" />
//                     </div>
//                 </div>
//             </div>
//             <div className="flex items-center space-x-2 w-[50%] py-3 pl-4 border-l-[1px] border-gray-400">
//                 <div className=' flex items-center justify-start bg-[#F7F8F8] w-full rounded-full'>
//                     <div className='px-4 flex items-center space-x-2 bg-[#FFFFFF] rounded-full border-[1px] border-gray-200'>
//                         <FaGlobe className="text-gray-700" />
//                         <button>https://www.google.com</button>
//                         <a href="https://www.google.com" className="text-[#C469F1] hover:underline">Connect your domain</a>
//                         <span className='pl-5'><RiCloseFill />
//                         </span>
//                     </div>
//                 </div>
//             </div>

//             <div className="flex items-center space-x-4 w-[30%] justify-end">
//                 <div className="flex items-center space-x-2 py-4 pl-4 border-l-[1px] border-gray-400">
//                     <button className="text-gray-700 hover:text-blue-600">
//                         <FaUndo />
//                     </button>
//                     <button className="text-gray-700 hover:text-blue-600">
//                         <FaRedo />
//                     </button>
//                 </div>
//                 <div className="flex items-center space-x-2 pl-4 py-3 border-l-[1px] border-gray-400">
//                     <div className="flex items-center justify-center w-4 h-4 rounded-full border border-gray-300">
//                         <span className="text-gray-700"><HiMinusSm />
//                         </span>
//                     </div>
//                     <span className="text-gray-700">100%</span>
//                 </div>
//                 <div className="flex items-center space-x-2 pl-4 py-3 border-l-[1px] border-gray-400">
//                     <FaTools className="text-gray-700" />
//                     <span className="text-gray-700">Tools</span>
//                 </div>
//                 <div className="flex items-center space-x-2 h-full pl-4 border-l-[1px] py-3 border-gray-400">
//                     <FaSearch className="text-gray-700" />
//                     <span className="text-gray-700">Search</span>
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default Header;

import React from 'react';
import { FaGlobe, FaUndo, FaRedo, FaTools, FaSearch } from 'react-icons/fa';
import { IoPhonePortraitOutline } from "react-icons/io5";
import { SlScreenDesktop } from "react-icons/sl";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiCloseFill } from "react-icons/ri";
import { HiMinusSm } from "react-icons/hi";

const Header: React.FC = () => {
    return (
        <header className="bg-white border-b-[1px] border-gray-300 shadow-md flex items-center px-4 py-0">
            <div className="flex items-center space-x-4 flex-shrink-0 w-[22%]">
                <div className="flex items-center space-x-2 py-1">
                    <span>Page:</span>
                    <div className='flex items-center px-2 py-1 gap-5'>
                        <span className="text-gray-700 hover:text-[#116DFF]">Home</span>
                        <MdOutlineKeyboardArrowDown className="text-gray-500" />
                    </div>
                </div>
                <div className="flex items-center space-x-2 py-2 pl-4 border-l-[1px] border-gray-400">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full border border-[#116DFF] bg-[#E7F0FF]">
                        <SlScreenDesktop className="text-[#116DFF]" />
                    </div>
                    <div className="flex items-center justify-center w-8 h-8 rounded-full border border-[#116DFF] bg-[#E7F0FF]">
                        <IoPhonePortraitOutline className="text-[#116DFF]" />
                    </div>
                </div>
            </div>
            <div className="flex-grow flex items-center py-3 pl-4 border-l-[1px] border-gray-400">
                <div className='flex items-center bg-[#F7F8F8] w-full rounded-full'>
                    <div className='flex items-center px-4 space-x-2 bg-[#FFFFFF] rounded-full border-[1px] border-gray-200'>
                        <FaGlobe className="text-gray-700" />
                        <button className="text-gray-700">https://www.google.com</button>
                        <a href="https://www.google.com" className="text-[#C469F1] hover:underline">Connect your domain</a>
                        <span className='pl-5'><RiCloseFill /></span>
                    </div>
                </div>
            </div>
            <div className="flex items-center space-x-4 flex-shrink-0 w-[30%] justify-end">
                <div className="flex items-center space-x-2 py-4 pl-4 border-l-[1px] border-gray-400">
                    <button className="text-gray-700 hover:text-blue-600">
                        <FaUndo />
                    </button>
                    <button className="text-gray-700 hover:text-blue-600">
                        <FaRedo />
                    </button>
                </div>
                <div className="flex items-center space-x-2 pl-4 py-3 border-l-[1px] border-gray-400">
                    <div className="flex items-center justify-center w-4 h-4 rounded-full border border-gray-300">
                        <span className="text-gray-700"><HiMinusSm /></span>
                    </div>
                    <span className="text-gray-700">100%</span>
                </div>
                <div className="flex items-center space-x-2 pl-4 py-3 border-l-[1px] border-gray-400">
                    <FaTools className="text-gray-700" />
                    <span className="text-gray-700">Tools</span>
                </div>
                <div className="flex items-center space-x-2 pl-4 py-3 border-l-[1px] border-gray-400">
                    <FaSearch className="text-gray-700" />
                    <span className="text-gray-700">Search</span>
                </div>
            </div>
        </header>
    );
};

export default Header;


