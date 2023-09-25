import { createContext, useState } from 'preact';

export const CartContext = createContext([])

export function CartProvider({ children }) {

    //defino mi carrito
    const[cart, setCart] = useState([])

    //defino la funcion agregar una cierta "cantidad" de un "item" al carrito
    const addItem = (item, quantity) => {
        if (existeItem(item))
        {
            //debo encontrar la entrada en el carrito y actualizar la cantidad
            const itemExistente = cart.find((elemento) => elemento.id === item.id)
            itemExistente.cantidad += quantity
        }
        else{
            //agrego la entrada al final del carrito
            setCart(cartActual => [...cartActual, {...item, quantity}])
        }
    }

    //defino la funcion borrar "item" del carrito
    const removeItem = (itemId) => {
        const cartActualizado = cart.filter(elemento => elemento.id !== itemId)
        setCart(cartActualizado)
    }

    //defino la funcion "vaciar" el carrito
    const clearCart = () => {
        setCart([])
    }

    //defino la funcion para saber si un "item" dado está incluído en el carrito
    const isInCart = (itemId) => {
        const itemExistente = cart.some((elemento) => elemento.id === itemId)
        return itemExistente
    }

    return (
            <CartContext.Provider value={{addItem, removeItem, clearCart, isInCart}} >
                {children}
            </CartContext.Provider>
    );
}
