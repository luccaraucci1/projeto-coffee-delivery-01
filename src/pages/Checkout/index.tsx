import { Bank, CreditCard, CurrencyDollar, MapPin} from "phosphor-react";
import { Header } from "../../components/Header/Header";
import { Address, Container, Form, Payment, Cart, FormContainer, Radio, InputForm, CartTotalInfo, ConfirmButton, TextInput, InputContainer } from "./styles";
import { Money } from "@phosphor-icons/react";
import { useContext} from "react";
import { CartContext } from "../../context/CartContext";
import { coffees } from '../../../data.json'
import { QuantityInput } from "../../components/QuantityInput/QuantityInput";
import { RemoveButton } from "../../components/RemoveButton/RemoveButton";
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";



type Inputs = {
  cep: string
  street: string
  address_number: string
  full_address: string
  neighborhood: string
  city: string
  uf: string
  payment: 'credit' | 'debit' | 'cash'
}

const orderSchema = z.object({
  cep: z.string().min(1, {message: "Informe o CEP"}).length(9, { message: "CEP inválido" }),
  street: z.string().min(1, "Informe a Rua").min(5, {message: "Este campo deve ter no mínimo 5 caracteres"}),
  address_number: z.string().min(1, "Informe o Número"),
  full_address: z.string(),
  neighborhood: z.string().min(1, "Informe o Bairro"),
  city: z.string().min(1, "Informe a Cidade"),
  uf: z.string().min(1, "Informe a UF").length(2, "Este campo deve ter 2 caracteres"),
  payment: z.enum(['credit', 'debit', 'cash'], { invalid_type_error: "Informe a forma de pagamento", })
})

export type Order = z.infer<typeof orderSchema> 



