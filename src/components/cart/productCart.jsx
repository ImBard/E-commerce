import { Trash } from "@phosphor-icons/react";
import { ContainerImg, Content, Img, Middle, Name, Option, Options, Price, ProductCard, Select, Span, Top } from "./style";

export function ProductCart({name, price, size, color, img}) {

  return (
    <ProductCard>

      <ContainerImg>
        <Img src={`http://localhost:3000/static/product/` + img} alt="" />
      </ContainerImg>
      <Content>
        <Top>
          <Price>${price}</Price>
          <Trash size={21} color="#494949" />
        </Top>
        <Middle>
          <Name>{name}</Name>
        </Middle>
          <Options>
          <Select>
            <Span>Size: </Span>
            <Option>
              <option>M</option>
              <option>S</option>
              <option>L</option>
              <option>XL</option>
            </Option>
          </Select>
          <Select>
            <Span>Color: </Span>
            <Option>
              <option>Orange</option>
              <option>Black</option>
              <option>White</option>
              <option>Blue</option>
            </Option>
          </Select>
          <Select>
            <Span>Q-ty: </Span>
            <Option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </Option>
          </Select>
        </Options>
      </Content>
    </ProductCard>

  );
}