import React from "react";
import Item from "../../components/item-collection/Item";

const Preview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...props }) => {
            return <Item key={id} {...props} />;
          })}
      </div>
    </div>
  );
};

export default Preview;
