import React from 'react';
import styled from 'styled-components';

export const StyledButton = styled.button`
  align-items: center;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : '#2E968C'};
  background-size: cover;
  border-radius: 50px;
  border-width: 2px;
  border-right: none;
  border-left: none;
  border-top: none;
  border-width: ${props => props.borderWidth ? props.borderWidth : '0 0 2px 0'};
  box-shadow: ${props => props.boxShadow ? props.boxShadow : '0px 3px 6px rgba(0,0,0,0.16)'};
  color: ${props => props.textColor ? props.textColor : '#FFFFFF'};
  cursor: pointer; 
  display: flex;
  font-family: "Microsoft JhengHei";
  font-weight: bold;
  font-size: ${props => props.fontSize ? props.fontSize : '12px'};
  justify-content: center;
  margin: ${props => props.margin ? props.margin : '0 auto'};
  padding: ${props => props.padding ? props.padding : '5px 15px'};
  width: ${props => props.width ? props.width : '110px'};
  &:active {
    background-color: ${props => props.activeBackgroundColor};
    color: ${props => props.activeTextColor};
  }
  &:disabled {
    cursor: not-allowed;
    background-color: rgb(240, 240, 240);
    border: none;
  }
  &:focus {
    background-color: ${props => props.focusBackgroundColor};
    color: ${props => props.focusTextColor};
  }
  &:hover {
    background-color: ${props => props.disabled ? 'rgb(240, 240, 240)' : props.hoverBackgroundColor};
    color: ${props => props.hoverTextColor};
  }
`;

const Button = ({
  activeBackgroundColor,
  activeTextColor,
  backgroundColor,
  borderWidth,
  boxShadow,
  data,
  disabled,
  focusBackgroundColor,
  focusTextColor,
  fontSize,
  hoverBackgroundColor,
  hoverTextColor,
  label,
  margin,
  onClick,
  padding,
  textColor,
  type,
  width,
}) => (
  <StyledButton
    activeBackgroundColor={activeBackgroundColor ? activeBackgroundColor : backgroundColor}
    activeTextColor={activeTextColor ? activeTextColor : textColor}
    backgroundColor={backgroundColor}
    borderWidth={borderWidth}
    boxShadow={boxShadow}
    data-payload={data}
    disabled={disabled}
    focusBackgroundColor={focusBackgroundColor ? focusBackgroundColor : backgroundColor}
    focusTextColor={focusTextColor ? focusTextColor : textColor}
    fontSize={fontSize}
    hoverBackgroundColor={hoverBackgroundColor ? hoverBackgroundColor : backgroundColor}
    hoverTextColor={hoverTextColor ? hoverTextColor : textColor}
    margin={margin}
    onClick={onClick}
    padding={padding}
    textColor={textColor}
    type={type ? type : 'button'}
    width={width}
  >
    {label}
  </StyledButton>
);

Button.defaultProps = {
  backgroundColor: '#2E968C',
  textColor: '#FFFFFF',
};

export default Button;
