import { connect } from 'react-redux';
import { cleanOrder } from '../redux/actions';
import PersonalBurger from './PersonalBurger';

function mapStateToProps(state) {
  return {
    burger: state.selected,
    ingredients: state.ingredients
  };
}

function mapDispatchToProps(dispatch) {
  return {
    cleanOrder: () => dispatch(cleanOrder())
  }
}

const PersonalBurgerHandler = connect(mapStateToProps, mapDispatchToProps)(PersonalBurger);

export default PersonalBurgerHandler;
