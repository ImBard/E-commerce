/* eslint-disable react/prop-types */
import { useContext } from "react";
import { HelperContext } from "../../contexts/helpersContext";
import { Desc, Details, FullCard, Img, Price, Product, ProductName, Select } from "./style";

export function ProductCard({ src, name, price, showDescs, code }) {
  const { plusCart } = useContext(HelperContext);
  return (
    <Product
      width={showDescs ? "32%" : "100%"}
      padding={!showDescs ? "13px" : ""}
    >
      <Img src={src} />
      <Details to={`/item/${code}`}>
        <ProductName>{name}</ProductName>
        <Price>${price}</Price>
      </Details>
      <FullCard display={!showDescs ? "none": ""}>
        <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aliquid laudantium rerum</Desc>
        <Select onClick={plusCart}>
          Add to cart
        </Select>
      </FullCard>

    </Product>
  );
}