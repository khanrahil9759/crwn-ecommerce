import React, { useState } from "react";
import SHOP_DATA from "./Shop.data";
import Preview from "../../components/preview-collection/Preview";

const Shop = () => {
  const [collection, setCollection] = useState(SHOP_DATA);

  return (
    <div className="shop-page">
      {collection.map(({ id, ...props }) => {
        return <Preview key={id} {...props} />;
      })}
    </div>
  );
};

export default Shop;
