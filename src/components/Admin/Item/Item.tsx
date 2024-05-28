import "./Item.css";
import { useItemContext } from '../../ItemContext';

const Item = () => {
  const { items, deleteItem } = useItemContext();

  return (
    <div className="BlockAllItems">
      {items.map((item, index) => (
        <div className="blockItem" key={index}>
          <div>
            <h1 className="titleItem">{item.nameItem}</h1>
            <p>{item.description}</p>
          </div>
          <button className="deleteItem" onClick={() => deleteItem(item.id)}>удалить</button>
        </div>
      ))}
    </div>
  );
};

export default Item;
