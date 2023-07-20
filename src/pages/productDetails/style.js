import { styled } from "styled-components";

export const Product = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: flex-start;

  @media only screen and (min-width: 750px) {
    flex-direction: row;
  }
`;

export const Imgs = styled.div`
  display: flex;
  height: 800px;
  /* background-color: gray; */
  flex-direction: column-reverse;
  width: 100%;
  align-items: center;
  padding: 13px;
  
  @media only screen and (min-width: 750px) {
    justify-content: space-evenly;
    flex-direction: row;
    width: 60%;
    padding: 21px;
    align-items: flex-start;
  }
`;

export const UlImg = styled.ul`
  display: flex;
  gap: 13px;
  width: 100%;
  height: 110px;
  overflow-x: scroll;
  
  @media only screen and (min-width: 750px) {
    overflow: visible;
    width: 15%;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const LiImg = styled.li`
  list-style-type: none;
  border: 1px solid bisque;
  border-radius: 5px;
  height: 100px;
  width: 100px;
`;

export const LittleImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  object-position: top;
  border-radius: 5px;
`;

export const MainImg = styled.img`
  width: 60%;
  height: 80%;
  object-fit: cover;
  object-position: top;
  margin-bottom: 8px;

  @media only screen and (max-width: 750px) {
    width: 100%
  }
`;

export const Infos = styled.div`
  /* background-color: gray; */
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 13px;

  @media only screen and (min-width: 750px) {
    width: 40%;
  }
`;

export const Rating = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
`;

export const Stars = styled.div`
  display: flex;
  margin-right: 8px;
  gap: 5px;
`;
export const ReviewQtd = styled.span`
  color: black;
  font-weight: 500;
`;

export const Share = styled.button`
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #737373;
  justify-self: end;
  font-size: 16px;
`;

export const TextGray = styled.p`
  color: #737373;
  font-size: small;
  margin-bottom: 8px;
`;

export const Bold = styled.b`
  color: black;
`;

export const Name = styled.h2`
  color: black;
  font-size: 21px;
  font-weight: 900;
  margin-bottom: 5px;
`;

// export const ProductId = styled.p`

// `;

export const Price = styled.span`
  font-weight: 700;
  color: black;
  font-size: large;
  margin-bottom: 8px;
  font-size: larger;
`;

export const Selector = styled.div`
  margin-bottom: 13px;
`;

// export const Selected = styled.p`

// `;

export const UlSelector = styled.ul`
  display: flex;
  gap: 13px;
  list-style-type: none;
  margin-top: 13px;
`;

export const LiSelector = styled.li`

`;

export const ButtonSelectorSize = styled.button`
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  border: 2px solid #d3d3d3;
  background-color: ${(props) => props.Selected || "white"};
`;
export const ButtonSelectorColor = styled.button`
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  background-color: ${(props) => props.color};
`;

export const AddCart = styled.button`
  background: none;
  background-color: black;
  height: 60px;
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  font-weight: 600;
  font-size: medium;
  margin-block: 33px;
`;


export const Recommended = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 33px;
`;

export const Title = styled.h1`
  color: black;
  margin-left: 13px;
  font-size: xx-large;
  @media only screen and (max-width: 875px) {
    font-size: 33px;
  }
`;

export const List = styled.div`
   display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 875px) {
    flex-direction: row;
  }
`;