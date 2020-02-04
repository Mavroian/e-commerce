import { createSelector } from "reselect";

//input selector
const selectShop = state => state.shop;
//output selector
export const selectShopCollections = createSelector([selectShop], shop => shop);

export const selectCollectionForPreview = createSelector(
  [selectShop],
  collections => {
    return Object.keys(collections).map(key => collections[key]);
  }
);
export const selectCollection = collectionUrlParam => {
  return createSelector([selectShopCollections], collections => {
    return collections[collectionUrlParam];
  });
};
