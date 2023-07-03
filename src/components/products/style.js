import { styled } from "styled-components";

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  width: 32%;
  height: 610px;
  background-color: white;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
  object-position: top;
  margin-bottom: 8px;
`;

export const Details = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;

`;

export const ProductName = styled.h2`
  color: hsl(212, 21%, 14%);
  font-size: 21px;
  `;

export const Price = styled.span`
  color: hsl(212, 21%, 14%);
  font-weight: 600;
  text-align: right;
`;

export const Select = styled.div`
  display: flex;
  grid-column: 1/3;
  background-color: darkorchid;
`;