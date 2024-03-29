import "./Card.css";

function Card({ props }) {
  // const createdAt = props.ctx;
  // const name = props.name;
  // const avatar = props.avatar;
  // const address = props.address;
  return (
    <div className="card-container">
      <div className="card-control">
        <div className="name-control">
          <h2>{props.name}</h2>
          <h3>{props.address}</h3>
        </div>
        <img className="avatar-control" src={props.avatar} />
      </div>
    </div>
  );
}

export default Card;
