export default function(state = [], action) {
  switch (action.type) {
    case "ADD_TO_CART":
      if (state.length) { 
        const product = state.find(d => d.product.id === action.data.id);
        if (product) {
          product.quantity = product.quantity + 1;
        let newState = state.map(el => (
          el.product.id === action.id ? {...el, quantity: product.quantity}: el
        ));
        return newState;
      }
    }
    return [...state, { product: action.data, quantity: 1 }]
    
    case "REMOVE_FROM_CART":
      const product = state.find(d => d.product.id === action.data);
      if (product.quantity > 1) {
        product.quantity = product.quantity - 1;
        let newState = state.map(el => (
          el.product.id === action.data ? {...el, quantity: product.quantity}: el
        ));
        return newState;
      } 
      if (state.length) {
        return state.filter(d => d.product.id !== action.data)
      }
      return [];

    default:
      return state;
  }
}
