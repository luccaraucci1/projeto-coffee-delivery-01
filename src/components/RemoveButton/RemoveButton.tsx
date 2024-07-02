import { Trash } from "phosphor-react";
import { Button } from "./styles";

interface RemoveButtonProps{
  handleRemoveItem: () => void
}

export function RemoveButton({handleRemoveItem} : RemoveButtonProps){

  return (
    <Button onClick={handleRemoveItem}>
    
        <Trash size={18} />
        <span>Remover</span>

    </Button>
  )
}