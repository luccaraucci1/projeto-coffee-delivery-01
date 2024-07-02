import styled from "styled-components";


export const Container = styled.div`
  margin: 5px 400px;

  
  @media (max-width: 1800px) {
    margin: 5px 120px;
  }

`

export const BannerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%; /* Garante que a div ocupe todo o espaço disponível */
  padding: 90px 0;
  

  img#bannerbg {
    position: absolute;
    top: 0;
    left: 50%; /* Posiciona a partir do centro */
    transform: translateX(-50%); /* Ajusta para a esquerda em relação ao centro */
    width: 100vw; /* Largura total da viewport */
    height: 544px; /* Altura desejada */
    object-fit: cover; /* Ajusta para cobrir todo o espaço */
  }



 
`

export const TextDiv = styled.div`
  margin-right: 50px;
  
  h1{
    font-weight: 800;
    font-size: 48px;
    color: ${({theme}) => theme.colors['base-title']};
  }
  

  p{
    margin: 20px 0;
    font-size: 20px;
    color: ${({theme}) => theme.colors['base-subtitle']};
  }

`



export const List = styled.div`
  width: 587px;
  padding: 40px 0;
  display: flex;
  flex-wrap: wrap;
`

export const ListItem = styled.div`
  display: flex;
  width: 293.5px;
  margin-bottom: 20px;
  align-items: center;
  
  svg{
    padding: 6px;
    border-radius: 50%;
    color: white;
    margin-right: 10px;
  }
`




export const CoffeeListDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  gap: 12px;
  max-width: 1160px;
  justify-content: center;
  align-items: center;

  >h1{
    width: 100%;
    
    font-weight: 800;
    color: ${({theme}) => theme.colors['base-subtitle']}
    
  }

`
