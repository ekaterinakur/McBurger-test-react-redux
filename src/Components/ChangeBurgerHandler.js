import { connect } from 'react-redux';
import { addIngredient, removeIngredient } from '../redux/actions';
import ChangeBurger from './ChangeBurger';

function mapStateToProps(state) {
  return {
    burger: state.selected,
    ingredients: state.ingredients
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addIngredient: (ing) => dispatch(addIngredient(ing)),
    removeIngredient: (ing) => dispatch(removeIngredient(ing)),
  }
}

const ChangeBurgerHandler = connect(mapStateToProps, mapDispatchToProps)(ChangeBurger);

export default ChangeBurgerHandler;
