import { ReactNode, createContext, useState} from "react";
import { Order } from "../pages/Checkout";

export interface Item {
  id: string
  quantity: number
}


interface CartContextType {
  order: Order
  cartItems: Item[]
  addToCart: (item: Item) => void
  removeFromCart: (itemId: string) => void
  quantityUp: (itemId: string) => void
  quantityDown: (itemId: string) => void
  orderComplete: (data: Order) => void
}


export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps{
  children: ReactNode
}


export function CartContextProvider({children}: CartContextProviderProps){
  const [cartItems, setCartItems] = useState<Item[]>([])
  const [order, setOrder] = useState<Order>()

  function addToCart(item: Item){
    setCartItems(state => {
      // Verifica se o item já está no array
      const itemExists = state.find(el => el.id === item.id);
    
      if (itemExists) {
        // Se o item existe, cria um novo array com a quantidade atualizada
        return state.map(el => {
          if (el.id === item.id) {
            // Cria um novo objeto com as propriedades do item atualizadas
            return {
              ...el,
              quantity: el.quantity + item.quantity
            };
          }
          // Retorna o item sem modificações
          return el;
        });
      } else {
        // Se o item não existe, adiciona o novo item ao array
        return [...state, item];
      }
    });
  }

  function removeFromCart(itemId: string){
    setCartItems(state => {
      const newArray = state.filter(el => {
        return el.id !== itemId
      })
      return newArray
    })
  }

  function quantityUp(itemId: string){
    
    setCartItems(state => {
      return state.map(el => {
        if(el.id === itemId){
          return{
            ...el,
            quantity: el.quantity + 1
          }
        
        }
        return el
      })
    })
  }

  function quantityDown(itemId: string){
    
    setCartItems(state => {
      return state.map(el => {
        if(el.id === itemId && el.quantity !== 1){
          return{
            ...el,
            quantity: el.quantity - 1
          }
        }
        return el
      })
    })
  }

  function orderComplete(data: Order){
    setOrder(data)
    setCartItems([])
  }
  

  
  return(
    <CartContext.Provider value={{cartItems, addToCart, removeFromCart, quantityUp, quantityDown, orderComplete, order}}>
      {children}
    </CartContext.Provider>
  )
}