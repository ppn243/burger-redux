import { createSlice } from "@reduxjs/toolkit";

const burgerSlice = createSlice({
  name: "burger",
  initialState: {
    burger: [
      { type: "salad", quantity: 1, totalPrice: 10 },
      { type: "cheese", quantity: 1, totalPrice: 20 },
      { type: "beef", quantity: 1, totalPrice: 55 },
    ],
    menu: {
      salad: 10,
      cheese: 20,
      beef: 55,
    },
    total: 85,
  },
  reducers: {
    addIngredient: (state, action) => {
      const { ingredient } = action.payload;
      const burgerItem = state.burger.find((item) => item.type === ingredient);
      if (burgerItem) {
        burgerItem.quantity += 1;
        burgerItem.totalPrice = burgerItem.quantity * state.menu[ingredient];
        state.total += state.menu[ingredient];
      }
    },
    removeIngredient: (state, action) => {
      const { ingredient } = action.payload;
      const burgerItem = state.burger.find((item) => item.type === ingredient);
      if (burgerItem && burgerItem.quantity > 0) {
        burgerItem.quantity -= 1;
        burgerItem.totalPrice = burgerItem.quantity * state.menu[ingredient];
        state.total -= state.menu[ingredient];
      }
    },
    resetBurger: (state) => {
      state.burger.forEach((item) => {
        item.quantity = 1;
        item.totalPrice = item.quantity * state.menu[item.type];
      });
      state.total = 85;
    },
  },
});

export const { addIngredient, removeIngredient, resetBurger } =
  burgerSlice.actions;
export default burgerSlice.reducer;
