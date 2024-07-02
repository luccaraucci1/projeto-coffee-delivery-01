import {Plus, Minus} from 'phosphor-react'
import { QuantityInputDiv } from './styles'

interface QuantityInputProps{
  quantity: number
  handleQuantityUp: () => void
  handleQuantityDown: () => void

}


export function QuantityInput({quantity, handleQuantityUp, handleQuantityDown}: QuantityInputProps){

  return(
    <QuantityInputDiv>
        <button type='button' onClick={handleQuantityUp}>
          <Plus />
        </button>
        
        <span>{quantity}</span>
        <button type='button' onClick={handleQuantityDown}>
          <Minus />
        </button>
    </QuantityInputDiv>
  )
}