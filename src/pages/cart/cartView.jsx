import { useEffect, useState } from "react";
import { ProductCart } from "../../components/cart/productCart";
import { Name, Span } from "../../components/cart/style";
import { Header } from "../../components/header/header";
import { AddCode, FieldRadio, Fields, Input, LabelRadio, Main, PayButton, Payment, PaymentMethod, ProductList, Radio, Title, Total } from "./style";
import userServices from "../../services/users";

export function Cart() {
  const [cart, setCart] = useState([]);
  
  useEffect(() => {
    getCart("bc3cd828-feba-47fe-9b5b-9ca2861978e6");
  }, [])

  const getAmount = () => {
    return cart.reduce((amount, currentValue) => amount + Number(currentValue.productsEntity.price), 0);
  }

  async function getCart(id) {
    userServices.getMyCart(id)
    .then((response) => {
      console.log(response);
      setCart(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  return (
    <>
      <Header />
      <Main>
        <Title>My Cart</Title>
        <ProductList>
          {/* <Scroll> */}
          {cart.map((item) => {
            return (
              <ProductCart 
              key={item.id} 
              name={item.productsEntity.name}
              price={item.productsEntity.price}
              img={item.productsEntity.imagesEntity[0].path}
              />

            )
          })}
          {/* </Scroll> */}
          <Total>
            <span>Sub-total</span>
            <span>${getAmount()}</span>
          </Total>
        </ProductList>
        <Payment>
          <FieldRadio>
            <LabelRadio htmlFor="delivery1">
              <Radio id="delivery1" name="delivery" type="radio" />
              <Name>Free delivery</Name>
              <Span>15-20 business days</Span>
            </LabelRadio>
            <LabelRadio htmlFor="delivery2">
              <Radio id="delivery2" name="delivery" type="radio" />
              <Name>$20 DHL delivery</Name>
              <Span>5-7 business days</Span>
            </LabelRadio>
          </FieldRadio>

          {/* PARTE QUE PÕE AS BANDEIRAS E FORMA DE PAGAMENTO SEILA */}
          <PaymentMethod>asd</PaymentMethod>

          <Fields>
            <Input type="text" placeholder="XXXX XXXX XXXX XXXX" grid="1/3" />
            <Input type="text" placeholder="MM/YY" />
            <Input type="text" placeholder="CVV" />

            <PayButton>PAY {getAmount()}.00</PayButton>

            <AddCode>Add discount code</AddCode>

          </Fields>
        </Payment>
      </Main>
    </>
  );
}