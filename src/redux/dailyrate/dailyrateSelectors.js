const getDailyRateSelector = (state) => state.rateInfo.dailyRate;
const getAllNotSuitableProductsSelector = (state) =>
  state.rateInfo.productsArr.notAllowedProducts;

export { getDailyRateSelector, getAllNotSuitableProductsSelector };
