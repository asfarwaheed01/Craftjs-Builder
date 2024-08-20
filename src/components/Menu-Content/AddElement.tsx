// import React, { useState } from 'react';
// import { Element, ElementProps } from '@craftjs/core';
// import { Heading } from '../UserComponents/Heading';
// import { Button } from '../UserComponents/Buttons/Button';

// type ComponentMap = {
//   Heading: typeof Heading;
//   Button: typeof Button;
// };

// type ComponentProps = {
//   text?: string;
//   src?: string;
//   buttonType?: string;
//   [key: string]: any;
// };

// type MenuData = {
//   [key: string]: { type: keyof ComponentMap; props: ComponentProps }[] | MenuData;
// };

// type AddElementProps = {
//   closeMenu: () => void;
//   menuData: MenuData;
//   connectors: {
//     create: (ref: HTMLElement | null, node: React.ReactElement) => void;
//   };
// };

// // add componeents here
// const componentMap: ComponentMap = {
//   Heading,
//   Button,
// };

// const renderComponent = (
//   type: keyof ComponentMap,
//   props: ComponentProps,
//   connectors: AddElementProps['connectors']
// ) => {
//   const Component = componentMap[type];
//   return (
//     <div
//       key={props.text || props.src || Math.random().toString(36).substring(2, 15)}
//       ref={(ref: HTMLDivElement | null) =>
//         connectors.create(ref, <Element is={Component} {...(props as ElementProps<typeof Component>)} />)
//       }
//       className="cursor-move"
//     >
//       {type === 'Button' ? (
//         <button
//           className={`bg-${props.buttonType === 'primary' ? 'blue' : 'gray'}-500 text-white px-4 py-2 rounded`}
//         >
//           {props.text}
//         </button>
//       ) : (
//         props?.text || props.src
//       )}
//     </div>
//   );
// };

// const renderNestedMenu = (
//   data: MenuData | { type: keyof ComponentMap; props: ComponentProps }[],
//   originalData: MenuData | { type: keyof ComponentMap; props: ComponentProps }[],
//   connectors: AddElementProps['connectors'],
//   handleItemClick: (level: number, key: string) => void,
//   level: number,
//   selectedKeys: string[]
// ): React.ReactNode => {

//   const levelString = level.toString();
//   console.log({data, originalData, level, levelString})

//   if (Array.isArray(data) && data.length > 0 && 'type' in data[0]) {
//     return data.map(({ type, props }) => renderComponent(type, props, connectors));
//   }

//   return (
//     <div className='w-[700px]'>
//       {(originalData?.[levelString] as { label: string; id: string }[])?.map((item) => {
//         const nextLevelString = (level + 1).toString()
//         console.log({item, level, originalData, value: originalData?.[nextLevelString]})

//         return (
//         <div key={item.id} className="mb-2 flex justify-between w-full">
//           <button
//             onClick={() => handleItemClick(level, item.id)}
//             className={`mb-2 ${selectedKeys[level] === item.id ? 'bg-blue-500' : 'bg-gray-500'} text-white px-4 py-2 rounded`}
//           >
//             {item.label}
//           </button>
//           <div className='flex flex-col w-[30%]'>
//           {selectedKeys[level] === item.id &&
//             renderNestedMenu(originalData?.[nextLevelString]?.[item.id], originalData, connectors, handleItemClick, level + 1, selectedKeys)}
//             </div>
//         </div>
//       )})}
//     </div>
//   );
// };

// export const AddElement: React.FC<AddElementProps> = ({ menuData, connectors, closeMenu }) => {
//   const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

//   const handleItemClick = (level: number, key: string) => {
//     setSelectedKeys((prev) => {
//       const newSelectedKeys = [...prev];
//       newSelectedKeys[level] = key;
//       return newSelectedKeys.slice(0, level + 1);
//     });
//   };

//   return (
//     <div>
//       {
//         Object.keys(menuData)?.map((key)=> {

//           return(
//             <div className='flex w-full'>
//                <div onClick={closeMenu} className=" mb-4 bg-red-500 max-h-[50px] text-black px-4 py-2 rounded">
//                   {key}
//                 </div>
//               <div className=''>{renderNestedMenu(menuData[key], menuData[key], connectors, handleItemClick, 1, selectedKeys)}</div>
//             </div>

//             )
//         })
//       }

//     </div>
//   );
// };

import React, { useState, useRef, useEffect } from "react";
import { Element, ElementProps } from "@craftjs/core";
import { Heading } from "../UserComponents/Heading";
import { Text } from "../UserComponents/Text/Text";
import { Button } from "../UserComponents/Buttons/Button";
import { Column } from "../UserComponents/Columns/Columns";
import { Wrapper } from "../UserComponents/Wrapper/Wrapper";
import { FaSearch } from "react-icons/fa";
import { BsQuestion } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion";

type ComponentMap = {
  Heading: typeof Heading;
  Button: typeof Button;
  Text: typeof Text;
  Column: typeof Column;
  Wrapper: typeof Wrapper;
};

type ComponentProps = {
  text?: string;
  src?: string;
  buttonType?: string;
  [key: string]: any;
};

type MenuData = {
  [key: string]:
    | { type: keyof ComponentMap; props: ComponentProps }[]
    | MenuData;
};

