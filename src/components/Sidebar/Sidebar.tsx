import React, { useState } from 'react';
import {
    FaPlus,
    FaCreditCard,
    FaFileAlt,
    FaFont,
    FaThLarge,
    FaThList,
    FaImage,
} from 'react-icons/fa';
import { RxLayers } from "react-icons/rx";
import { BsStars } from 'react-icons/bs';
import AddElement from '../Menu-Content/AddElement';

interface IconMenu {
    Icon: React.ElementType;
    label: string;
    menuContent: React.ReactNode;
}

const Sidebar = () => {
    const [openMenu, setOpenMenu] = useState<string | null>(null);

    const handleMenuClick = (label: string) => {
        setOpenMenu(openMenu === label ? null : label);
    };

    const closeMenu = () => {
        setOpenMenu(null);
    };

    const mainIcons: IconMenu[] = [
        {
            Icon: FaPlus,
            label: 'Add',
            menuContent: (
                <AddElement closeMenu={closeMenu} />
            ),
        },
        {
            Icon: FaCreditCard,
            label: 'Card',
            menuContent: (
                <AddElement closeMenu={closeMenu} />
            ),
        },
        {
            Icon: FaFileAlt,
            label: 'Document',
            menuContent: (
                <AddElement closeMenu={closeMenu} />
            ),
        },
        {
            Icon: FaFont,
            label: 'Text',
            menuContent: (
                <AddElement closeMenu={closeMenu} />
            ),
        },
        {
            Icon: FaThLarge,
            label: 'Grid',
            menuContent: (
                <AddElement closeMenu={closeMenu} />
            ),
        },
        {
            Icon: FaThList,
            label: 'List',
            menuContent: (
                <AddElement closeMenu={closeMenu} />
            ),
        },
        {
            Icon: FaImage,
            label: 'Image',
            menuContent: (
                <AddElement closeMenu={closeMenu} />
            ),
        },
    ];

    const bottomIcons: IconMenu[] = [
        {
            Icon: BsStars,
            label: 'Effects',
            menuContent: (
                <AddElement closeMenu={closeMenu} />
            ),
        },
        {
            Icon: RxLayers,
            label: 'Layers',
            menuContent: (
                <AddElement closeMenu={closeMenu} />
            ),
        },
    ];

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
                {mainIcons.map(({ Icon, label }, index) => (
                    <div key={index} className="">
                        <IconButton Icon={Icon} label={label} />
                        {openMenu === label && (
                            <div className="absolute-menu left-16 top-0 bg-white shadow-lg z-10">
                                {mainIcons.find(icon => icon.label === label)?.menuContent}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="flex flex-col items-center space-y-4">
                {bottomIcons.map(({ Icon, label }, index) => (
                    <div key={index} className="">
                        <IconButton Icon={Icon} label={label} />
                        {openMenu === label && (
                            <div className="absolute-menu left-16 top-0 bg-white shadow-lg z-10">
                                {bottomIcons.find(icon => icon.label === label)?.menuContent}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;

