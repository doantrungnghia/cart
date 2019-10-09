const getInitial = () => {
  return []
}

export const products = (state = getInitial(), action) => {
  switch (action.type) {
    case 'RECEIVE_PRODUCTS':
      return action.products
    default:
      return state
  }
}
