import React from "react";
import Item from "../../components/item-collection/Item";
import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/shop/shop-selector";

const Collection = ({ match }) => {
  const state = useSelector((state) => state);
  const collection = selectCollection(match.params.collectionId)(state);
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2>{title}</h2>
      <div className="items">
        {items.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Collection;
