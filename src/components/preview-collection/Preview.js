import React from "react";
import Item from "../../components/item-collection/Item";

const Preview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => {
            return <Item key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
};

export default Preview;
