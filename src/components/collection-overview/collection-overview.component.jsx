import React from "react";
import { createStructuredSelector } from "reselect";
import { PreviewCollection } from "../preview-collection/preview-collection.component";
import { connect } from "react-redux";
import "./collection-overview.styles.scss";
import { selectCollectionForPreview } from "../../redux/shop/shop.selector";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
