import React, { createContext, useContext, useState } from 'react';

const RemembrallContext = createContext();

export const RemembrallContextProvider = ({ children }) => {
  const snippets = [
    {
      title: 'setting a array map',
      tags: ['javascript', 'react'],
      code: `const array = ['one', 'two'] ;
      array.map((number)=>(number));`,
    },
  ];

  const [remembralls, setRemembralls] = useState(snippets);
  const [currentIndex, setCurrentIndex] = useState(0);
  //   const [filteredRemembralls, setFilteredRemembralls] = useState(remembralls);

  return (
    <RemembrallContext.Provider
      value={{ remembralls, setRemembralls, currentIndex, setCurrentIndex }}
    >
      {children}
    </RemembrallContext.Provider>
  );
};

export const useRemembrallContext = () => useContext(RemembrallContext);
