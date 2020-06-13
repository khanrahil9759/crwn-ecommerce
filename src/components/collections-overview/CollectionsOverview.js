import React from "react";
import { useSelector } from "react-redux";
import Preview from "../preview-collection/Preview";
import { selectCollectionsForPreview } from "../../redux/shop/shop-selector";

const CollectionsOverview = () => {
  const state = useSelector((state) => state);
  const collections = selectCollectionsForPreview(state);

  return (
    <div className="collections-overview">
      {collections.map(({ id, ...props }) => {
        return <Preview key={id} {...props} />;
      })}
    </div>
  );
};

export default CollectionsOverview;
