import { useRef, useState } from "react";
import { AccordionBody, AccordionContainer, AccordionContent, AccordionInner, AccordionItem, AccordionTitle } from "./style";
import { Minus, Plus } from "@phosphor-icons/react";

const AccordionItems = ({
  accordionContent,
  refs,
  currentAccordion,
  setCurrentAccordion,
  setBodyHeight,
  bodyHeight
}) =>
  accordionContent.map(({ title, content }, i) => (
    <AccordionItem key={`accordion-item-${i}`}>
      <AccordionTitle
        onClick={() => { currentAccordion !== i ? setCurrentAccordion(i) : 
          setCurrentAccordion(null);
          setBodyHeight(refs[i].current.clientHeight);
          console.log(refs[i].current.clientHeight);
        }}
      >
        {title}
          {currentAccordion === i &&
            <Plus size = { 21} color = "#171717" weight = "bold" />
          }
          {currentAccordion !== i &&
            <Minus size={21} color="#171717" weight="bold" />
          }
      </AccordionTitle>
      <AccordionBody active={currentAccordion === i} height={bodyHeight}>
        <AccordionContent ref={refs[i]}>{content}</AccordionContent>
      </AccordionBody>
    </AccordionItem>
  ));

export function Accordion({ data }) {
  const [currentAccordion, setCurrentAccordion] = useState(null);
  const [bodyHeight, setBodyHeight] = useState(0);

  const items = [];

  for (let i = 0; i < data.length ; i++) {
    items[i] = useRef(null);
  } 

  return (
    <AccordionContainer>
      <AccordionInner>
        <AccordionItems
          accordionContent={data}
          refs={items}
          currentAccordion={currentAccordion}
          setCurrentAccordion={setCurrentAccordion}
          setBodyHeight={setBodyHeight}
          bodyHeight={bodyHeight}
        />
      </AccordionInner>
    </AccordionContainer>
  );
}