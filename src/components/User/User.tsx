import { useState } from "react";
import "./User.css";
interface IProps {
  createItem: {
    nameItem: string;
    description: string;
    id: string;
  }[];
  setselectBtn: (exit: boolean) => void;
}

const User = (props: IProps) => {
  const handlerExit = () => {
    props.setselectBtn(true);
  };

  const [ filterItem, setFilterItem ] = useState<string>('')

  const handlerFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterItem(e.target.value)
  }

  const filteredItems = props.createItem.filter((item) =>
    item.nameItem.toLowerCase().startsWith(filterItem.toLowerCase())
  );

  return (
    <div className="blockAppUser">
      <div className="filterBlock">
        <button onClick={handlerExit} className='Exit'>Выйти</button>
        <input type="text" value={filterItem} onChange={handlerFilter} className="filterInput" placeholder="Найди предмет"/>
      </div>
      <div className="BlockItems">
        {filteredItems.map((item, index) => (
          <div className="block">
            <div className="blockItem" key={index}>
              <div>
                <h1 className="titleItem">{item.nameItem}</h1>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
