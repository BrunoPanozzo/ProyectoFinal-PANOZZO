import { createContext } from 'preact';

export const CartContext = createContext()

export function CartProvider({ children }) {
    cons



    return (
        <div>
            <CartContext.Provider>{children}
            </CartContext.Provider>
        </div>
    );
}
