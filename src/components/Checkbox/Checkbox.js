import styled from "@emotion/styled";
import { css } from "@emotion/core";
import React from "react";

const BasicCheckbox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const HiddenCheckbox = (props) => <BasicCheckbox {...props} type="checkbox" />;

const dynamicIcon = (props) =>
  css`
    visibility: ${props.checked ? "visible" : "hidden"};
  `;

const dynamicColor = (props) =>
  css`
    background: ${props.checked ? "#00aeef" : "white"};
    border: ${props.checked ? "2px solid #00aeef" : "2px solid #757575"};
  `;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 3px;
  transition: all 150ms;
  ${dynamicColor};
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
  ${dynamicIcon};
`;

const Checkbox = ({ className, checked, onChange }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} onChange={onChange} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24" checked={checked}>
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);

export default Checkbox;
