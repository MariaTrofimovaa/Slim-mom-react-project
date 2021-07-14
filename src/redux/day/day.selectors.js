// для RightSideBar
// const getDateSelector = (state) => state.rateInfo.daySummary;
// const getDayInfoSelector = (state) => state.infoForDay;
// const getDaySummarySelector = (state) => state.products.daySummary;

// const getNotAllowedProdSelector = (state) => state.rateInfo.notAllowedProducts;

// export {

//   getDateSelector,
//   getDayInfoSelector,
//   getDaySummarySelector,
//   getNotAllowedProdSelector,
// };


const kcalSelector = (state) => state.rateInfo.dailyRate;
console.log(kcalSelector);
const notProductsSelector = state => state.rateInfo.notAllowedProducts;
// попытка через "?"
const kcalLeftSelector = state => state.rateInfo?.summaries?.kcalLeft;
const dateSelector = state => state.rateInfo.summaries.date;

const kcalConsumedSelector = (state) => state.rateInfo.summaries.kcalConsumed;
const percentsOfDailyRateSelector = state => state.rateInfo.summaries.percentsOfDailyRate;

export {
  notProductsSelector,
  kcalSelector,
  percentsOfDailyRateSelector,
  kcalConsumedSelector,
  kcalLeftSelector,
  dateSelector,
};
