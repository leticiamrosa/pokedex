const initialState = [];

export default function addSelectItems(state = initialState, action) {
  switch (action.type) {
    case 'ADD_CART':
      return [...state, { id: Math.random(), text: action.payload.text }];
    default:
      return state;
  }
}
