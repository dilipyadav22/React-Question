import React, { createContext } from "react";
import UsingContext from "./Context/UsingContext";

export const Data = createContext();


export const ContextApiUse = () => {
  const name = "Dilip";
  const age = 25;

  return (
    <div>
      <Data.Provider value={{name , age}}>
        <UsingContext /> 
      </Data.Provider>
    </div>
  );
};

