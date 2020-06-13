import React from "react";
import { useSelector } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory-selector";
import MenuItem from "../menu-item/MenuItem";

const Directory = () => {
  const state = useSelector((state) => state);
  const sections = selectDirectorySections(state);
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...props }) => {
        return <MenuItem key={id} {...props} />;
      })}
    </div>
  );
};

export default Directory;
