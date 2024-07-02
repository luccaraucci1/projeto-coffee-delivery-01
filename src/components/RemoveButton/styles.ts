import styled from "styled-components";

export const Button = styled.button`
  
  background-color: ${({theme}) => theme.colors['base-button']};
  padding: 8px;
  height: 38px;
  margin-left: 7px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors['base-button']};
  text-transform: uppercase;
  gap: 6px;
  transition: all 0.2s;

  svg{
    color: ${({theme}) => theme.colors.purple}
  }

  span{
    color: ${({theme}) => theme.colors['base-text']}
  }
  &:hover{
    background-color: ${({theme}) => theme.colors['base-hover']};
  }

`