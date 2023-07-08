import { Trash } from "@phosphor-icons/react";
import { ContainerImg, Content, Img, Middle, Name, Option, Options, Price, ProductCard, Select, Span, Top } from "./style";

export function ProductCart() {

  return (
    <ProductCard>

      <ContainerImg>
        <Img src="https://github.com/ImBard/E-commerce/blob/main/src/assets/imgModels/prada2.jpg?raw=true" alt="" />
      </ContainerImg>
      <Content>
        <Top>
          <Price>$155.00</Price>
          <Trash size={21} color="#494949" />
        </Top>
        <Middle>
          <Name>Prada leather bag</Name>
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