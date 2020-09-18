const previouseState = {
  expense: [
    {
      product: "Hoodies",
      productDescription: "Multi-coloured coloured",
      amount: "5",
    },
  ],
};

const myReducer = (expense = { previouseState }, action) => {
  switch (action) {
    case "ADD_USER":
      const newproduct = {
        product: action.payload.product,
        productDescription: action.payload.productDescription,
        amount: action.payload.amount,
      };
      return { ...expense, expenses: [...expense, newproduct] };

    default:
      return expense;
  }
};

export default myReducer;
