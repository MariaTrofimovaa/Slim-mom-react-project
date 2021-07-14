const getDailyRateSelector = (state) => state.rateInfo.dailyRate;
const getAllNotSuitableProductsSelector = (state) =>
  state.rateInfo.productsArr.notAllowedProducts;

const selectors = { getDailyRateSelector, getAllNotSuitableProductsSelector };
export default selectors;
