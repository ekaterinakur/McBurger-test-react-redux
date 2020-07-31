import { connect } from 'react-redux';
import { getBurgerList, chooseBurger } from '../redux/actions';
import BurgerList from './BurgerList';

function mapStateToProps(state) {
  return {
    burgers: state.data,
    id: state.id,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getBurgerList: () => dispatch(getBurgerList()),
    chooseBurger: (id) => dispatch(chooseBurger(id)),
  }
}

const BurgerListHandler = connect(mapStateToProps, mapDispatchToProps)(BurgerList);

export default BurgerListHandler;
