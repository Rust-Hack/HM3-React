import './Admin.css';
import CreateItem from './CreateItem/CreateItem';
import Item from './Item/Item';
import { useItemContext } from '../ItemContext';

interface IProps {
  setselectBtn: (exit: boolean) => void;
}

const Admin = (props: IProps) => {
  const { addCount, deleteCount } = useItemContext();

  const handlerExit = () => {
    props.setselectBtn(true);
  };

  return (
    <div className='BlockAppAdmin'>
      <div className='BlockAppInputWithBtn'>
        <button onClick={handlerExit} className='Exit'>Выйти</button>
        <CreateItem />
      </div>
      <Item />
      <div className='Statistics'>
        <h2>Статистика</h2>
        <p>Добавлено: {addCount}</p>
        <p>Удалено: {deleteCount}</p>
      </div>
    </div>
  );
};

export default Admin;
