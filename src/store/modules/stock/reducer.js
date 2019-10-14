const INITIAL_STATE = {
  data: [],
  loading: false,
  error: true,
};

export default function stock(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@stock/FETCH_STOCK_REQUEST':
      return { ...state, loading: true };
    case '@stock/FETCH_STOCK_SUCESS':
      return { data: action.payload, loading: false, error: false };
    case '@stock/FETCH_STOCK_FAILURE':
      return { loading: false, error: true };
    default:
      return state;
  }
}
