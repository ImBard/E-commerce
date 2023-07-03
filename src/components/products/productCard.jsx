import { Details, Img, Price, Product, ProductName, Select } from "./style";

export function ProductCard({ src, name, price }) {
  return (
    <Product>
      <Img src={src}/>
      <Details>
      <ProductName>{name}</ProductName>
      <Price>${price}</Price>
      <Select>
        asdasdasdad
      </Select>
      </Details>
      
    </Product>
  );
}