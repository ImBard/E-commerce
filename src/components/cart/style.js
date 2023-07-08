import { styled } from "styled-components";

export const ProductCard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 21px;
  padding-block: 13px;
  /* border-bottom: 1px solid #c1c1c1; */
  width: 100%;
`;

export const ContainerImg = styled.div`
  display: flex;
  width: 33%;
  height: 110px;

  @media only screen and (min-width: 750px) {
    width: 27%;
    height: 200px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 62%;
  padding-top: 3px;

  @media only screen and (min-width: 750px) {
    display: grid;
    grid-template-rows: 1fr 1fr 2fr;
  } 
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Middle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 21px;
`;
 
export const Bottom = styled.div`
  display: flex;
  align-items: center;

  
`;

export const Price = styled.span`
  font-size: x-large;
  color: black;
  text-align: left;
  font-weight: 800;
`;

export const Name = styled.p`
  font-size: 16px;
  color: black;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Options = styled.div`
  display: flex;
  color: black;
  column-gap: 8px; 
  align-items: center;
  flex-wrap: wrap;

  @media only screen and (min-width: 750px) {
    align-items: flex-end;
  }
`;

export const Select = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Option = styled.select`
  font-weight: bold;
  border: none;
  outline: none;
  font-size: small;
  @media only screen and (min-width: 750px) {
    font-size: medium;
  }
`;

export const Span = styled.span`
  color: #737373;
  font-size: small;

  @media only screen and (min-width: 750px) {
    font-size: medium;
  }
`;