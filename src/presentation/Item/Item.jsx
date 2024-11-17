/* eslint-disable react/prop-types */
import "./Item.css";

export function Item(props) {
  const {
    name,
    universe,
    alterEgo,
    activity,
    friends,
    power,
    image,
    more,
    rating,
  } = props;
  return (
    <div className="item">
      <h2>{name}</h2>
      <p>
        <strong> Вселенная: {universe}</strong>
      </p>
      <p> Альтер-эго: {alterEgo}</p>
      <p> Род деятельности: {activity}</p>
      <p>Друзья: {friends}</p>
      <p>Сверхспособности: {power}</p>
      <img src={image} alt={name} />
      <p>{more}</p>
      <span>{rating}</span>
    </div>
  );
}
