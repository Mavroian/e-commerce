import React from "react";
import "./preview-collection.styles.scss"
import { CollectionItem } from "../collection-item/collection-item.component"

export const PreviewCollection = ({ title, items }) => {
  return (
    <div className="preview-collection">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div style={{
        display: "flex",
        justifyContent: "space-between"
      }}>
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherProps }) => (
            <CollectionItem key={id}  {...otherProps} />
          ))}
      </div>
    </div>)


}
