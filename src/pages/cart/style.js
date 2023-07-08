import { styled } from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  /* background-color: burlywood; */
  justify-content: center;
  align-items: flex-start;
  padding: 21px;

  @media only screen and (min-width: 750px) {
    display: grid;
    grid-template-columns: 60% 40%;
    position: relative;
  }
`;

export const Title = styled.h1`
  font-size: 55px;
  color: black;
  text-align: left;
  grid-column: 1/3;
  margin-bottom: 13px;
`;

export const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const Scroll = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: auto;
  height: 60vh;
`;

export const Payment = styled.form`
  width: 100%;
  border: 1px solid #c0c0c0;
  padding: 21px;
  
  /* @media only screen and (min-width: 750px) {
    padding: 33px 21px;
    position: fixed;
    width: 35%;
    right: 0;
    top: 25%;
    
  } */
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 900;
  font-size: x-large;
  color: #111;
  padding-block: 21px;
  width: 100%;
  border-top: 1px solid #c0c0c0;
`;

export const FieldRadio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border-bottom: 1px solid #c0c0c0;
  padding-bottom: 21px;
  gap: 21px;
`;

export const LabelRadio = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 13px;
`;

export const Radio = styled.input`
    width: 25px;
    height: 2em;
`;

export const PaymentMethod = styled.div`
  display: flex;
  gap: 21px;
  padding: 33px;
  color: black;
`;

export const Fields = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 45% 45%;
  gap: 13px;

`;

export const Input = styled.input`
  padding: 13px;
  border: 1px solid #c0c0c0;
  grid-column: ${(props) => props.grid};  
  font-size: medium;
`;

export const PayButton = styled.button`
  background-color: black;
  color: white;
  font-weight: 700;
  font-size: large;
  padding: 13px;
  grid-column: 1/3;
  border: none;
  outline: none;
  margin-block: 21px;
`;

 export const AddCode = styled.button`
  border: none;
  background: none;
  outline: none;
  grid-column: 1/3;
  font-size: large;
 `;