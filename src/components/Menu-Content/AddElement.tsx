import React, { useState } from 'react';
import { Element, ElementProps } from '@craftjs/core';
import { Heading } from '../UserComponents/Heading';
import { Button } from '../UserComponents/Buttons/Button';

type ComponentMap = {
  Heading: typeof Heading;
  Button: typeof Button;
};

type ComponentProps = {
  text?: string;
  src?: string;
  buttonType?: string;
  [key: string]: any;
};

type MenuData = {
  [key: string]: { type: keyof ComponentMap; props: ComponentProps }[] | MenuData;
};

type AddElementProps = {
  closeMenu: () => void;
  menuData: MenuData;
  connectors: {
    create: (ref: HTMLElement | null, node: React.ReactElement) => void;
  };
};

// add componeents here
const componentMap: ComponentMap = {
  Heading,
  Button,
};

const renderComponent = (
  type: keyof ComponentMap,
  props: ComponentProps,
  connectors: AddElementProps['connectors']
) => {
  const Component = componentMap[type];
  return (
    <div
      key={props.text || props.src || Math.random().toString(36).substring(2, 15)}
      ref={(ref: HTMLDivElement | null) =>
        connectors.create(ref, <Element is={Component} {...(props as ElementProps<typeof Component>)} />)
      }
      className="cursor-move"
    >
      {type === 'Button' ? (
        <button
          className={`bg-${props.buttonType === 'primary' ? 'blue' : 'gray'}-500 text-white px-4 py-2 rounded`}
        >
          {props.text}
        </button>
      ) : (
        props?.text || props.src
      )}
    </div>
  );
};

const renderNestedMenu = (
  data: MenuData | { type: keyof ComponentMap; props: ComponentProps }[],
  originalData: MenuData | { type: keyof ComponentMap; props: ComponentProps }[],
  connectors: AddElementProps['connectors'],
  handleItemClick: (level: number, key: string) => void,
  level: number,
  selectedKeys: string[]
): React.ReactNode => {

 
  const levelString = level.toString();
  console.log({data, originalData, level, levelString})

  if (Array.isArray(data) && data.length > 0 && 'type' in data[0]) {
    return data.map(({ type, props }) => renderComponent(type, props, connectors));
  }

  return (
    <div>
      {(originalData?.[levelString] as { label: string; id: string }[])?.map((item) => {
        const nextLevelString = (level + 1).toString()
        console.log({item, level, originalData, value: originalData?.[nextLevelString]})
        
        return (
        <div key={item.id} className="mb-2">
          <button
            onClick={() => handleItemClick(level, item.id)}
            className={`mb-2 ${selectedKeys[level] === item.id ? 'bg-blue-500' : 'bg-gray-500'} text-white px-4 py-2 rounded`}
          >
            {item.label}
          </button>
          {selectedKeys[level] === item.id &&
            renderNestedMenu(originalData?.[nextLevelString]?.[item.id], originalData, connectors, handleItemClick, level + 1, selectedKeys)}
        </div>
      )})}
    </div>
  );
};

export const AddElement: React.FC<AddElementProps> = ({ menuData, connectors, closeMenu }) => {
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const handleItemClick = (level: number, key: string) => {
    setSelectedKeys((prev) => {
      const newSelectedKeys = [...prev];
      newSelectedKeys[level] = key;
      return newSelectedKeys.slice(0, level + 1);
    });
  };

  return (
    <div>
      {
        Object.keys(menuData)?.map((key)=> {

          return(
            <div>
               <button onClick={closeMenu} className="mb-4 bg-red-500 text-white px-4 py-2 rounded">
                  {key}
                </button>
              <div>{renderNestedMenu(menuData[key], menuData[key], connectors, handleItemClick, 1, selectedKeys)}</div>
            </div>
      
            )
        })
      }
      
    </div>
  );
};
