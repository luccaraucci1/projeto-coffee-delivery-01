import styled from "styled-components";

export const Container = styled.div`
  margin: 5px 400px;

  
  @media (max-width: 1800px) {
    margin: 5px 120px;
  }

  
  >h1{
    margin-top: 50px;
    padding: 10px 0;
    color: ${({theme}) => theme.colors['yellow-dark']};
    
  }

  >div{
    display: flex;
    gap: 160px;
  }
  >span{
    font-size: 20px;
  }
  
`
export const DeliveryInfo = styled.div`
 
  width: 100%;
  min-width: 500px;
  margin: 20px 0;

  border-radius: 6px 36px;
  border: 1px solid;
  
  border-color: transparent;
  background-origin: border-box;
  background-image: ${({ theme }) =>
    `linear-gradient(to bottom right, ${theme.colors.yellow}, ${theme.colors.purple})`};
  
`
export const DeliveryInfoInside = styled.div`
  padding: 40px;
  background-color: white;
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  gap: 32px;

  height: 100%;
  >div{
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 16px;
    >div{
      display: flex;
      flex-direction: column;
    }
  }

  svg{
    padding: 8px;
    border-radius: 50%;
    color: ${({theme}) => theme.colors['white']}
  }

`