import { useState } from "react";

function Card({ id, image, info, price, name }) {
  const [readmore, setReadMore] = useState(false);
  const description = `${info.substring(0, 200)}...`;

  function readMoreHandler() {
    setReadMore(!readmore);
  }

  function removeTour() {}

  return (
    <div className="card">
      <img src={image} className="image" alt="img" />
      <div className="tour-details">
        <h4 className="tour-price">{price}</h4>
        <h4 className="tour-price">{name}</h4>
      </div>
      <div className="description">
        {description}
        <span className="read-more" onClick={readMoreHandler}>
          {readmore ? "show less" : "read more"}
        </span>
      </div>
      <button className="btn-read" onClick={removeTour}>
        Not Interested
      </button>
    </div>
  );
}

export default Card;
