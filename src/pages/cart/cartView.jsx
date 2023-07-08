import { ProductCart } from "../../components/cart/productCart";
import { Name, Span } from "../../components/cart/style";
import { Header } from "../../components/header/header";
import { AddCode, FieldRadio, Fields, Input, LabelRadio, Main, PayButton, Payment, PaymentMethod, ProductList, Radio, Scroll, Title, Total } from "./style";

export function Cart() {

  return (
    <>
      <Header />
      <Main>
        <Title>My Cart</Title>
        <ProductList>
          {/* <Scroll> */}
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
          {/* </Scroll> */}
          <Total>
            <span>Sub-total</span>
            <span>$310.00</span>
          </Total>
        </ProductList>
        <Payment>
          <FieldRadio>
            <LabelRadio htmlFor="delivery">
              <Radio id="delivery" name="delivery" type="radio" />
              <Name>Free delivery</Name>
              <Span>15-20 business days</Span>
            </LabelRadio>
            <LabelRadio htmlFor="delivery">
              <Radio id="delivery" name="delivery" type="radio" />
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

            <PayButton>PAY 310.00</PayButton>

            <AddCode>Add discount code</AddCode>

          </Fields>
        </Payment>
      </Main>
    </>
  );
}