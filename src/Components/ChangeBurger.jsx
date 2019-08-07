import React from 'react';
import Ingredient from "./Ingredient";
import {Link} from "react-router-dom";
import { Button } from 'semantic-ui-react';
import './styles/changeBurger.css';

function ChangeBurger(props) {
  const { burger, ingredients, addIngredient, removeIngredient } = props;

  return (
    <section className="personal-burger-change">
      <h2>Ваш персональный бургер:</h2>
      <div className="personal-burger-name">{burger.name}</div>
      <div className="personal-burger-menu">
        <ul>
          {ingredients.map((ing, idx) => {
            return <Ingredient key={idx}
                               name={ing.name}
                               value={ing.value}
                               addIngredient={addIngredient}
                               removeIngredient={removeIngredient} />
          })
          }
        </ul>
        <img src={burger.image} alt={burger.name} />
      </div>
      <Link to={`/burgers/personal_burger`} >
        <Button className="personal-burger-finish">Оформить заказ</Button>
      </Link>
    </section>
  );
}

export default ChangeBurger;
