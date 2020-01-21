import { createSelector } from "reselect"

//input selector
const selectShop = (state) => state.shop


//output selector
export const selectShopCollections = createSelector([selectShop], (shop) => shop.collections)
