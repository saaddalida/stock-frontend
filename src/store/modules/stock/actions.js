export function fetchStockRequest({ symbol }) {
  return {
    type: '@stock/FETCH_STOCK_REQUEST',
    payload: {
      url: `/stock/${symbol}/company`,
    },
  };
}

export function fetchStockSucess({ data }) {
  return {
    type: '@stock/FETCH_STOCK_SUCESS',
    payload: { data },
  };
}

export function fetchStockFailure() {
  return {
    type: '@stock/FETCH_STOCK_FAILURE',
  };
}
