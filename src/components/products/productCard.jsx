/* eslint-disable react/prop-types */
import { useContext } from "react";
import { HelperContext } from "../../contexts/helpersContext";
import { Desc, Details, Img, Price, Product, ProductName, Select } from "./style";

export function ProductCard({ src, name, price, id }) {
  const {plusCart} = useContext(HelperContext);
  return (
    <Product>
      <Img src={src}/>
      <Details to={`/item/${"teste"}`}>
      <ProductName>{name}</ProductName>
      <Price>${price}</Price>
      <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aliquid laudantium rerum</Desc>
      </Details>
      <Select onClick={plusCart}>
        Add to cart 
      </Select>
      
    </Product>
  );
}