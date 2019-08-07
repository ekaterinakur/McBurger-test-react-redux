import React from 'react';
import { Link } from "react-router-dom";
import './styles/personalBurger.css';

function PersonalBurger(props) {
  const { burger, ingredients, cleanOrder } = props;

  return (
    <section className="personal-burger-ready">
      <h2>Ваш персональный заказ оформлен!</h2>
      <div className="personal-burger-name">{burger.name}</div>
      <div className="personal-burger-additives first">
        Добавки:
        {ingredients.map((ing, idx) => {
          if ((burger.ingredients[ing.name] || 0) < ing.value) {
            return <div key={idx}>{ing.name} {ing.value - (burger.ingredients[ing.name] || 0)}</div>
          }
        })}
      </div>
      <div className="personal-burger-additives second">
        Убрано:
        {ingredients.map((ing, idx) => {
          if (burger.ingredients[ing.name] > ing.value) {
            return <div key={idx}>{ing.name} {burger.ingredients[ing.name] - ing.value}</div>
          }
        })}
      </div>
      <Link to={`/`} onClick={cleanOrder}>
        <button className="to-main-menu">В ГЛАВНОЕ МЕНЮ</button>
      </Link>
    </section>
  );
}

export default PersonalBurger;
