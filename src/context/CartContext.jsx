import { createContext, useState } from 'react';

export const CartContext = createContext([])

export function CartProvider({ children }) {

    //defino mi carrito
    const [cart, setCart] = useState([])

    //defino la funcion agregar una cierta "cantidad" de un "item" al carrito
    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            //debo encontrar la entrada en el carrito y actualizar la cantidad
            const posItemExistente = cart.findIndex((elemento) => elemento.id === item.id)
            cart[posItemExistente].quantity += quantity
            setCart(cart)
        }
        else {
            //agrego la entrada al final del carrito
            setCart([...cart, {...item, quantity: quantity }])
            //setCart(cartActual => [...cartActual, {...item, quantity}])
        }
    }

    //defino la funcion borrar "item" del carrito
    const removeItem = (itemId) => {
        const cartActualizado = cart.filter(elemento => elemento.id !== itemId)
        setCart(cartActualizado) //setCart([...cartActualizado])
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

    //defino la cantidad total de productos del carrito
    const totalItems = () => {
        return cart.reduce((acum, prod) => acum += prod.quantity, 0)
    }

    //defino el monto total del carrito
    const totalMonto = () => {
        return cart.reduce((acum, prod) => acum += prod.quantity * prod.precio, 0)
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, isInCart, totalItems, totalMonto }} >
            {children}
        </CartContext.Provider>
    );
}
