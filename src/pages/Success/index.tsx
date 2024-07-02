import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { Header } from "../../components/Header/Header";
import { Container, DeliveryInfo, DeliveryInfoInside } from "./styles";
import { useTheme } from "styled-components";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";


export function Success(){

  const theme = useTheme()

  const {order} = useContext(CartContext)

  const paymentMethod = {
    credit: "Cartão de Credito",
    debit: "Cartão de Débito",
    cash: "Dineheiro"
  }

  

  return (
    <Container>
      <Header />
      
        <h1>Uhu! Pedido confirmado</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      <div>
        <DeliveryInfo>
          <DeliveryInfoInside>
            <div>
              <MapPin size={32} style={{backgroundColor: theme.colors.purple}} weight='fill'/> 
              <div>
                <span>Entrega em <strong>{order.street} , {order.address_number}</strong></span>
                {order.neighborhood} - {order.city} , {order.uf} 
              </div> 
            </div>
            <div>
              <Timer size={32} style={{backgroundColor: theme.colors.yellow}} weight='fill' /> 
              <div>
                <span>Previsão de entrega</span>
                <strong>20 - 30 minutos</strong>
              </div>
            </div>
            <div>
              <CurrencyDollar size={32} style={{backgroundColor: theme.colors['yellow-dark']}} weight='fill'/> 
                <div>
                  <span>Pagamento na entrega</span>
                  <strong>{paymentMethod[order.payment]}</strong>
                </div> 
            </div>
          </DeliveryInfoInside>
        </DeliveryInfo>

        <img src="/images/delivery.svg" />
      </div>
    </Container>
  )
}