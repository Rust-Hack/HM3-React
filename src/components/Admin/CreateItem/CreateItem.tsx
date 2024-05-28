import { useState } from 'react';
import './CreateItem.css';
import { useItemContext } from '../../ItemContext';

const CreateItem = () => {
  const { addItem, existingIds } = useItemContext();
  const [nameItem, setNameItem] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [id, setId] = useState<string>('');
  const [error, setError] = useState<{ nameItem: boolean, description: boolean, id: boolean }>({ nameItem: false, description: false, id: false });
  const [uniqueIdError, setUniqueIdError] = useState<boolean>(false);

  const handlerChangeInputName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameItem(event.target.value);
    setError(prev => ({ ...prev, nameItem: false }));
  }

  const handlerChangeInputDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
    setError(prev => ({ ...prev, description: false }));
  }

  const handlerChangeInputId = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
    setError(prev => ({ ...prev, id: false }));
    setUniqueIdError(false);
  }

  const handlerCreate = () => {
    if (!nameItem || !description || !id) {
      setError({
        nameItem: !nameItem,
        description: !description,
        id: !id
      });
      return;
    }

    if (existingIds.includes(id)) {
      setUniqueIdError(true);
      return;
    }

    addItem({ nameItem, description, id });
    setNameItem('');
    setDescription('');
    setId('');
  }

  return (
    <div className="BlockCreate">
      <div className='BlockCreateInput'>
        <input
          type="text"
          placeholder='Введите название товара'
          value={nameItem}
          onChange={handlerChangeInputName}
          style={{ borderColor: error.nameItem ? 'red' : 'initial' }}
        />
        <input
          type="text"
          placeholder='Введите описание товара'
          value={description}
          onChange={handlerChangeInputDescription}
          style={{ borderColor: error.description ? 'red' : 'initial' }}
        />
        <input
          type="text"
          placeholder='Введите уникальный номер'
          value={id}
          onChange={handlerChangeInputId}
          style={{ borderColor: error.id || uniqueIdError ? 'red' : 'initial' }}
        />
        {uniqueIdError && <p style={{ color: 'red' }}>Номер товара должен быть уникальным</p>}
      </div>
      <div>
        <button className='createItem' onClick={handlerCreate}>Создать</button>
      </div>
    </div>
  );
}

export default CreateItem;
