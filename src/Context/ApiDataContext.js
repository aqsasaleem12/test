import { createContext, useContext, useState } from "react";

const ApiDataContext = createContext();

export const useApiData = () => {
  return useContext(ApiDataContext);
};

export const ApiDataProvider = ({ children }) => {
  const [apidata, setApiData] = useState([]); 

  return (
    <ApiDataContext.Provider value={{ apidata, setApiData }}>
      {children}
    </ApiDataContext.Provider>
  );
};
