import Card from "./Card.js";

function Tours({ tours }) {
  return (
    <div>
      <div>
        <h2>Plan With Love</h2>
      </div>
      <div>
        {tours.map((tour) => {
          return <Card></Card>;
        })}
      </div>
    </div>
  );
}

export default Tours;
