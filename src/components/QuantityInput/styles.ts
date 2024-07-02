import styled from "styled-components";

export const QuantityInputDiv = styled.div`
  display: flex;
  padding: 5px 10px;
  gap: 5px;
  background-color: ${({theme}) => theme.colors['base-button']};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  height: 38px;
  width: 72px;
  justify-content: space-between;
  
  button{
    background: transparent;
  }

  button svg{
    color: ${({theme}) => theme.colors.purple};

    &:hover{
      color: ${({theme}) => theme.colors['purple-dark']}
    }
  }

   
`