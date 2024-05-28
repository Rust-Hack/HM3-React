import "./Item.css";

interface IProp {
  createItem: { nameItem: string; description: string; id: string }[];
  deleteItem: (id: string) => void;
}

const Item = (props: IProp) => {
  return (
    <div className="BlockAllItems">
      {props.createItem.map((item, index) => (
        <div className="blockItem" key={index}>
          <div>
            <h1 className="titleItem">{item.nameItem}</h1>
            <p>{item.description}</p>
          </div>
          <button className="deleteItem" onClick={() => props.deleteItem(item.id)}>удалить</button>
        </div>
      ))}
    </div>
  );
};

export default Item;
