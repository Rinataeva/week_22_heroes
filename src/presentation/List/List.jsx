import "./List.css";
import { Item } from "../Item/Item.jsx";
import { json } from "../../infrastructure/data.js";

export function List() {
  return (
    <ul className="list">
      {json.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </ul>
  );
}
