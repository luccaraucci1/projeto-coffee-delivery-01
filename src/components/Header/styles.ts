import styled from "styled-components";

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 10px;
  align-items: center;

  div{
    display: flex;
    
  }
`

export const LocationButtonDiv = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors['purple-light']};
  color: ${({theme}) => theme.colors['purple-dark']};
  border-radius: 6px;
  padding: 8px;
  align-items: center;
  gap: 4px;

  svg{
    color: ${({theme}) => theme.colors['purple']};
  }

`

export const CartLink = styled.button`
  display: flex;
  background-color: ${({theme}) => theme.colors['yellow-light']};
  color: ${({theme}) => theme.colors['yellow-dark']};
  border-radius: 6px;
  padding: 8px;
  margin-left: 12px;
  position: relative;

  &:disabled{
    cursor: default;
  }

  span{
  
  background-color: ${({theme}) => theme.colors["yellow-dark"]};
  color: ${({theme}) => theme.colors["white"]};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: -10px;
  left: 25px;  
    

  }
  
  
`

