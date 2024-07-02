import { HeaderDiv, LocationButtonDiv, CartLink } from "./styles";
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { useContext } from "react";
import { Link } from 'react-router-dom'
import { CartContext } from "../../context/CartContext";

export function Header(){
  const { cartItems } = useContext(CartContext)

  return(
    <HeaderDiv>
      <Link to='/'>
        <img src="/logo.svg"/>
      </Link>
      <div>
        <LocationButtonDiv>
          <MapPin size={22} weight="fill"/>
          <span>Porto Alegre, RS</span>
          
        </LocationButtonDiv>

        <Link to='/checkout'>
          <CartLink disabled= {cartItems.length === 0}>
            {cartItems.length > 0 ? <span><strong>{cartItems.length}</strong></span> : null}
            
            <ShoppingCart size={22} weight="fill"/>
          </CartLink>
        </Link>
      </div>

      
    </HeaderDiv>
  )
}