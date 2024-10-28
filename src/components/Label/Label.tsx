import styled from "styled-components";
import { LabelProps } from "./Label.types";
import React from "react";

const StyledLabel = styled.label<{ disabled?: boolean }>`
  color: ${({ disabled }) => (disabled ? "rgb(128, 128, 128)" : "#000")};
  /* Other styling */
`;

export const Label: React.FC<LabelProps> = ({ text, disabled = false }) => {
  return <StyledLabel disabled={disabled}>{text}</StyledLabel>;
};
