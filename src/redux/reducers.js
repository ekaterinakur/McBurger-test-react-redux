import { GET_BURGER_LIST, CHOOSE_BURGER, ADD_INGREDIENT, REMOVE_INGREDIENT, CLEAN_ORDER } from "./actions";

const initialState = {
  data: [],
  selected: null,
  id: null,
  ingredients: [
    {name: "Cutlet", value: 0},
    {name: "Onion", value: 0},
    {name: "Tomato", value: 0},
    {name: "Cucumber", value: 0},
    {name: "Pickle", value: 0},
    {name: "Lettuce", value: 0},
    {name: "Cheese", value: 0},
    {name: "Sauce", value: 0}
  ]
};

export function getNextState(state = initialState, action) {
  switch (action.type) {
    case GET_BURGER_LIST:
      return {
        ...state,
        data: action.payload
      };
    case CHOOSE_BURGER:
      return {
        ...state,
        selected: state.data.find(burger => burger.id === action.payload),
        id: action.payload,
        ingredients: state.ingredients.map(ing => {
          const burger = state.data.find(burger => burger.id === action.payload);
          return {
            ...ing,
            value: burger.ingredients[ing.name] ? burger.ingredients[ing.name] : 0
          }
        })
      };
    case ADD_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.map(ing => {
          return ing.name === action.payload ? {...ing, value: ing.value + 1} : ing;
        })
      };
    case REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.map(ing => {
          return ing.name === action.payload ? {...ing, value: ing.value - 1} : ing;
        })
      };
    case CLEAN_ORDER:
      return {
        ...state,
        selected: null,
        id: null,
        ingredients: state.ingredients.map(ing => { return {...ing, value: 0 }})
      }
    default:
      return state;
  }
}
