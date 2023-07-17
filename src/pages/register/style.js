import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  @media only screen and (min-width: 750px) {
    justify-content: center;
    align-items: center;
    background-color: #e6e6e6;
  }

`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  @media only screen and (min-width: 750px) {
    flex-direction: row;
    width: 80%;
    justify-content: center;

    background-color: white;
    border-radius: 8px;
    box-shadow: 4px 4px 4px rgba(0,0,0,0.2);
  }
`;

export const Form = styled.form`
  padding: 21px;
  /* margin: auto; */
  height: 120vh;
  align-items: center;

  @media only screen and (min-width: 750px) {
    width: 90%;
    /* margin-right: 50px; */
    padding: 3% 2% 20px 2%;
    height: 100%;
  }

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
  margin-block: 8px 5px;
  width: 100%;
`;

export const Input = styled.input`
  border: 1px solid #222;
  border-radius: 3px;
  padding: 8px;
  font-size: medium;
  outline: none;
`;

export const Grid = styled.div`
  display: ${(props) => props.display};
  grid-template-columns: ${(props) => props.size};
  gap: ${(props) => props.gap};
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 750px) {
    flex-direction: column;
  }
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

export const Doogle = styled.button`
border: none;
outline: none;
background-color: black;
color: white;
font-weight: bold;
padding: 13px;
font-size: medium;
margin-top: 13px;
`;

export const RegisterButton = styled(Link)`
  text-align: center;
  text-decoration: none;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 13px;
  gap: 5px;
  color: black;
`;

export const Cover = styled.div`
  background-image: url("https://github.com/ImBard/E-commerce/blob/main/src/assets/imgModels/prada1.jpg?raw=true");
  object-fit: cover;
  object-position: top;
  width: 100%;
  min-height: 650px;
  background-repeat: no-repeat;

  @media only screen and (min-width: 750px) {
    display: flex;
    width: 100%;
  }
`;

export const BackStep = styled.button`
  /* background-color: #e3e4e6; */
  border: none;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 23px;
`;