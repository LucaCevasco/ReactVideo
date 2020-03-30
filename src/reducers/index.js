// toma un estado, que viene del store, y retorna el valor pedido por connect en algun container
const reducer = (state, action) => {

  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };
    case 'DELETE_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter((items) => items.id !== action.payload),
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'GET_VIDEO_SOURCE':
      return {
        ...state,
        playing: state.trends.find((item) => item.id === Number(action.payload)) ||
        state.originals.find((item) => item.id === Number(action.payload)) ||
        [],

      };
    case 'IS_SEARCHING':
      return {
        ...state,
        isSearching: action.payload,
      };
    case 'GET_VIDEOS':
      return {
        ...state,
        searching: state.trends
          .concat(state.originals)
          .filter((item) => item.title.toLowerCase().includes(action.payload.toLowerCase())),
      };
    default:
      return state;
  }

};

export default reducer;
