import { useState } from "react";
import "./User.css";
import '../../BlockItems.css'
import { useItemContext } from '../ItemContext';

interface IProps {
  setselectBtn: (exit: boolean) => void;
}

const User = (props: IProps) => {
  const { items } = useItemContext();
  const [filterItem, setFilterItem] = useState<string>('');

  const handlerExit = () => {
    props.setselectBtn(true);
  };

  const handlerFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterItem(e.target.value);
  };

  return (
    <div className="blockAppUser">
      <div className="filterBlock">
        <button onClick={handlerExit} className='Exit'>Выйти</button>
        <input type="text" value={filterItem} onChange={handlerFilter} className="filterInput"/>
      </div>
      <div className="BlockItems">
        {items.filter(item => item.nameItem.startsWith(filterItem)).map((item, index) => (
          <div className="blockItem" key={index}>
            <div>
              <h1 className="titleItem">{item.nameItem}</h1>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
