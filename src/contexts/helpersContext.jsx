import { createContext, useState } from "react";

export const HelperContext = createContext({});

export function HelperProvider({children}) {

  const [cart, setCart] = useState(0);


  function plusCart(id) {
    setCart(cart+1);
  }
  return  (
    <HelperContext.Provider value={{
      plusCart,
      cart
    }}>
      {children}
    </HelperContext.Provider>
  );
}