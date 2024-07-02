import { Package, ShoppingCart, Timer, Coffee } from "phosphor-react";
import { Header } from "../../components/Header/Header";
import { Container, BannerDiv, TextDiv, CoffeeListDiv, ListItem, List } from "./styles";
import { useTheme } from "styled-components";
import { Card } from "../../components/Card/Card";
import { coffees } from '../../../data.json';


export function Home() {
  const theme = useTheme()
  

  return (
    <Container>
        <Header />
        <BannerDiv>
          <div>
            <TextDiv>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
            </TextDiv>


            <List>
              <ListItem>
                <ShoppingCart size={32} style={{ background: theme.colors['yellow-dark']}} weight="fill"/>
                <span>Compra simples e segura</span>
              </ListItem>
              <ListItem>
                <Package size={32} style={{ background: theme.colors['base-text']}} weight="fill"/>
                <span>Embalagem mantém o café intacto</span>
              </ListItem>
              <ListItem>
                <Timer size={32} style={{ background: theme.colors.yellow}} weight="fill"/>
                <span >Entrega rápida e rastreada</span>
              </ListItem>
              <ListItem>
                <Coffee size={32} style={{ background: theme.colors.purple}} weight="fill"/>
                <span>O café chega fresquinho até você</span>
              </ListItem>
            </List>
      

          </div>
          <img src="../images/hero.svg"/>
          <img src="../images/hero-bg.svg" id="bannerbg"/>
        </BannerDiv>
        
        <CoffeeListDiv>
          
          <h1>Nossos cafés</h1>

          
            
              {coffees.map(coffee => <Card key={coffee.id} coffee={coffee} />)}
            
            
          
        </CoffeeListDiv>
    </Container>
  )
}