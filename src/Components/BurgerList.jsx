import React, { Component } from 'react';
import Burger from './Burger';
import './styles/burgerList.css';

class BurgerList extends Component {

 componentDidMount() {
    fetch('https://my-json-server.typicode.com/ekaterinakur/mc-json/burgers')
      .then(resolve => resolve.json())
      .then(burgers => {
        this.props.getBurgerList(burgers);
      })
  }

  render() {
    return (
      <section>
        <h1>Бургеры</h1>
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
