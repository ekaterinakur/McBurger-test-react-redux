import React from 'react';
// import '../styles/Ingredient.css';

function Ingredient(props) {
  const { name, value, addIngredient, removeIngredient } = props;

  return (
      <li>
        <button className="personal-burger-plus"
                onClick={() => addIngredient(name)}
                disabled={value === 3}
        >
          +
        </button>
        <span className="personal-burger-value">{value || 0}</span>
        <button className="personal-burger-minus"
                onClick={() => removeIngredient(name)}
                disabled={!value}
        >
          -
        </button>
        <span className="personal-burger-ing">{name}</span>
      </li>
  );
}

export default Ingredient;
