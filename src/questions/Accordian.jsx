import React, { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(1);

  console.log(items);

  const handleToggle = (index) => {
    console.log(index);
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  if (!items || items.length === 0) return <p>No items available</p>;

  return (
    <div
      style={{
        border: "1px solid black",
        width: 500,
        padding: 15,
        margin: "auto",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}
    >
      {items?.map((item, index) => {
        return (
          <div key={index}>
            <div>
              <button
                onClick={() => handleToggle(index)}
                aria-expanded={activeIndex === index}
              >
                {item?.title}
              </button>
              {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {activeIndex === index && <div>{item?.content}</div>}
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
