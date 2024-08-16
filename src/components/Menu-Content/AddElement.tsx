import React, { useState, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { BsQuestion } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { Heading } from "../UserComponents/Heading";
import { Element, useEditor } from "@craftjs/core";

interface AddElementProps {
  closeMenu: () => void;
}

const AddElement: React.FC<AddElementProps> = ({ closeMenu }) => {
  const { connectors } = useEditor();
  const [selectedElement, setSelectedElement] = useState<string>("text");
  const [selectedSubElement, setSelectedSubElement] = useState<string>("");

  const columns = {
    text: {
      second: [
        { label: "Themed Text", id: "themed-text" },
        { label: "Titles", id: "titles" },
        { label: "Paragraphs", id: "paragraphs" },
        { label: "Collapsable Text", id: "collapsable-text" },
        { label: "Text Mask", id: "text-mask" },
      ],
      third: {
        "themed-text": [
          <h2 className="font-bold text-lg">Themed Text</h2>,
          // <h1
          //     ref={(ref) => connectors.create(ref, <Element is={Heading} text="Heading h1" />)}
          //     className="cursor-move"
          // >
          //     Heading H1
          // </h1>,
          // <h2
          //     ref={(ref) => connectors.create(ref, <Element is={Heading} text="Heading h2" />)}
          //     className="cursor-move"
          // >
          //     Heading H2
          // </h2>,
          <div
            ref={(ref) =>
              connectors.create(
                ref,
                <Element is={Heading} text="Heading h1" level={1} />
              )
            }
            className="cursor-move"
          >
            Heading h1
          </div>,
          <div
            ref={(ref) =>
              connectors.create(
                ref,
                <Element is={Heading} text="Heading h2" level={2} />
              )
            }
            className="cursor-move"
          >
            Heading h2
          </div>,
          <div
          ref={(ref) =>
            connectors.create(
              ref,
              <Element is={Heading} text="Heading h3" level={3} />
            )
          }
          className="cursor-move"
        >
          Heading h3
        </div>,
          <div
          ref={(ref) =>
            connectors.create(
              ref,
              <Element is={Heading} text="Heading h4" level={4} />
            )
          }
          className="cursor-move"
        >
          Heading h4
        </div>,
          <div
          ref={(ref) =>
            connectors.create(
              ref,
              <Element is={Heading} text="Heading h5" level={5} />
            )
          }
          className="cursor-move"
        >
          Heading h5
        </div>,
          <div
          ref={(ref) =>
            connectors.create(
              ref,
              <Element is={Heading} text="Heading h6" level={6} />
            )
          }
          className="cursor-move"
        >
          Heading h6
        </div>,
        ],
        titles: [
          <h2 className="font-bold text-lg">Titles</h2>,
          <div key="1">Title 1</div>,
          <div key="2">Title 2</div>,
        ],
        paragraphs: [
          <h2 className="font-bold text-lg">Paragraphs</h2>,
          <div key="1">Paragraph 1</div>,
          <div key="2">Paragraph 2</div>,
        ],
        "collapsable-text": [
          <h2 className="font-bold text-lg">Collapsable Text</h2>,
          <div key="1">Collapsable Text 1</div>,
          <div key="2">Collapsable Text 2</div>,
        ],
        "text-mask": [
          <h2 className="font-bold text-lg">Text Mask</h2>,
          <div key="1">Text Mask 1</div>,
          <div key="2">Text Mask 2</div>,
        ],
      },
    },
    image: {
      second: [
        { label: "Type 1", id: "type-1" },
        { label: "Type 2", id: "type-2" },
      ],
      third: {
        "type-1": [
          <div key="1">Image Type 1A</div>,
          <div key="2">Image Type 1B</div>,
        ],
        "type-2": [
          <div key="1">Image Type 2A</div>,
          <div key="2">Image Type 2B</div>,
        ],
      },
    },
  };

  const handleClick = (element: string) => {
    setSelectedElement(element);
    setSelectedSubElement("");
  };

  const handleSubElementClick = (id: string) => {
    setSelectedSubElement(id);
    scrollToElement(id);
  };

  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element && thirdColumnRef.current) {
      thirdColumnRef.current.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const thirdColumnRef = useRef<HTMLDivElement>(null);

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
      <div className="flex pt-5">
        <div className="w-[25%] p-2 border-r border-gray-200">
          <ul>
            {Object.keys(columns).map((key) => (
              <li
                key={key}
                onClick={() => handleClick(key)}
                className="cursor pointer mb-1"
              >
                <span
                  className={`px-3 py-1 cursor-pointer text-[14px] rounded-full ${
                    selectedElement === key
                      ? "bg-blue-100 text-blue-600"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[25%] p-2 border-r border-gray-200">
          <ul>
            {columns[selectedElement].second.map(({ label, id }) => (
              <li
                key={id}
                onClick={() => handleSubElementClick(id)}
                className={`p-2 cursor-pointer ${
                  selectedSubElement === id
                    ? "bg-blue-100 text-blue-600"
                    : "hover:bg-gray-100"
                }`}
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
        <div
          className="w-[50%] p-2 overflow-y-auto h-[65vh]"
          ref={thirdColumnRef}
        >
          <ul>
            {Object.entries(columns[selectedElement].third).map(
              ([id, items]) => (
                <React.Fragment key={id}>
                  {items.map((item, index) => (
                    <li
                      key={index}
                      id={id}
                      className="p-2 cursor-pointer hover:bg-gray-100"
                    >
                      {item}
                    </li>
                  ))}
                </React.Fragment>
              )
            )}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default AddElement;
