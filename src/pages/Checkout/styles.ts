import styled from "styled-components";


export const Container = styled.div`
  margin: 5px 400px;

  
  @media (max-width: 1800px) {
    margin: 5px 120px;
  }

`

export const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;

  h2{
    font-size: 18px;
  }
`

export const Form = styled.div`
 display: flex;
 width: 640px;
 flex-direction: column;
 
`

export const Address = styled.div`
  width: 100%;
  padding: 40px;
  margin: 10px 0;
  background-color: ${({theme}) => theme.colors['base-card']};
  border-radius: 4px;
  
  svg{
    color: ${({theme}) => theme.colors['yellow-dark']};
    margin-right: 10px;
  }
  
  div#card-description{
    display: flex;
    margin-bottom: 20px;

    span{
      font-size: 14px;
    }
  }
`

export const InputForm = styled.div`
  display: grid;
  grid-template-areas: 
  'cep . .'
  'street street streer'
  'address_number full_address full_address'
  'neighborhood city uf';
  grid-template-columns: 200px 1fr 60px;
  grid-gap: 16px 12px;

  
`

interface InputContainerProps{
  gridArea: string;
}

export const InputContainer = styled.div<InputContainerProps>`
  grid-area: ${(props) => props.gridArea};

  p{
    color: red;
    font-size: 12px;
    margin-left: 5px;
    margin-top: 3px;
  }

`

export const TextInput = styled.div`



  display: flex;
  background-color: ${({theme}) => theme.colors['base-input']};
  height: 42px;
  border-radius: 6px;
  
  padding: 10px;


  input{
    width: 100%;
    background-color: transparent;
    border: none;
    outline: 0;
    font-size: 16px;
  }
  span{
    font-size: 12px;
    font-style: italic;
  }
`



export const Payment = styled.div`
  
  width: 100%;
  border-radius: 8px;
  padding: 40px;
  background-color: ${({theme}) => theme.colors['base-card']};

  
  div#header{
    margin-bottom: 30px;
  }


  svg{
    color: ${({theme}) => theme.colors.purple};
    margin-right: 10px;
  }

  >div{
    display: flex;
    
    gap:12px;
    
    span{
      font-size: 14px;
    }
  }

  p#error{
    margin-top: 5px;
    font-size: 12px;
    color: red;
  }
`



export const Cart = styled.div`
  background-color: ${({theme}) => theme.colors['base-card']};
  margin: 10px 0;
  width: 448px;
 
  border-radius: 6px 44px;
`


interface RadioButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected: boolean;
}


export const Radio = styled.button<RadioButtonProps>`
  display: flex;
  width: 178.67px;
  height: 51px;
  padding: 12px;
  background-color: ${props => props.selected ? ({theme}) => theme.colors['purple-light'] : ({theme}) => theme.colors['base-button']};
  color: ${({theme}) => theme.colors['base-text']};
  border-radius: 6px;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid transparent;

  outline: ${props => props.selected ? "1px solid #8047F8" : ""};
  

  &:hover{
    background-color: ${props => props.selected ? ({theme}) => theme.colors['purple-light'] : ({theme}) => theme.colors['base-hover']};
  }


  
  span#payment{
    
    font-size: 12px;
    
  }
  
`

export const CartTotalInfo = styled.div`
  padding: 40px;
 


  

  .iteminfo{
    display:flex;
    justify-content: space-between;
    
   
    img{
      width: 64px;
      height: 64px;
    }
    >div{
      display: flex;
      >div{
        margin-left: 10px;
        >div{
          display: flex;
          margin-bottom: 5px;
        }
      }
      
    }
   
    
    
  }  

  span#line{
    display: flex;
    height: 1px;
    background-color: ${({theme}) => theme.colors['base-button']};
    margin: 20px 0;
  }

  .pricediv{
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    margin: 10px;
  }

  div#total{
    font-weight: 800;
    font-size: 20px;
  }



  
`

export const ConfirmButton = styled.button`
  
  width: 100%;
  height: 46px;
  border-radius: 6px;
  font-weight: 800;
  margin: 10px 0;
  background-color: ${({theme}) => theme.colors.yellow};
  color: ${({theme}) => theme.colors.white};
`

export const Item = styled.div`

`