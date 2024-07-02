import styled from "styled-components";

export const CardDiv = styled.div`
  background-color: ${({ theme }) => theme.colors['base-card']};
  padding: 0 20px 20px;
  border-radius: 6px 36px;
  width: 256px;

  display: flex;
  flex-direction: column;

  text-align: center;

  margin-top: 40px;
  

`

export const CoffeeInfo = styled.div`
  span{
    font-size: 14px;
    color: ${({theme}) => theme.colors['base-label']}
  }
  img{
    margin-top: -20px;
  }
  h2{
    font-size: 20px;
    font-weight: bold;
  }
`

export const CoffeeTags = styled.div`
  margin-bottom: 10px;
  
  span{
    padding: 6px 10px;
    font-size: 10px;
    font-weight: 600;
    background-color: ${({theme}) => theme.colors['yellow-light']};
    color: ${({theme}) => theme.colors['yellow-dark']};
    text-transform: uppercase;
    border-radius: 12px;
    margin-right: 5px;
  }
`
export const CoffeeFooter = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  height: 38px;
  span{
    font-size: 14px;
  }

  h1{
    font-size: 28px;
    color: ${({theme}) => theme.colors['base-text']}
  }


  > div{
    display:flex;
    align-items: center;
    justify-content: center;
   
    
   
    button#cart_button{
      display: flex;
      padding: 8px;
      
      color: ${({theme}) => theme.colors['base-card']};
      border-radius: 6px;
      margin-left: 5px;
      transition: background-color 0.2s;

      
      &:hover{
        background-color: ${({theme}) => theme.colors.purple};
      }
    }
  }

`

export const Price = styled.div`
  display: flex;
  gap: 5px;
  
`
