import { styled } from "styled-components";

export const AccordionContainer = styled.div`
`;

export const AccordionInner = styled.div`
  position: relative;
  width: 100%;
  border-bottom: 1px solid #737373;
`;


export const AccordionItem = styled.div`
  &:not(:last-child) {
    border-bottom: 1px solid #737373;
  }
`;

export const AccordionTitle = styled.h3`
  margin: 0;
  padding: 1rem;
  cursor: pointer;
  color: black;
  font-size: medium;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AccordionBody = styled.div`
  display: block;
  position: relative;
  padding: 0;
  margin: 0;
  height: ${ ( {heigth} ) =>  heigth };
  overflow: hidden;
  transition: height 0.3s;
`;

export const AccordionContent = styled.p`
  margin: 0;
  padding: 0 1rem 1rem;
  height: auto;
  color: black;
`;

