import React, { useState } from 'react';
import {
    FaPlus,
    // FaCreditCard,
    // FaFileAlt,
    // FaFont,
    // FaThLarge,
    // FaThList,
    // FaImage,
} from 'react-icons/fa';
// import { RxLayers } from "react-icons/rx";
// import { BsStars } from 'react-icons/bs';
import {AddElement} from '../Menu-Content/AddElement';

import textData from '../../data/text.json';
import { useEditor } from '@craftjs/core';

console.log({textData})

interface IconMenu {
    Icon: React.ElementType;
    label: string;
    menuData: any;  // You can define a more specific type based on your JSON structure
}

const Sidebar: React.FC = () => {
    const [openMenu, setOpenMenu] = useState<string | null>(null);

    const handleMenuClick = (label: string) => {
        setOpenMenu(openMenu === label ? null : label);
    };

    const closeMenu = () => {
        setOpenMenu(null);
    };

    const {connectors} = useEditor()

    const mainIcons: IconMenu[] = [
        {
            Icon: FaPlus,
            label: 'Add',
            menuData: textData,  // Assuming no specific JSON data for the 'Add' menu
        },
        // {
        //     Icon: FaCreditCard,
        //     label: 'Card',
        //     menuData: cardData,
        // },
        // {
        //     Icon: FaFileAlt,
        //     label: 'Document',
        //     menuData: documentData,
        // },
        // {
        //     Icon: FaFont,
        //     label: 'Text',
        //     menuData: textData,
        // },
        // {
        //     Icon: FaThLarge,
        //     label: 'Grid',
        //     menuData: gridData,
        // },
        // {
        //     Icon: FaThList,
        //     label: 'List',
        //     menuData: listData,
        // },
        // {
        //     Icon: FaImage,
        //     label: 'Image',
        //     menuData: imageData,
        // },
    ];

    // const bottomIcons: IconMenu[] = [
    //     {
    //         Icon: BsStars,
    //         label: 'Effects',
    //         menuData: effectsData,
    //     },
    //     {
    //         Icon: RxLayers,
    //         label: 'Layers',
    //         menuData: layersData,
    //     },
    // ];

    const IconButton = ({ Icon, label }: { Icon: React.ElementType; label: string }) => (
        <button
            className="w-[32px] h-[32px] flex items-center justify-center rounded-full hover:bg-[#EBF2FF] group focus:outline-none"
            onClick={() => handleMenuClick(label)}
        >
            <Icon className="text-black group-hover:text-blue-500 text-[18px]" />
        </button>
    );

    return (
        <div className="w-16 h-full bg-[#FFFFFF] shadow-lg flex flex-col justify-between py-4 relative">
            <div className="flex flex-col items-center space-y-6">
                {mainIcons.map(({ Icon, label, menuData }, index) => (
                    <div key={index} className="">
                        <IconButton Icon={Icon} label={label} />
                        {openMenu === label && (
                            <div className="absolute-menu left-16 top-0 bg-white shadow-lg z-10">
                                <AddElement closeMenu={closeMenu} menuData={menuData} connectors={connectors} />
                            </div>
                        )}
                    </div>
                ))}
            </div>
            {/* <div className="flex flex-col items-center space-y-4">
                {bottomIcons.map(({ Icon, label, menuData }, index) => (
                    <div key={index} className="">
                        <IconButton Icon={Icon} label={label} />
                        {openMenu === label && (
                            <div className="absolute-menu left-16 top-0 bg-white shadow-lg z-10">
                                <AddElement closeMenu={closeMenu} menuData={menuData} connectors={{}} />
                            </div>
                        )}
                    </div>
                ))}
            </div> */}
        </div>
    );
};

export default Sidebar;
