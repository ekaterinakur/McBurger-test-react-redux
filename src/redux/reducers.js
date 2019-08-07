import { GET_BURGER_LIST, CHOOSE_BURGER, ADD_INGREDIENT, REMOVE_INGREDIENT, CLEAN_ORDER } from "./actions";

const initialState = {
  data: [],
  selected: null,
  id: null,
  ingredients: [
    {name: "Котлета", value: 0},
    {name: "Лук", value: 0},
    {name: "Помидор", value: 0},
    {name: "Огурец", value: 0},
    {name: "Соленый огурец", value: 0},
    {name: "Листья салата", value: 0},
    {name: "Сыр", value: 0},
    {name: "Соус", value: 0}
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
