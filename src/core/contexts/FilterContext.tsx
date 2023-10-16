import { Dispatch, SetStateAction, useState, createContext, ReactNode } from 'react';

interface FilterContextProps {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
}

export interface FilterContextProviderProps {
  children: ReactNode;
}

export const FilterContext = createContext<FilterContextProps>({ filter: '', setFilter: () => {} });

export const FilterContextProvider: React.FC<FilterContextProviderProps> = ({ children }) => {
  const [filter, setFilter] = useState<string>('');

  return <FilterContext.Provider value={{ filter, setFilter }}>{children}</FilterContext.Provider>;
};
