import { useState } from 'react';
import './Admin.css';
import CreateItem from './CreateItem/CreateItem';
import Item from './Item/Item';

interface IProps {
  setSelectBtn: (exit: boolean) => void;
  createItem: { nameItem: string; description: string; id: string }[];
  setCreateItem: React.Dispatch<React.SetStateAction<{ nameItem: string; description: string; id: string }[]>>;
}

const Admin = (props: IProps) => {
  const [addCount, setAddCount] = useState<number>(0);
  const [deleteCount, setDeleteCount] = useState<number>(0);

  const handlerExit = () => {
    props.setSelectBtn(true);
  }

  const handleAddItem = (newItem: { nameItem: string; description: string; id: string }) => {
    props.setCreateItem(prev => [...prev, newItem]);
    setAddCount(prev => prev + 1);
  }

  const handleDeleteItem = (id: string) => {
    props.setCreateItem(prev => prev.filter(item => item.id !== id));
    setDeleteCount(prev => prev + 1);
  }

  return (
    <div className='BlockAppAdmin'>
      <div className='BlockAppInputWithBtn'>
        <button onClick={handlerExit} className='Exit'>Выйти</button>
        <CreateItem setCreateItem={handleAddItem} existingIds={props.createItem.map(item => item.id)} />
      </div>
      <Item createItem={props.createItem} deleteItem={handleDeleteItem} />
      <div className='Statistics'>
        <h2>Статистика</h2>
        <p>Добавлено: {addCount}</p>
        <p>Удалено: {deleteCount}</p>
      </div>
    </div>
  )
}

export default Admin;
