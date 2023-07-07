import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Head = styled.header`
  display: flex;
  flex-direction: column;
  background-color: gray;
  width: 100%;
  height: 125px;
  background-color: white;
  border-bottom: 1px solid #afafaf;
  overflow: hidden;
`;

export const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const Translate = styled.button`
  background: none;
  padding: 8px;
  width: fit-content;
  border: none;
  outline: none;
  width: 10%;
`;

export const Title = styled.h1`
  font-family: 'Fraunces', serif;
  text-align: center;
  color: black;
  font-size: 45px;
  width: 80%;
  `;

export const Sign = styled.button`
  background: none;
  border: none;
  outline: none;
  font-size: 16px;
  width: fit-content;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 5px;
  font-weight: 600;
`;

export const Search = styled.div`
  display: flex;
  border: 1px solid darkgray;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  padding-inline: 13px;
  width: 20%;
`;

export const SearchInput = styled.input`
  border: none;
  background: none;
  outline: none;
  padding: 8px;
  font-size: large;
`;

export const ListCategories = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 13px;
  width: 60%;
  gap: 13px;
`;

export const ButtonList = styled.button`  
  color: black;
  border: none;
  background: none;
  outline: none;
  padding: 8px;
  font-size: 16px;
`;

export const LabelCart = styled(Link)`
  width: 20%;
  display: flex;
  justify-content: end;
  border: none;
  background: none;
  outline: none;
  color: black;
  align-items: center;
  gap: 8px;
  padding-right: 2%;
  text-decoration: none;
`;

export const Cart = styled.span`
  border: none;
  border-radius: 50%;
  background-color: black;
  color: white;
  height: 35px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: large;
  font-weight: 600;
`;