export function Checkout(){

  const { cartItems, removeFromCart, quantityUp, quantityDown, orderComplete} = useContext(CartContext)

  const {register, handleSubmit, control, formState: { errors }, watch, setValue} = useForm<Inputs>({ resolver: zodResolver(orderSchema)})


  const cepValue = watch('cep', '')


  const onSubmit: SubmitHandler<Inputs> = (data) => {
    
    orderComplete(data)
    navigate('/success')
  }

  const navigate = useNavigate()

  const itemsInCart = cartItems.map(item => {
    const coffeeInfo = coffees.find(coffee => (coffee.id === item.id))

    return {
      ...coffeeInfo,
      quantity: item.quantity
    }
  })
  
  const itemTotal = itemsInCart.reduce((acc, item) =>{
    const valuePerItem = item.price! * item.quantity

    return acc + valuePerItem
  }, 0)

  const tax = 3.5

  const total = itemTotal + tax
 
  function handleRemoveItem(itemId: string) {
    removeFromCart(itemId)
    
  }

  function handleQuantityUp(itemId: string){
    quantityUp(itemId)
  }

  function handleQuantityDown(itemId: string){
    quantityDown(itemId)
  }

  function handleCepChange(e : React.ChangeEvent<HTMLInputElement>){
    let value = e.target.value.replace(/-/g, '')
    if (value.length > 5) {
      value = value.slice(0, 5) + '-' + value.slice(5);
    }
    setValue('cep', value);
  }
  
 

  return(
    <Container>
      <Header />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormContainer>
          <Form>

            <h2>Complete seu pedido</h2>

            <Address>
              <div id="card-description">
                <MapPin size={32} />
                <div>
                <p>Endereço de Entrega</p>
                <span>Informe o endereço onde deseja receber o seu pedido</span>
                </div>
              </div>
              
              <InputForm>
                <InputContainer gridArea="cep">
                  <TextInput>
                    <input type='text'  maxLength={9} placeholder='CEP' defaultValue='' value={cepValue} {...register("cep", { onChange: handleCepChange })}/>
                  </TextInput>
                  {{errors} && <p>{errors.cep?.message}</p>}
                </InputContainer>
      
               
                <InputContainer gridArea="street">
                  <TextInput>
                    <input type='text' maxLength={62} placeholder='Rua' defaultValue='' {...register("street")}/>
                  </TextInput>
                  {{errors} && <p>{errors.street?.message}</p>}
                </InputContainer>

  


                <InputContainer gridArea="address_number">
                  <TextInput>
                    <input type='text' maxLength={10} placeholder='Número' defaultValue='' {...register("address_number")}/>
                  </TextInput>
                  {{errors} && <p>{errors.address_number?.message}</p>}
                </InputContainer>

                

                <InputContainer gridArea="full_address">
                  <TextInput>
                    <input type='text' maxLength={30} placeholder='Complemento' defaultValue='' {...register("full_address")}/>
                    <span>Opcional</span>
                  </TextInput>
                  {{errors} && <p>{errors.full_address?.message}</p>}
                </InputContainer>


             

                
                <InputContainer gridArea="neighborhood">
                  <TextInput>
                    <input type='text' maxLength={19} placeholder='Bairro' defaultValue='' {...register("neighborhood")}/>
                  </TextInput>
                  {{errors} && <p>{errors.neighborhood?.message}</p>}
                </InputContainer>

                

                <InputContainer gridArea="city">
                  <TextInput>
                    <input type='text' maxLength={27} placeholder='Cidade' defaultValue='' {...register("city")}/>
                  </TextInput>
                  {{errors} && <p>{errors.city?.message}</p>}
                </InputContainer>


                <InputContainer gridArea="uf">
                  <TextInput>
                  <input type='text'  maxLength={2} placeholder='UF' defaultValue='' {...register("uf")}/>
                  </TextInput>
                  {{errors} && <p>{errors.uf?.message}</p>}
                </InputContainer>
                
                
                
                
              </InputForm>
            </Address>

            <Payment>
              <div id="header">
                <CurrencyDollar size={32} />
                <div>
                <p>Pagamento</p>
                <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
                </div>
              </div>

              <Controller
                name="payment"
                control={control}
                render={({ field }) => (
                  <div>
                <Radio 
                  type='button'
                  selected={field.value === 'credit'}
                  onClick={() => field.onChange('credit')}
                >
                  <CreditCard size={22} />
                  <span id="payment">CARTÃO DE CRÉDITO</span>
                </Radio>
                <Radio 
                  type='button'
                  selected={field.value === 'debit'}
                  onClick={() => field.onChange('debit')}
                >
                  <Bank  size={22} />
                  <span id="payment">CARTÃO DE DÉBITO</span>
                </Radio>
                <Radio 
                  type='button'
                  selected={field.value === 'cash'}
                  onClick={() => field.onChange('cash')}
                >
                  <Money size={22} />
                  <span id="payment">DINHEIRO</span>
                </Radio>
              </div>
              
              )}
              />

            {errors.payment && <p id="error">Selecione um método de pagamento</p>}
              
              
            </Payment>
          </Form>

          <div>

            <h2>Cafés selecionados</h2>

            <Cart>
              <CartTotalInfo>
              {itemsInCart && itemsInCart.map(coffee => {
                
                  return (
                    <div key={coffee.id}>
                      <div className="iteminfo" >                
                        <div>
                          <img src={coffee.image} />
                          <div>
                            <div>
                              <span>{coffee.title}</span>
                            </div>


                            <div>
                              <QuantityInput
                                
                                quantity={coffee.quantity}
                                handleQuantityUp={() => handleQuantityUp(coffee.id!)}
                                handleQuantityDown= {() => handleQuantityDown(coffee.id!)}
                              />
                              <RemoveButton  handleRemoveItem={ () => handleRemoveItem(coffee.id!)}/>
                            </div>
                          </div>
                      
                        </div>
                        <aside>
                          <span><strong>R${coffee.price!.toFixed(2)}</strong></span>
                        </aside>
                        
                      </div>
                      <span id="line"/>
                    </div>
                    
                  )
              })}    
                  

                <div className="pricediv">
                  <span>Total de itens</span>
                  <span>R$ {itemTotal.toFixed(2)}</span>
                </div>
                <div className="pricediv">
                  <span>Entrega</span>
                  <span>R$ {tax.toFixed(2)}</span>
                </div >
                <div className="pricediv" id="total">
                  <span>Total</span>
                  <span>R$ {total.toFixed(2)}</span>
                </div>
                <ConfirmButton type='submit'>CONFIRMAR PEDIDO</ConfirmButton>
              </CartTotalInfo>
            </Cart>
          </div>
        </FormContainer>
      </form>
    </Container>
  )
}