type AddElementProps = {
  closeMenu: () => void;
  menuData: MenuData;
  connectors: {
    create: (ref: HTMLElement | null, node: React.ReactElement) => void;
  };
};

const componentMap: ComponentMap = {
  Heading,
  Button,
  Text,
  Column,
  Wrapper
};

const renderComponent = (
  type: keyof ComponentMap,
  props: ComponentProps,
  connectors: AddElementProps["connectors"]
) => {
  const Component = componentMap[type];
  return (
    <div
      key={
        props.text || props.src || Math.random().toString(36).substring(2, 15)
      }
      ref={(ref: HTMLDivElement | null) =>
        connectors.create(
          ref,
          <Element
            is={Component}
            {...(props as ElementProps<typeof Component>)}
          />
        )
      }
      className="cursor-move"
      data-id={props.text || props.src}
    >
      {type === "Button" ? (
        <button
          className={`bg-${
            props.buttonType === "primary" ? "red" : "gray"
          }-500 text-white px-4 py-2 rounded`}
        >
          {props.text}
        </button>
      ) : (
        props?.text || props.src
      )}
    </div>
  );
};

export const AddElement: React.FC<AddElementProps> = ({
  menuData,
  connectors,
  closeMenu,
}) => {
  const firstKey = Object.keys(menuData)[0];
  const [selectedCategory, setSelectedCategory] = useState<string>(firstKey);
  const firstSubCategory =
    selectedCategory && "1" in menuData[selectedCategory]
      ? (menuData[selectedCategory]["1"] as { label: string; id: string }[])[0]
          .id
      : null;
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(
    firstSubCategory
  );
  const thirdColumnRef = useRef<HTMLDivElement | null>(null);
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    if (selectedSubCategory && sectionRefs.current[selectedSubCategory]) {
      sectionRefs.current[selectedSubCategory]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selectedSubCategory]);

  const renderFirstColumn = () => {
    return (
      <div className="w-[25%]">
        {Object.keys(menuData).map((key) => (
          <button
            key={key}
            onClick={() => {
              setSelectedCategory(key);
              const firstSub =
                "1" in menuData[key]
                  ? (menuData[key]["1"] as { label: string; id: string }[])[0]
                      .id
                  : null;
              setSelectedSubCategory(firstSub);
            }}
            className={`mb-2 ${
              selectedCategory === key ? "bg-blue-200 text-blue-500" : "bg-none"
            } text-black px-3 py-1 ml-4 justify-center rounded-full text-[14px] flex flex-col`}
          >
            <div className="">{key}</div>
          </button>
        ))}
      </div>
    );
  };

  const renderSecondColumn = () => {
    if (!selectedCategory) return null;

    const subCategories = menuData[selectedCategory]["1"] as {
      label: string;
      id: string;
    }[];
    return (
      <div className="w-[25%] pl-5 border-l-[1px] border-gray-300">
        {subCategories.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedSubCategory(item.id)}
            className={`mb-2 ${
              selectedSubCategory === item.id
                ? "bg-blue-200 text-blue-500"
                : "bg-[#FFFFFF]"
            } text-black px-3 py-1 rounded-full flex flex-col text-[14px]`}
          >
            {item.label}
          </button>
        ))}
      </div>
    );
  };

  const renderThirdColumn = () => {
    if (!selectedCategory || !selectedSubCategory) return null;

    const detailedItems = menuData[selectedCategory]["2"] as {
      [key: string]: { type: keyof ComponentMap; props: ComponentProps }[];
    };
    return (
      <div
        ref={thirdColumnRef}
        className="w-[50%] max-h-[350px] overflow-y-auto border-l-[1px] border-gray-300 pl-5"
      >
        {Object.keys(detailedItems).map((subCategory) => (
          <div
            key={subCategory}
            ref={(el) => (sectionRefs.current[subCategory] = el)}
            className="mb-4"
          >
            <h3 className="text-lg font-bold mb-2 capitalize">
              {subCategory.replace("-", " ")}
            </h3>
            <p className="flex flex-col gap-2">
              {detailedItems[subCategory].map(({ type, props }) =>
                renderComponent(type, props, connectors)
              )}
            </p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <motion.div
      className="relative w-[700px]  bg-white"
      initial={{ x: "-100%" }}
      animate={{ x: "0%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="sticky top-0 z-10 bg-white shadow-md">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold">Add Element</h3>
          <div className="flex space-x-3">
            <button className="flex gap-2 items-center p-1 focus:outline-none">
              <FaSearch className="text-gray-500" />
              <input
                type="text"
                placeholder="Search"
                className="border-none w-[60px] outline-none"
              />
            </button>
            <button className="p-1 rounded-full hover:bg-gray-200 focus:outline-none">
              <BsQuestion className="text-gray-500 text-[27px]" />
            </button>
            <button
              onClick={closeMenu}
              className="p-2 rounded-full hover:bg-gray-200 focus:outline-none"
            >
              <IoCloseOutline className="text-gray-500 text-[20px]" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-[700px] pt-5 relative">
        {renderFirstColumn()}
        {renderSecondColumn()}
        {renderThirdColumn()}
      </div>
    </motion.div>
  );
};

