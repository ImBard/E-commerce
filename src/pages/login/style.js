import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

`;

export const Form = styled.form`
  padding: 21px;
  /* margin: auto; */
  height: 100vh;
`;

export const Logo = styled.div`
  color: black;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: larger;
  margin-bottom: 34px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* gap: 5px; */

`;

export const ImgLogo = styled.img`
  width: 60px;

`;

export const Title = styled.h1`
  color: black;
  font-size: 40px;
`;  

export const SubTitle = styled.p`
  color: black;
  color: #555;
  font-size: smaller;
  margin-bottom: 13px;
`;

export const InputLabel = styled.label`
  color: black;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-block: 21px 5px;
`;

export const Input = styled.input`
  border: 1px solid #222;
  border-radius: 3px;
  padding: 8px;
  font-size: medium;
  outline: none;
`;

export const Actions = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 13px;
  font-size: small;
`;

export const LabelCheck = styled.label`
  color: black;
  display: flex;
  gap: 5px;
`;

export const Check = styled.input`
  width: 16px;
  height: 16px;
`;

export const Forgot = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const SubmitButton = styled.button`
  border: none;
  outline: none;
  background-color: black;
  color: white;
  font-weight: bold;
  padding: 13px;
  font-size: medium;
  margin-top: 34px;
`;

export const Register = styled(Link)``;

export const Cover = styled.div`
  background-color: red;

  @media only screen and (min-width: 750px) {
    display: none;
    background-color: blue;
  }
`;