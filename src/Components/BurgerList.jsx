import React, { Component } from 'react';
import Burger from './Burger';
import './styles/burgerList.css';

class BurgerList extends Component {

  componentDidMount() {
    this.props.getBurgerList();
  }

  render() {
    return (
      <section>
        <h1>BURGERS</h1>
        <div className="burger-list">
          {this.props.burgers.map(burger => {
            return (
              <Burger key={burger.id} id={burger.id}
                      name={burger.name} image={burger.image}
                      chooseBurger={this.props.chooseBurger}/>
            )
          })
          }
        </div>
      </section>
    );
  }
}

export default BurgerList;
