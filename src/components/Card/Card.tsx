import { ShoppingCart } from "phosphor-react"
import { CardDiv, CoffeeTags, CoffeeInfo, CoffeeFooter, Price } from "./styles"
import { QuantityInput } from "../QuantityInput/QuantityInput"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { CheckFat } from "@phosphor-icons/react"
import { useTheme } from "styled-components"

interface CoffeeProps{
  coffee: {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
  }

}




export function Card({ coffee }: CoffeeProps){

  const theme = useTheme()

  const adjustedPrice = coffee.price.toFixed(2)
  


  const { addToCart } = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)
  const [isItemAdded, setIsItemAdded] = useState(false)

  const item = {id: coffee.id, quantity: quantity}

  


  function handleQuantityUp(){
    setQuantity(quantity + 1);
  }

  function handleQuantityDown(){
    if(quantity > 1){
      setQuantity(quantity - 1);
    }
  }


  function handleAddToCart() {
    addToCart(item)
    setIsItemAdded(true)
  }

  useEffect(() => {
    if(isItemAdded){
      setTimeout(() => {
        setIsItemAdded(false)
      }, 1000)
    }
  }, [isItemAdded])

  return(
    <CardDiv>
      <CoffeeInfo>
        <img src={coffee.image}/>
        <CoffeeTags>
          {coffee.tags.map(tag => <span key={tag}>{tag}</span>)}
          
        </CoffeeTags>
        <h2>{coffee.title}</h2>
        <span>{coffee.description}</span>
      </CoffeeInfo>
      <CoffeeFooter>
        <Price>
          <span>R$</span><h1>{adjustedPrice}</h1>
        </Price>

        <div>
          <QuantityInput 
            quantity={quantity} 
            handleQuantityUp={handleQuantityUp} 
            handleQuantityDown={handleQuantityDown}
          />
          <button id="cart_button" style={{backgroundColor: isItemAdded ?   theme.colors['yellow-dark'] : theme.colors['purple-dark']}} onClick={handleAddToCart} type="button" >
            {isItemAdded ? <CheckFat size={22} weight="fill" /> : <ShoppingCart size={22} weight="fill"/>}
          </button>
        </div>
      </CoffeeFooter>
    </CardDiv>
  )
}