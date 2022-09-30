import React from "react";

import "./MenuItem.scss";

const MenuItem = ({ image = null, text = null, styles = "" }) => {
  return (
    <div className={`${styles}menu-item menu-item`}>
      {image && (
        <div className={`${styles}menu-item__image-wrapper menu-item__text`}>
          {image}
        </div>
      )}
      {text && (
        <div className={`${styles}menu-item__text-wrapper menu-item__text`}>
          {text}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
