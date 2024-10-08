import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';
import React from 'react';

// Styled component for the select element
const StyledSelect = styled.select<{ disabled?: boolean; backgroundColor?: string }>`
  padding: 8px;
  background-color: ${({ disabled, backgroundColor }) =>
    disabled ? 'grey' : backgroundColor || '#fff'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

// Dropdown component
export const Dropdown: React.FC<DropdownProps> = ({
  options,
  disabled = false,
  backgroundColor
}) => {
  return (
    <StyledSelect disabled={disabled} backgroundColor={backgroundColor}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
};
