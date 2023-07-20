import { createContext, useState } from "react";

export const HelperContext = createContext({});

export function HelperProvider({ children }) {

  const [cart, setCart] = useState(Number(localStorage.getItem('cart')));


  function plusCart() {
    const quantity = Number(localStorage.getItem('cart')) + 1;
    localStorage.setItem('cart', quantity);
    setCart(quantity);
  }

  function createAccordionStructure(data) {
    const infos = [
      {
        title: "PRODUCT DETAILS",
        content: data.details
      },
      {
        title: "SIZE & FIT",
        content: data.sizeAndFit
      },
      {
        title: "COMPOSITION",
        content: data.composition
      }
    ]
    return infos;
  }

  return (
    <HelperContext.Provider value={{
      plusCart,
      cart,
      createAccordionStructure,
    }}>
      {children}
    </HelperContext.Provider>
  );
}