export const GET_BURGER_LIST = 'get_burger_list';
export const CHOOSE_BURGER = 'choose_burger';
export const ADD_INGREDIENT = 'add_ingredient';
export const REMOVE_INGREDIENT = 'remove_ingredient';
export const CLEAN_ORDER = 'clean_order';

export function getBurgerList() {
  return function(dispatch) {
    fetch('https://my-json-server.typicode.com/ekaterinakur/mc-json/burgers')
      .then(resolve => resolve.json())
      .then(burgers => {
        dispatch({
          type: GET_BURGER_LIST,
          payload: burgers
        })
      })
  }
}

export function chooseBurger(id) {
  return {
    type: CHOOSE_BURGER,
    payload: id
  }
}

export function addIngredient(ing) {
  return {
    type: ADD_INGREDIENT,
    payload: ing
  }
}

export function removeIngredient(ing) {
  return {
    type: REMOVE_INGREDIENT,
    payload: ing
  }
}

export function cleanOrder() {
  return {
    type: REMOVE_INGREDIENT
  }
}
