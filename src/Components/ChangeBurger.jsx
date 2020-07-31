import React from 'react';
import Ingredient from "./Ingredient";
import {Link} from "react-router-dom";
import './styles/changeBurger.css';

function ChangeBurger(props) {
  const { burger, ingredients, addIngredient, removeIngredient } = props;

  return (
    <section className="personal-burger-change">
      <h2>Your personal burger:</h2>
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
        <button className="personal-burger-finish">Place an order</button>
      </Link>
    </section>
  );
}

export default ChangeBurger;
