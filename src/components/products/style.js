import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  width: 32%;
  height: 610px;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
  object-position: top;
  margin-bottom: 8px;
`;

export const Details = styled(Link)`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  text-decoration: none;
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

export const Select = styled.button`
  display: flex;
  grid-column: 1/3;
  background-color: darkorchid;
  border: none;
  height: 40px;
  width: 100%;
  justify-self: center;
  color: white;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 21px;
  cursor: pointer;
`;

export const Desc = styled.p`
  color: darkgray;
  font-size: smaller;
  margin-bottom: 3px;
`;