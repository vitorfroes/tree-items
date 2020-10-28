import styled from "@emotion/styled";
import React, { useRef, useState } from "react";
import AccordionIcon from "./AccordionIcon";

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const AccordionHead = styled.button`
  background-color: #ffffff;
  color: #444;
  cursor: pointer;
  padding: 18px;
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  transition: background-color 0.6s ease;
  &:hover,
  &.active {
    background-color: #ccc;
  }
`;

const AccordionContent = styled.div`
  background-color: white;
  overflow: hidden;
  transition: max-height 0.6s ease;
`;

const AccordionChild = styled.div`
  font-weight: 400;
  font-size: 14px;
  padding-left: 18px;
`;

const Accordion = ({ title, content }) => {
  const [active, setActive] = useState("");
  const [height, setHeight] = useState("0");
  const [rotate, setRotate] = useState("");
  const [fill, setFill] = useState("#757575");

  const accordionContent = useRef(null);

  const toggleAccordion = () => {
    setActive(active === "" ? "active" : "");
    setHeight(
      active === "active" ? "0" : `${accordionContent.current.scrollHeight}px`
    );
    setRotate(active === "active" ? "" : "rotate");
    setFill(active === "active" ? "#757575" : "#00aeef");
  };

  return (
    <AccordionSection>
      <AccordionHead className={active} onClick={toggleAccordion}>
        <p>{title}</p>
        <AccordionIcon className={rotate} width={15} fill={fill} />
      </AccordionHead>
      <AccordionContent
        ref={accordionContent}
        style={{ maxHeight: `${height}` }}
      >
        <AccordionChild>{content}</AccordionChild>
      </AccordionContent>
    </AccordionSection>
  );
};

export default Accordion;
