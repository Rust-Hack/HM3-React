import React, { createContext, useState, ReactNode } from 'react';

interface ItemType {
  nameItem: string;
  description: string;
  id: string;
}

interface ItemContextType {
  items: ItemType[];
  addItem: (item: ItemType) => void;
  deleteItem: (id: string) => void;
  addCount: number;
  deleteCount: number;
  existingIds: string[];
}

const ItemContext = createContext<ItemContextType | undefined>(undefined);

export const ItemProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<ItemType[]>([]);
  const [addCount, setAddCount] = useState<number>(0);
  const [deleteCount, setDeleteCount] = useState<number>(0);

  const addItem = (item: ItemType) => {
    setItems(prev => [...prev, item]);
    setAddCount(prev => prev + 1);
  };

  const deleteItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
    setDeleteCount(prev => prev + 1);
  };

  const existingIds = items.map(item => item.id);

  return (
    <ItemContext.Provider value={{ items, addItem, deleteItem, addCount, deleteCount, existingIds }}>
      {children}
    </ItemContext.Provider>
  );
};

export const useItemContext = () => {
  const context = React.useContext(ItemContext);
  if (!context) {
    throw new Error('useItemContext must be used within an ItemProvider');
  }
  return context;
};
