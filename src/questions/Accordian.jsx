import React, { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function Accordion({ items }) {
  const [newAcc, setNewAcc] = useState([]);
  console.log(items);
  useEffect(() => {
    const newFunc = () => {
      const newItems = items?.map((item) => {
        return { ...item, isOpenAcc: false };
      });
      setNewAcc(newItems);
    };
    newFunc();
  }, []);

  const accordianHandler = (item) => {
    setNewAcc((prev) =>
      prev.map((n) => {
        if (item.title === n.title) {
          return { ...n, isOpenAcc: !item.isOpenAcc };
        } else {
          return { ...n, isOpenAcc: false };
        }
      })
    );
  };

  if (!items || items.length === 0) return <p>No items available</p>;

  return newAcc ? (
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
      {newAcc?.map((item) => (
        <div
          key={item?.title}
          style={{
            border: "1px solid",
            padding: "2px 10px",
            margin: "10px 0px",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            onClick={() => accordianHandler(item)}
          >
            <h3>{item.title}</h3>
            <div>{item?.isOpenAcc ? <FaChevronUp /> : <FaChevronDown />}</div>
          </div>
          {item?.isOpenAcc && (
            <div style={{}}>
              {item?.content ? (
                <p>{item?.content}</p>
              ) : (
                <p>No items available</p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  ) : (
    <p>No items available</p>
  );
}

export default Accordion;
