import React from 'react';
// import '../styles/CommentList.css';
import { Link} from "react-router-dom";

function Burger(props) {
  const { id, name, image, chooseBurger } = props;

  return (
    <Link to={`/burgers/change/${id}`} >
      <div className="burger-card" onClick={() => chooseBurger(id)} >
        <img src={image} alt={name} />
        <span>{name}</span>
      </div>
    </Link>
  );
}

export default Burger;
